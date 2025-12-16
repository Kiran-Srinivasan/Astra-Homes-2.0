import { client, urlFor } from '@/lib/sanity';
import React from 'react';
import Link from 'next/link';
import { interiorPageQuery } from '@/lib/sanityQueries';

const query = interiorPageQuery;

export default async function InteriorDesignPage() {
    const data = await client.fetch(query);

    return (
        <div className="bg-beige min-h-screen">

            {/* HERO */}
            <section className="pt-32 pb-16 md:py-32 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gold">
                    Interior Design
                </h1>
                <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    We create bespoke interiors that reflect your style and personality, combining aesthetics with functionality.
                </p>
            </section>

            {/* SERVICES */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-heading text-gold mb-3">Residential Design</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Curating comfortable and stylish living spaces for homes, apartments, and villas.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-heading text-gold mb-3">Commercial Design</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Designing productive and inspiring workspaces, retail stores, and offices.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-heading text-gold mb-3">Space Planning</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Optimizing layouts to maximize space efficiency and flow.
                        </p>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="px-4 pb-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-10 text-charcoal">
                        Our Work
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.gallery?.map((proj: any, i: number) => {
                            // Fallback: use first image of project as thumbnail
                            const thumb = proj.images?.[0];
                            if (!thumb) return null;

                            return (
                                <div key={i} className="rounded-sm overflow-hidden shadow-md group">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={urlFor(thumb).width(800).url()}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                            alt={proj.title || "Interior Project"}
                                        />
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                    </div>
                                    {proj.title && (
                                        <div className="p-4 bg-white text-center">
                                            <h4 className="font-heading text-charcoal">{proj.title}</h4>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="text-center px-4 pb-20">
                <Link href="/contact" className="btn-gold px-8 py-3 w-full md:w-auto inline-block">
                    Book a Design Consultation
                </Link>
            </section>

        </div>
    );
}
