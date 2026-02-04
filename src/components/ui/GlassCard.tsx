import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass rounded-3xl border border-white/10 overflow-hidden relative",
                className
            )}
        >
            {/* Optional: subtle noise or gradient overlay could go here */}
            {children}
        </div>
    );
}
