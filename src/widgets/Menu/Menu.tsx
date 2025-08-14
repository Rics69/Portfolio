"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X, Sun, Moon, Download } from "lucide-react";
import { Button } from "@/entities/Button/Button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/entities/sheet/sheet";

export default function Menu() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useState("system");

    const links = useMemo(
        () => [
            { href: "/", label: "Home" },
            { href: "/projects", label: "Projects" },
            { href: "/about", label: "About" },
            { href: "/blog", label: "Blog" },
            { href: "/contact", label: "Contact" },
        ],
        []
    );

    // Theme handling (no external provider needed)
    useEffect(() => {
        setMounted(true);
        const saved = typeof window !== "undefined" && localStorage.getItem("theme");
        const initial = saved || "system";
        applyTheme(initial);
        setTheme(initial);
    }, []);

    function applyTheme(next) {
        const root = document.documentElement;
        const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = next === "dark" || (next === "system" && systemDark);
        root.classList.toggle("dark", isDark);
        localStorage.setItem("theme", next);
    }

    function toggleTheme() {
        const order = ["light", "dark", "system"];
        const idx = order.indexOf(theme);
        const next = order[(idx + 1) % order.length];
        setTheme(next);
        applyTheme(next);
    }

    const isActive = (href) => {
        if (href === "/") return pathname === "/";
        return pathname?.startsWith(href);
    };

    return (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
                {/* Left: Logo */}
                <div className="flex items-center gap-3">
                    <Link href="/" className="group inline-flex items-center gap-2">
                        <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 shadow-md transition-transform group-hover:scale-105" />
                        <span className="text-lg font-semibold tracking-tight">
              Danil Snow
            </span>
                    </Link>
                </div>

                {/* Desktop: nav links */}
                <div className="hidden items-center gap-1 md:flex">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative rounded-xl px-3 py-2 text-sm font-medium text-neutral-700 transition hover:text-black dark:text-neutral-300 dark:hover:text-white"
                        >
                            {link.label}
                            {isActive(link.href) && (
                                <motion.span
                                    layoutId="active-pill"
                                    className="absolute inset-0 -z-10 rounded-xl bg-neutral-900/5 dark:bg-white/10"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                </div>

                {/* Right: actions */}
                <div className="flex items-center gap-2">
                    <Button
                        onClick={toggleTheme}
                        variant="ghost"
                        size="icon"
                        className="rounded-2xl"
                        aria-label="Toggle theme"
                        title={mounted ? `Theme: ${theme}` : "Toggle theme"}
                    >
                        <AnimatePresence mode="wait" initial={false}>
                            {mounted && theme !== "dark" ? (
                                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                                    <Sun className="h-5 w-5" />
                                </motion.span>
                            ) : (
                                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                                    <Moon className="h-5 w-5" />
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </Button>

                    <Button asChild className="hidden sm:inline-flex rounded-2xl">
                        <Link href="/resume.pdf" target="_blank" rel="noopener">
                            <Download className="mr-2 h-4 w-4" /> Resume
                        </Link>
                    </Button>

                    {/* Mobile menu trigger */}
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden rounded-2xl" aria-label="Open menu">
                                <MenuIcon className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[85vw] p-0">
                            <SheetHeader className="px-4 py-3">
                                <SheetTitle className="text-left">Navigation</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col gap-1 p-2">
                                {links.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setOpen(false)}
                                        className={[
                                            "rounded-xl px-4 py-3 text-base font-medium",
                                            "text-neutral-800 dark:text-neutral-100",
                                            isActive(link.href)
                                                ? "bg-neutral-900/5 dark:bg-white/10"
                                                : "hover:bg-neutral-900/5 dark:hover:bg-white/10",
                                        ].join(" ")}
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                                <div className="px-2 pt-2">
                                    <Button asChild className="w-full rounded-2xl">
                                        <Link href="/resume.pdf" target="_blank" rel="noopener" onClick={() => setOpen(false)}>
                                            <Download className="mr-2 h-4 w-4" /> Resume
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </nav>
        </header>
    );
}