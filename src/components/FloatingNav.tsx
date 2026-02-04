"use client";

import { motion } from "framer-motion";
import { User, FileText, Briefcase, Zap, Link } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
    { id: "home", label: "Home", icon: User },
    { id: "summary", label: "Summary", icon: FileText },
    { id: "skills", label: "Skills", icon: Zap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Links", icon: Link },
];

export default function FloatingNav() {
    const [activeTab, setActiveTab] = useState("home");

    const scrollToSection = (id: string) => {
        setActiveTab(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Optional: Add scroll spy to update activeTab on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 200; // Offset

            for (const section of sections) {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    setActiveTab(section.id);
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-fit px-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="flex items-center gap-1 p-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl"
            >
                {navItems.map((item) => {
                    const isActive = activeTab === item.id;

                    return (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${isActive ? "text-black" : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-pill"
                                    className="absolute inset-0 bg-white rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <item.icon className="w-4 h-4 relative z-10" />
                            <span className="hidden md:inline relative z-10">{item.label}</span>
                        </button>
                    );
                })}
            </motion.div>
        </div>
    );
}
