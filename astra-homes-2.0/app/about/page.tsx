import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="bg-beige min-h-screen">
            {/* ---------- Hero Section ---------- */}
            <section className="pt-32 pb-16 md:py-32 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-heading mb-6 text-gold">About Astra Homes</h1>
                <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Astra Homes is a leading interior design and construction firm that transforms visions into reality.
                    With a commitment to innovation, craftsmanship, and customer satisfaction, we create spaces that
                    inspire and endure.
                </p>
            </section>

            {/* ---------- Who We Are ---------- */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <img
                            src="/images/home-hero.jpg"
                            alt="Who We Are"
                            className="w-full h-[300px] md:h-[400px] object-cover rounded-sm shadow-xl"
                        />
                    </div>
                    <div className="order-1 md:order-2">
                        <h2 className="text-3xl font-heading text-gold mb-4">Who We Are</h2>
                        <p className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
                            We are a team of passionate architects, designers, and engineers dedicated to delivering excellence in every project.
                            From bespoke interior designs to robust construction projects, we handle everything with precision and care.
                        </p>
                        <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                            Our journey began with a simple mission: to build homes that tell a story. Today, we are proud to be one of the
                            most trusted names in the industry, known for our integrity, quality, and personalized approach.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Our Mission & Vision ---------- */}
            <section className="px-4 pb-16 md:pb-24">
                <div className="container mx-auto grid md:grid-cols-2 gap-6 md:gap-10">
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border-t-4 border-gold">
                        <h3 className="text-2xl font-heading text-charcoal mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            To provide top-tier design and construction services that exceed client expectations through innovation,
                            transparency, and sustainable practices.
                        </p>
                    </div>
                    <div className="bg-white p-8 md:p-10 rounded-sm shadow-sm border-t-4 border-gold">
                        <h3 className="text-2xl font-heading text-charcoal mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                            To be the premier choice for luxury living and commercial spaces, setting new benchmarks in quality and design.
                        </p>
                    </div>
                </div>
            </section>

            {/* ---------- Why Choose Us ---------- */}
            <section className="px-4 pb-20">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-heading text-center mb-10 text-charcoal">Why Choose Astra Homes?</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center">
                            <h4 className="text-xl font-heading text-gold mb-3">Expert Team</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A multidisciplinary team of experienced professionals.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center">
                            <h4 className="text-xl font-heading text-gold mb-3">Quality Assurance</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We use only the finest materials and adhere to strict quality standards.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-sm shadow-sm text-center">
                            <h4 className="text-xl font-heading text-gold mb-3">On-Time Delivery</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We value your time and ensure projects are completed as scheduled.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="text-center px-4 pb-20">
                <Link href="/contact" className="btn-gold px-8 py-3 w-full md:w-auto inline-block">
                    Get in Touch with Our Team
                </Link>
            </section>
        </div>
    );
}
