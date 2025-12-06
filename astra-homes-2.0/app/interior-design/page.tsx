'use client';
import React from 'react';


export default function InteriorDesignPage() {
    const services = [
        { title: 'Residential Interiors', desc: 'Transform your home with elegant, functional spaces tailored to your lifestyle.' },
        { title: 'Commercial Interiors', desc: 'Modern, efficient, and aesthetic workspaces that inspire productivity.' },
        { title: 'Modular Kitchens', desc: 'Premium modular designs with world-class fittings and smart storage solutions.' },
        { title: 'Renovations', desc: 'Revamp outdated interiors into fresh, contemporary environments.' },
        { title: '3D Visualisation', desc: 'Experience your dream space before construction begins through realistic 3D renders.' },
    ];

    const gallery = [
        '/images/interior1.jpg',
        '/images/interior2.jpg',
        '/images/interior3.jpg',
        '/images/interior4.jpg',
        '/images/interior5.jpg',
        '/images/interior6.jpg',
    ];

    return (
        <div className="section">
            {/* ---------- Hero ---------- */}
            <section className="text-center mb-16">
                <h1 className="text-5xl font-heading mb-4 text-gold">Interior Design</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Where creativity meets craftsmanship — Astra Homes brings your dream interiors to life with timeless design,
                    premium materials, and meticulous execution.
                </p>
            </section>

            {/* ---------- Services Grid ---------- */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {services.map((s, i) => (
                    <div key={i} className="card hover:scale-[1.02] transition-transform">
                        <h3 className="text-xl font-heading text-gold mb-2">{s.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </section>

            {/* ---------- Gallery ---------- */}
            <section>
                <h2 className="text-3xl font-heading text-center mb-8 text-gold">Our Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {gallery.map((src, i) => (
                        <div key={i} className="overflow-hidden rounded-lg shadow-md">
                            {/* Replace with next/image later */}
                            <img
                                src={src}
                                alt={`Interior ${i + 1}`}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                            />
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="text-center mt-20">
                <a href="/contact" className="btn-gold inline-block">
                    Book a Design Consultation
                </a>
            </section>
        </div>
    );
}
