'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';

interface Property {
    _id: string;
    title: string;
    location: string;
    price: string;
    status: string;
    type?: string;
    slug?: { current: string };
    image?: any;
}

export default function PropertiesPage() {
    const [filter, setFilter] = useState('All');
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "property"] | order(_createdAt desc){
        _id, title, location, price, status, "type": status, slug, image
      }`;
            const result = await client.fetch(query);
            setProperties(result);
            setLoading(false);
        };
        fetchData();
    }, []);

    const filtered =
        filter === 'All' ? properties : properties.filter((p) => p.type === filter);

    if (loading) {
        return (
            <div className="bg-beige min-h-screen pt-32 text-center">
                <p className="text-lg text-gray-500">Loading properties...</p>
            </div>
        );
    }

    return (
        <div className="bg-beige min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto">
                {/* ---------- Hero ---------- */}
                <section className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gold">
                        Properties for Sale
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Discover premium residential and commercial properties built with
                        Astra Homes’ commitment to quality and design excellence.
                    </p>
                </section>

                {/* ---------- Filter Buttons ---------- */}
                <div className="flex justify-center gap-3 mb-12 flex-wrap">
                    {['All', 'Ready to Move', 'Under Construction'].map((type) => (
                        <button
                            key={type}
                            onClick={() => setFilter(type)}
                            className={`px-6 py-2 rounded-full border text-sm font-semibold transition-all ${filter === type
                                ? 'bg-gold text-white border-gold'
                                : 'border-gold text-gold hover:bg-gold hover:text-white'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {/* ---------- Properties Grid ---------- */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((prop) => (
                        <div
                            key={prop._id}
                            className="bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image Container */}
                            <div className="relative h-64 overflow-hidden">
                                {prop.image ? (
                                    <img
                                        src={urlFor(prop.image).width(600).height(400).url()}
                                        alt={prop.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                                )}
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-xs font-bold uppercase tracking-wider text-charcoal shadow-sm">
                                    {prop.status}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                                    <p className="text-xs uppercase tracking-widest text-gray-500">{prop.location}</p>
                                </div>
                                <h3 className="font-heading text-xl text-charcoal mb-4 group-hover:text-gold transition-colors">
                                    {prop.title}
                                </h3>
                                <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                                    <p className="text-lg font-bold text-charcoal">{prop.price}</p>
                                    <Link
                                        href={`/properties/${prop.slug?.current || ''}`}
                                        className="text-gold text-sm font-bold uppercase tracking-wider hover:underline"
                                    >
                                        View Details →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </div>
    );
}
