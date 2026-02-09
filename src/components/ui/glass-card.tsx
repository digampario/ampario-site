import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                "glass-card rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:bg-white/5 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
