"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { Mail, MapPin, Phone, Linkedin, ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function Hero() {
    const { scrollY } = useScroll();
    const blurAmount = useTransform(scrollY, [0, 400], ["0px", "20px"]); // Adds strong blur
    const imgBlur = useMotionTemplate`blur(${blurAmount})`;

    return (
        <section className="relative w-full h-screen flex flex-col justify-center">
            {/* Background Gradient/Glow */}
            <div className="absolute inset-0 bg-background z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-[#2A1B00] to-transparent opacity-50" />
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[150px]" />
            </div>

            {/* Top Header */}
            <div className="absolute top-6 left-0 right-0 z-30">
                <div className="container mx-auto px-6 flex justify-between items-start">
                    {/* Status Badge */}
                    <div className="inline-flex items-center gap-3 px-2 py-2 rounded-full text-base font-medium text-white">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                        </span>
                        Open to work
                    </div>

                    {/* Download CV Button */}
                    <motion.button
                        initial="initial"
                        whileHover="hover"
                        variants={{
                            initial: { backgroundColor: "#FFB400" }, // standard hex for primary
                            hover: { backgroundColor: "#ffffff" }
                        }}
                        className="relative px-6 py-2.5 text-black font-bold text-sm rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,87,34,0.3)] w-[140px] h-[45px]"
                    >
                        {/* Text Layer (Slides Down) */}
                        <motion.div
                            variants={{
                                initial: { y: 0, opacity: 1 },
                                hover: { y: "150%", opacity: 0 }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            Download CV
                        </motion.div>

                        {/* Icon Layer (Slides In from Top) */}
                        <motion.div
                            variants={{
                                initial: { y: "-150%", opacity: 0 },
                                hover: { y: 0, opacity: 1 }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <Download className="w-5 h-5" />
                        </motion.div>
                    </motion.button>
                </div>
            </div>

            <div className="container relative z-10 mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full pt-20">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="col-span-12 lg:col-span-7 space-y-6 md:space-y-8 mt-10 md:mt-0"
                >
                    <div>
                        <h2 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-4 tracking-wide uppercase">
                            Full Stack Developer
                        </h2>
                        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-[0.9]">
                            Kanto <br />
                            <span className="text-gray-400">Bhattacharjee</span>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400 text-sm md:text-base max-w-xl">
                        <a href="mailto:kanto@example.com" className="flex items-center gap-3 hover:text-primary transition-colors group">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            kanto.uv@outlook.com
                        </a>
                        <a href="tel:+880123456789" className="flex items-center gap-3 hover:text-primary transition-colors group">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            +880 18366 800 69
                        </a>
                        <a href="https://www.linkedin.com/in/kanta-bhattacharjee/" className="flex items-center gap-3 hover:text-primary transition-colors group">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            kanta-bhattacharjee
                        </a>
                        <div className="flex items-center gap-3 group">
                            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 transition-colors">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                            </div>
                            Dhaka, Bangladesh
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Image Placeholder */}
                {/* Right Content - User Image */}
                {/* Spacer for layout */}
                <div className="hidden lg:block lg:col-span-5" />

                {/* Right Content - User Image (Fixed) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ filter: imgBlur }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="fixed bottom-0 right-0 w-full lg:w-[50%] h-[80vh] flex items-end justify-center lg:justify-end pb-0 z-[-1] pointer-events-none"
                >
                    <div className="relative w-[100%] lg:w-full max-w-[650px] aspect-[3/3.5] mr-0 lg:mr-10">
                        {/* Strong Glow Behind Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#FF5722]/60 blur-[100px] rounded-full -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] bg-white/20 blur-[50px] rounded-full -z-10" />

                        {/* Image Container */}
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/protfolio_img.png"
                                alt="Kanto Bhattacharjee"
                                fill
                                className="object-contain object-bottom"
                                priority
                                unoptimized
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
