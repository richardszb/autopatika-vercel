import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";

export const metadata: Metadata = {
    title: "Autópatika Zalaegerszeg",
    description: "Gumiszerelés, futóműállítás és autószerviz Zalaegerszegen.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="hu">
        <body className="antialiased bg-brand-lightgray flex flex-col min-h-screen">
        <Navbar />

        {}
        <main className="grow">
            {children}
        </main>

        <Footer /> {}
        </body>
        </html>
    );
}