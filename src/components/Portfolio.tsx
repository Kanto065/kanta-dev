"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
    { id: 1, title: "Flowstate", category: "Web App", color: "from-blue-600 to-cyan-500" },
    { id: 2, title: "Apex Template", category: "Design System", color: "from-orange-500 to-yellow-500" },
    { id: 3, title: "Lumina", category: "SaaS Dashboard", color: "from-purple-600 to-pink-500" },
    { id: 4, title: "Quantum", category: "AI Interface", color: "from-emerald-500 to-green-400" },
];

export default function Portfolio() {
    return (
        <section className="container mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div className="space-y-2">
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                        Portfolio
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white">
                        Featured <span className="text-primary">Projects</span>
                    </h3>
                </div>
                <button className="hidden md:flex items-center gap-2 text-white hover:text-primary transition-colors">
                    View All Projects <ArrowUpRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="group"
                    >
                        <GlassCard className="h-[400px] relative p-0 border-white/5 bg-white/5 cursor-pointer hover:border-primary/50 transition-colors duration-500">
                            {/* Background Gradient / Image Placeholder */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-sm font-medium text-primary mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.category}
                                    </span>
                                    <h4 className="text-3xl font-bold text-white mb-2">{project.title}</h4>
                                    <div className="h-1 w-0 group-hover:w-full bg-primary transition-all duration-500" />
                                </div>
                            </div>

                            {/* Decorative Icon */}
                            <div className="absolute top-6 right-6 p-4 rounded-full glass opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-50 group-hover:scale-100">
                                <ArrowUpRight className="w-6 h-6 text-white" />
                            </div>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>

            <button className="md:hidden mt-8 w-full py-4 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-medium flex items-center justify-center gap-2">
                View All Projects <ArrowUpRight className="w-4 h-4" />
            </button>
        </section>
    );
}
