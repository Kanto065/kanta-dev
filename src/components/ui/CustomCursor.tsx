"use client";

import { motion, useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Best practice: Snappy but fluid (High stiffness, low mass)
    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    // Velocity tracking
    const cursorXVelocity = useVelocity(cursorX);
    const cursorYVelocity = useVelocity(cursorY);

    // Map velocity to scale (0 -> 1, 1000+ -> 1.5)
    // We combine X and Y velocity for total speed
    const velocityScale = useTransform(() => {
        const vx = cursorXVelocity.get();
        const vy = cursorYVelocity.get();
        const speed = Math.sqrt(vx * vx + vy * vy);
        return Math.min(1 + speed / 1000, 1.5); // Cap at 1.5x size
    });

    // Track state
    const [isClicking, setIsClicking] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 8);
            cursorY.set(e.clientY - 8);
            if (!isVisible) setIsVisible(true); // Ensure visible on move
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check for interactive elements
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.tagName === "INPUT" ||
                target.tagName === "TEXTAREA" ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        // Hide when leaving window
        const handleMouseOut = (e: MouseEvent) => {
            // If relatedTarget is null, it means we left the window
            if (!e.relatedTarget) {
                setIsVisible(false);
            }
        };

        // Show when entering window
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);
        window.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
            window.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [cursorX, cursorY, isVisible]);

    // Combined scale logic
    const finalScale = useTransform(() => {
        if (isClicking) return 0.8;
        if (isHovering) return 3.5;
        return velocityScale.get();
    });

    // Smoothing the scale transition (handles both velocity and hover states)
    const smoothScale = useSpring(finalScale, { stiffness: 100, damping: 20 });

    return (
        <motion.div
            className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
                scale: smoothScale,
            }}
            animate={{
                opacity: isVisible ? 1 : 0
            }}
            transition={{
                default: { duration: 0.1 }
            }}
        />
    );
}
