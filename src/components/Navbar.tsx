"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 border-b ${
                scrolled
                    ? "bg-brand-darkblue shadow-lg border-white/10 py-0"
                    : "bg-brand-darkblue border-transparent py-2"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20 md:h-24">

                    {/* Logó / Márkanév */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <Image
                            src="/media/logo.png"
                            alt="Autópatika logó"
                            width={200}
                            height={80}
                            className="object-contain h-12 md:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                            priority
                        />
                        <span className="text-2xl font-black text-white tracking-widest hidden sm:block">
              Autópatika
            </span>
                    </Link>

                    {/* Asztali menü */}
                    <nav className="hidden md:flex gap-10 items-center">
                        {[
                            { name: "Kezdőlap", path: "/" },
                            { name: "Szolgáltatások", path: "/szolgaltatasok" },
                            { name: "Elérhetőség", path: "/elerhetoseg" },
                        ].map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`relative text-sm uppercase tracking-widest font-bold py-2 transition-colors group ${
                                    isActive(link.path) ? "text-brand-sage" : "text-white hover:text-brand-sage"
                                }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute left-0 bottom-0 w-full h-0.75 rounded-full transition-transform duration-300 origin-left ${
                                        isActive(link.path) ? "bg-brand-sage scale-x-100" : "bg-brand-sage scale-x-0 group-hover:scale-x-100"
                                    }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    {/* Mobilos menü gomb */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Menü megnyitása"
                    >
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobilos lenyíló menü */}
            <div
                className={`md:hidden bg-brand-darkblue shadow-inner overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-64 border-b border-white/10" : "max-h-0"
                }`}
            >
                <nav className="flex flex-col gap-2 px-6 py-4">
                    {[
                        { name: "Kezdőlap", path: "/" },
                        { name: "Szolgáltatások", path: "/szolgaltatasok" },
                        { name: "Elérhetőség", path: "/elerhetoseg" },
                    ].map((link) => (
                        <Link
                            key={link.path}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-bold py-2 border-b border-white/10 last:border-0 ${
                                isActive(link.path) ? "text-brand-sage" : "text-white hover:text-brand-sage"
                            }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}