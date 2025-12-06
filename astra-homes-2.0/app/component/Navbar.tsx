'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const links = [
        { href: '/', label: 'Home' },
        { href: '/interior-design', label: 'Interior Design' },
        { href: '/construction', label: 'Construction' },
        { href: '/properties', label: 'Properties' },
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md border-b border-gold z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 flex justify-between items-center h-16">
                {/* ---------- Logo ---------- */}
                <Link
                    href="/"
                    className="text-xl font-heading font-semibold text-gold tracking-wide"
                >
                    Astra Homes
                </Link>

                {/* ---------- Desktop Links ---------- */}
                <div className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-charcoal hover:text-gold font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* ---------- Mobile Hamburger ---------- */}
                <button
                    className="md:hidden p-2 text-charcoal"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* ---------- Mobile Menu ---------- */}
            {open && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-lg border-t border-gold animate-slideDown">
                    <div className="flex flex-col divide-y divide-gold/30">
                        {links.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-center py-4 text-charcoal font-medium tracking-wide hover:bg-gold hover:text-white transition-all duration-300"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Optional subtle footer inside mobile menu */}
                    <div className="text-center py-3 text-sm text-gray-500 border-t border-gold/20">
                        © {new Date().getFullYear()} Astra Homes
                    </div>
                </div>
            )}
        </nav>
    );
}
