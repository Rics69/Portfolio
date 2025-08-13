import * as React from "react";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";
    const variantClasses = {
        default: "bg-indigo-600 text-white hover:bg-indigo-700",
        ghost: "hover:bg-neutral-900/5 dark:hover:bg-white/10",
        outline: "border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800",
        link: "text-indigo-600 underline-offset-4 hover:underline",
    };
    const sizeClasses = {
        default: "h-10 px-4 py-2 rounded-lg text-sm font-medium",
        sm: "h-9 px-3 rounded-md text-sm",
        lg: "h-11 px-8 rounded-xl text-base",
        icon: "h-10 w-10 rounded-lg flex items-center justify-center",
    };

    return (
        <Comp
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 disabled:opacity-50 disabled:pointer-events-none",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
            {...props}
        />
    );
});
Button.displayName = "Button";

export { Button };