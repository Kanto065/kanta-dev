"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Mail, Loader2, Send } from "lucide-react";

export default function Contact() {
    return (
        <section className="container mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left: Info */}
                <div className="space-y-6">
                    <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase">
                        Contact
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                        Let's Work <br />
                        <span className="text-primary">Together.</span>
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                        I'm currently available for freelance work. If you have a project that you want to get started, think you need my help with something or just fancy saying hey, then get in touch.
                    </p>

                    <div className="pt-8">
                        <a href="mailto:hello@example.com" className="flex items-center gap-3 text-white hover:text-primary transition-colors text-xl font-medium">
                            <Mail className="w-6 h-6" />
                            hello@example.com
                        </a>
                    </div>
                </div>

                {/* Right: Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <GlassCard className="p-8">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Name</label>
                                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm text-gray-400">Message</label>
                                <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" placeholder="Tell me about your project..." />
                            </div>

                            <button type="button" className="w-full py-4 bg-primary text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2">
                                Send Message <Send className="w-4 h-4 ml-1" />
                            </button>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </section>
    );
}
