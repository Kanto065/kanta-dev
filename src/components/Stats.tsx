"use client";

import { motion, useInView, animate, AnimatePresence } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { useEffect, useRef, useState } from "react";

const stats = [
    { label: "Years of Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Satisfied Clients", value: "17+" },
    { label: "Certificates", value: "10" },
];

function Counter({ value }: { value: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" }); // Re-animate every time
    const [displayValue, setDisplayValue] = useState(0);

    // Parse numeric part and suffix
    const numeric = parseInt(value);
    const suffix = isNaN(numeric) ? "" : value.replace(numeric.toString(), "");

    useEffect(() => {
        if (!isInView || isNaN(numeric)) {
            setDisplayValue(0); // Reset when out of view
            return;
        }

        const controls = animate(0, numeric, {
            duration: 2, // Slightly faster to make the "slot" effect feel snappy
            ease: "easeOut",
            onUpdate(latest) {
                setDisplayValue(Math.floor(latest));
            }
        });

        return () => controls.stop();
    }, [isInView, numeric]);

    return (
        <span ref={ref} className="flex items-baseline justify-center overflow-hidden h-[1.1em] leading-none">
            <span className="relative flex flex-col items-center">
                <AnimatePresence mode="popLayout">
                    <motion.span
                        key={displayValue}
                        initial={{ y: "-100%", opacity: 0, position: "absolute" }}
                        animate={{ y: "0%", opacity: 1, position: "relative" }}
                        exit={{ y: "100%", opacity: 0, position: "absolute" }}
                        transition={{ duration: 0.2, ease: "backOut" }} // Quick snap
                    >
                        {displayValue}
                    </motion.span>
                </AnimatePresence>
                {/* Invisible duplicate to maintain width stability */}
                <span className="invisible">{numeric}</span>
            </span>
            <span>{suffix}</span>
        </span>
    );
}

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
                            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-2 flex justify-center items-center gap-0.5">
                                <Counter value={stat.value} />
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
