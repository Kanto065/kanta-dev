"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Briefcase, Calendar } from "lucide-react";

const experience = [
    {
        company: "E. B. Solutions Ltd.",
        role: "Software Engineer",
        period: "Feb 2025 - Present",
        description: "Building full-stack products with C# / .NET Core, MongoDB, and MSSQL, with a growing focus on AI-driven development.",
    },
];

export default function Experience() {
    return (
        <section className="container mx-auto px-6 py-20 relative z-10">
            <div className="mb-12">
                <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
                    Career Path
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                    Work <span className="text-primary">Experience</span>
                </h3>
            </div>

            <div className="relative border-l border-white/10 ml-6 md:ml-12 space-y-12">
                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="relative pl-8 md:pl-12"
                    >
                        {/* Timeline Dot */}
                        <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />

                        <GlassCard className="p-8 hover:bg-white/5 transition-colors duration-300">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">{job.role}</h4>
                                    <div className="flex items-center gap-2 text-primary mt-1 font-medium">
                                        <Briefcase className="w-4 h-4" />
                                        {job.company}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-400 text-sm bg-white/5 px-3 py-1 rounded-full w-fit">
                                    <Calendar className="w-4 h-4" />
                                    {job.period}
                                </div>
                            </div>
                            <p className="text-gray-400 leading-relaxed">
                                {job.description}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
