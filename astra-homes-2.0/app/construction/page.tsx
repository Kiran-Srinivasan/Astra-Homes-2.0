import React from "react";
import { client, urlFor } from "@/lib/sanity";
import { constructionPageQuery } from "@/lib/sanityQueries";
import Link from "next/link";

export const metadata = {
    title: "Construction Services | Astra Homes",
    description:
        "End-to-end construction services combining engineering precision and modern architecture.",
};

export default async function ConstructionPage() {
    const data = await client.fetch(constructionPageQuery);

    if (!data) return <div className="p-10 text-center">Loading...</div>;

    return (
        <div className="bg-beige min-h-screen">
            {/* ---------- Hero ---------- */}
            <section className="pt-32 pb-16 md:py-32 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gold">
                    Construction
                </h1>
                <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                    Astra Homes combines engineering precision with modern architecture to construct residential, commercial, and turnkey projects that stand the test of time.
                </p>
            </section>

            {/* ---------- Process Steps ---------- */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center relative border-t-4 border-gold">
                            <span className="absolute top-4 left-4 text-gold/20 font-bold text-4xl">01</span>
                            <h3 className="text-xl font-heading text-charcoal mb-3 relative z-10 pt-4">Planning & Design</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                We collaborate with architects and clients to create efficient layouts, budgets, and timelines that bring vision to reality.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center relative border-t-4 border-gold">
                            <span className="absolute top-4 left-4 text-gold/20 font-bold text-4xl">02</span>
                            <h3 className="text-xl font-heading text-charcoal mb-3 relative z-10 pt-4">Material Selection</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                Only premium-grade materials are used—ensuring structural strength, durability, and aesthetics.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center relative border-t-4 border-gold">
                            <span className="absolute top-4 left-4 text-gold/20 font-bold text-4xl">03</span>
                            <h3 className="text-xl font-heading text-charcoal mb-3 relative z-10 pt-4">Execution</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                Our on-site team monitors every phase to guarantee quality workmanship, safety, and timely completion.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center relative border-t-4 border-gold">
                            <span className="absolute top-4 left-4 text-gold/20 font-bold text-4xl">04</span>
                            <h3 className="text-xl font-heading text-charcoal mb-3 relative z-10 pt-4">Handover</h3>
                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">
                                We deliver projects ready for occupancy and continue to provide post-handover assistance.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- Featured Projects ---------- */}
            <section className="px-4 pb-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-10 text-charcoal">
                        Featured Projects
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.projects?.map((proj: any, i: number) => (
                            <div key={i} className="group overflow-hidden rounded-sm shadow-lg bg-white">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={urlFor(proj.image).url()}
                                        alt={proj.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6 text-center">
                                    <h4 className="font-heading text-charcoal text-xl mb-1">{proj.title}</h4>
                                    <p className="text-xs uppercase tracking-widest text-gold font-bold">Construction</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="text-center px-4 pb-20">
                <Link href="/contact" className="btn-gold px-8 py-3 w-full md:w-auto inline-block">
                    {data.page?.ctaText || "Start Your Project"}
                </Link>
            </section>
        </div>
    );
}
