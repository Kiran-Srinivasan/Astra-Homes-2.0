import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full">
            {/* 1. Top Section: Big Call to Action - Highlighted Background */}
            <div className="bg-neutral-950 py-20 border-t border-white/5">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end">
                        <img
                            src="/logo-vertical.png"
                            alt="Astra Homes"
                            className="h-28 w-auto object-contain block opacity-90 mb-8 md:mb-0"
                        />
                        <div className="flex flex-col items-start md:items-end">
                            <h2 className="text-4xl md:text-5xl font-heading font-light leading-tight text-right mb-6 text-white">
                                Crafting spaces that <br /><span className="text-gold italic">inspire living.</span>
                            </h2>
                            <Link href="/contact" className="group flex items-center gap-4 text-lg font-light tracking-wide text-white hover:text-gold transition-colors duration-500">
                                Start Your Project
                                <span className="w-16 h-[1px] bg-white group-hover:bg-gold transition-colors duration-500"></span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Main Footer Links - Dark Background */}
            <div className="bg-neutral-950 text-white pt-20 pb-12">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                        {/* Brand Column (Span 4) */}
                        <div className="md:col-span-5 space-y-8">
                            <h4 className="text-xs font-bold text-gold uppercase tracking-[0.25em]">Who We Are</h4>
                            <p className="text-gray-400 font-light text-sm leading-8 max-w-sm tracking-wide">
                                Astra Homes defines the intersection of luxury construction and bespoke interior design. We build more than structures; we build legacies.
                            </p>
                            <div className="flex gap-6 pt-4">
                                <a href="https://www.instagram.com/astra.homes/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors duration-300">
                                    <Instagram size={20} strokeWidth={1.5} />
                                </a>
                                <a href="https://www.facebook.com/Astrahomesblr/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors duration-300">
                                    <Facebook size={20} strokeWidth={1.5} />
                                </a>
                                <a href="https://x.com/astrahomes" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gold transition-colors duration-300">
                                    <Twitter size={20} strokeWidth={1.5} />
                                </a>
                                <a href="#" className="text-gray-500 hover:text-gold transition-colors duration-300">
                                    <Linkedin size={20} strokeWidth={1.5} />
                                </a>
                            </div>
                        </div>

                        {/* Spacer (Span 1) */}
                        <div className="hidden md:block md:col-span-1"></div>

                        {/* Navigation Columns (Span 6) */}
                        <div className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {/* Explore */}
                            <div>
                                <h4 className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-8">Explore</h4>
                                <ul className="space-y-4">
                                    {['Home', 'About', 'Properties', 'Contact'].map((item) => (
                                        <li key={item}>
                                            <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                                                {item}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Services */}
                            <div>
                                <h4 className="text-xs font-bold text-gold uppercase tracking-[0.25em] mb-8">Expertise</h4>
                                <ul className="space-y-4">
                                    {[
                                        { name: 'Interior Design', href: '/interior-design' },
                                        { name: 'Civil Construction', href: '/construction' },
                                        { name: 'Turnkey Projects', href: '/properties' }
                                    ].map((item) => (
                                        <li key={item.name}>
                                            <Link href={item.href} className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-300 block py-1">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex flex-col md:flex-row gap-8 items-center text-xs text-gray-600 uppercase tracking-widest font-medium">
                            <p>© {new Date().getFullYear()} Astra Homes.</p>
                            <div className="flex gap-6">
                                <a href="#" className="hover:text-gold transition-colors">Privacy</a>
                                <a href="#" className="hover:text-gold transition-colors">Terms</a>
                            </div>
                        </div>
                        <div className="text-xs text-gray-700 font-light tracking-widest">
                            Designed for <span className="text-gold/60">Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
