'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/interior-design', label: 'Interiors' },
        { href: '/construction', label: 'Construction' },
        { href: '/properties', label: 'Properties' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 transition-all duration-300 border-b border-white/20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-20">
                    {/* ---------- Logo ---------- */}
                    <Link href="/" className="flex items-center relative z-50">
                        <img
                            src="/logo-horizontal.png"
                            alt="Astra Homes"
                            className="h-10 md:h-12 w-auto object-contain"
                        />
                    </Link>

                    {/* ---------- Desktop Links ---------- */}
                    <div className="hidden lg:flex items-center gap-8">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-charcoal uppercase tracking-widest text-xs font-bold hover:text-gold transition-colors relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* ---------- CTA Button ---------- */}
                    <div className="hidden lg:block">
                        <Link href="/contact" className="px-6 py-2.5 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-gold transition-colors duration-300">
                            Book Consultation
                        </Link>
                    </div>

                    {/* ---------- Mobile Hamburger ---------- */}
                    <button
                        className="lg:hidden p-2 text-charcoal relative z-50 hover:text-gold transition-colors"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
                    </button>
                </div>
            </nav>

            {/* ---------- Mobile Full Screen Menu ---------- */}
            <div className={`fixed inset-0 bg-beige z-40 flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="text-3xl md:text-5xl font-heading text-charcoal hover:text-gold transition-colors duration-300"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-8">
                        <Link
                            href="/contact"
                            onClick={() => setOpen(false)}
                            className="px-8 py-3 bg-gold text-white text-sm font-bold uppercase tracking-widest hover:bg-charcoal transition-colors duration-300"
                        >
                            Book Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
