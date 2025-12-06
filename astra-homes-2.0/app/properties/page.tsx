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
            <div className="section text-center py-20">
                <p className="text-lg text-gray-500">Loading properties...</p>
            </div>
        );
    }

    return (
        <div className="section">
            {/* ---------- Hero ---------- */}
            <section className="text-center mb-16">
                <h1 className="text-5xl font-heading mb-4 text-gold">
                    Properties for Sale
                </h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Discover premium residential and commercial properties built with
                    Astra Homes’ commitment to quality and design excellence.
                </p>
            </section>

            {/* ---------- Filter Buttons ---------- */}
            <div className="flex justify-center gap-4 mb-10 flex-wrap">
                {['All', 'Ready to Move', 'Under Construction'].map((type) => (
                    <button
                        key={type}
                        onClick={() => setFilter(type)}
                        className={`px-5 py-2 rounded-md border font-semibold transition-all ${filter === type
                                ? 'bg-gold text-white'
                                : 'border-gold text-gold hover:bg-gold hover:text-white'
                            }`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* ---------- Properties Grid ---------- */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((prop) => (
                    <div
                        key={prop._id}
                        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                    >
                        {prop.image && (
                            <img
                                src={urlFor(prop.image).width(600).height(400).url()}
                                alt={prop.title}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                            />
                        )}
                        <div className="p-5 text-center">
                            <h3 className="font-heading text-lg text-gold mb-2">
                                {prop.title}
                            </h3>
                            <p className="text-sm text-gray-700">{prop.location}</p>
                            <p className="text-sm text-gray-600">{prop.status}</p>
                            <p className="text-base font-semibold mt-2">{prop.price}</p>
                            <Link
                                href={`/properties/${prop.slug?.current || ''}`}
                                className="btn-gold inline-block mt-4"
                            >
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
