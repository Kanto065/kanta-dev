"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const skills = [
    { name: "Figma", level: 95 },
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 95 },
    { name: "Node.js", level: 80 },
    { name: "Framer Motion", level: 75 },
];

export default function Skills() {
    return (
        <section className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-3">
                        My Skills
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                        I Develop Skills Regularly <br />
                        <span className="text-primary">to Keep Me Sharp.</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        Detailed proficiency in modern web technologies. I focus on creating
                        performant, accessible, and beautiful interfaces using the latest tools in the ecosystem.
                    </p>

                    <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors text-white font-medium">
                        See All Skills
                    </button>
                </motion.div>

                {/* Right: Progress Bars */}
                <div className="space-y-6">
                    {skills.map((skill, index) => (
                        <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-end">
                                <span className="text-white font-medium text-lg">{skill.name}</span>
                                <span className="text-gray-500 text-sm">{skill.level}%</span>
                            </div>
                            <GlassCard className="h-3 w-full bg-white/5 border-none rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "circOut" }}
                                    className="h-full bg-gradient-to-r from-primary/80 to-primary rounded-full relative"
                                >
                                    {/* Glow effect at the end of the bar */}
                                    <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-[4px]" />
                                </motion.div>
                            </GlassCard>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
