"use client";

import { motion } from "framer-motion";

export default function Summary() {
    return (
        <section id="summary" className="container mx-auto px-6 py-20 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="space-y-8 relative z-10"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Summary</h2>

                    <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                        <p>
                            I’m a <span className="font-bold text-white">full-stack developer</span> who builds complete web applications—from intuitive user interfaces to reliable server-side systems. I focus on creating products that look clean, feel fast, and work consistently in real-world use.
                        </p>
                        <p>
                            I enjoy shaping smooth user experiences just as much as designing the logic behind them. My work bridges the gap between frontend and backend, ensuring that interfaces are responsive, data flows are efficient, and systems remain easy to maintain as they grow.
                        </p>
                        <p>
                            I work closely with clients and teams to turn ideas into <span className="font-bold text-white">production-ready solutions</span>, keeping performance, clarity, and usability at the center of every decision.
                        </p>
                    </div>

                    <div className="border-l-4 border-primary pl-6 py-2">
                        <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                            Driven by a curiosity to learn and improve, I continuously explore new tools and methodologies to enhance my work.
                        </p>
                    </div>
                </motion.div>

                {/* Right side - Abstract blurry visual or image */}
                <div className="relative h-full flex items-center justify-center">
                    <div className="absolute w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[100px] -z-10" />
                    {/* Visual element placeholder or just the blur as requested */}
                </div>
            </div>
        </section>
    );
}
