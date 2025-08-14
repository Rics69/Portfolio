import {cn} from "@/utils/cn";
import * as React from "react";

function Sheet({ open, onOpenChange, children }) {
    return open ? (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50" onClick={() => onOpenChange(false)}>
            {children}
        </div>
    ) : null;
}

function SheetContent({ side = "right", className, children }) {
    const sideClasses = {
        right: "ml-auto h-full w-80 bg-white dark:bg-neutral-900 shadow-xl",
        left: "mr-auto h-full w-80 bg-white dark:bg-neutral-900 shadow-xl",
    };
    return <div className={cn(sideClasses[side], className)}>{children}</div>;
}

function SheetHeader({ className, children }) {
    return <div className={cn("border-b border-neutral-200 dark:border-neutral-700", className)}>{children}</div>;
}

function SheetTitle({ className, children }) {
    return <h2 className={cn("text-lg font-semibold px-4 py-2", className)}>{children}</h2>;
}

function SheetTrigger({ asChild = false, children, onClick }) {
    const Comp = asChild ? React.Fragment : "button";
    return <Comp onClick={onClick}>{children}</Comp>;
}

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger };