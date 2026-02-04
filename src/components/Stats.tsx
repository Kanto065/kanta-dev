"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";

const stats = [
    { label: "Years of Experience", value: "7+" },
    { label: "Projects Completed", value: "50+" },
    { label: "Satisfied Clients", value: "30+" },
    { label: "Design Awards", value: "12" },
];

export default function Stats() {
    return (
        <section className="container mx-auto px-6 py-12 relative z-10 -mt-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <GlassCard className="p-6 text-center hover:bg-white/10 transition-colors duration-300">
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                {stat.value}
                            </h3>
                            <p className="text-sm md:text-base text-gray-400 font-medium">
                                {stat.label}
                            </p>
                        </GlassCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
