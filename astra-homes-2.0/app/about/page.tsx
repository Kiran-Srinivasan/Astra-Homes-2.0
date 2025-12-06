import React from 'react';

export const metadata = {
    title: 'About Astra Homes',
    description:
        'Learn about Astra Homes – a leading design and construction company committed to quality, innovation, and trust.',
};

export default function AboutPage() {
    return (
        <div className="section">
            {/* ---------- Hero Section ---------- */}
            <section className="text-center mb-16">
                <h1 className="text-5xl font-heading mb-4 text-gold">About Astra Homes</h1>
                <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                    Astra Homes is a leading interior design and construction firm that transforms visions into reality.
                    With a commitment to innovation, craftsmanship, and customer satisfaction, we create spaces that
                    inspire and endure.
                </p>
            </section>

            {/* ---------- Who We Are ---------- */}
            <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
                <div>
                    <img
                        src="/images/about1.jpg"
                        alt="Our Team"
                        className="w-full h-80 object-cover rounded-xl shadow-md"
                    />
                </div>
                <div>
                    <h2 className="text-3xl font-heading text-gold mb-4">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Established by passionate designers and builders, Astra Homes blends creativity with technical
                        excellence. We specialize in interior design, architecture, and turnkey construction solutions for
                        residential, commercial, and retail projects.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        Our philosophy is simple: deliver high-quality work, on time, with integrity. Every project we
                        undertake reflects our core values of trust, transparency, and timeless design.
                    </p>
                </div>
            </section>

            {/* ---------- Our Mission & Vision ---------- */}
            <section className="grid md:grid-cols-2 gap-10 mb-20">
                <div className="card">
                    <h3 className="text-2xl font-heading text-gold mb-2">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To design and build exceptional spaces that enhance the quality of living, combining functionality,
                        sustainability, and aesthetic excellence.
                    </p>
                </div>
                <div className="card">
                    <h3 className="text-2xl font-heading text-gold mb-2">Our Vision</h3>
                    <p className="text-gray-700 leading-relaxed">
                        To become the most trusted brand in design and construction — known for creativity, innovation, and
                        a client-first approach across India and beyond.
                    </p>
                </div>
            </section>

            {/* ---------- Why Choose Us ---------- */}
            <section>
                <h2 className="text-3xl font-heading text-center mb-10 text-gold">Why Choose Astra Homes?</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        {
                            title: 'Experienced Team',
                            desc: 'Our skilled designers, architects, and engineers bring decades of combined experience to every project.',
                        },
                        {
                            title: 'Turnkey Solutions',
                            desc: 'From concept to completion, we manage every stage seamlessly, ensuring peace of mind for our clients.',
                        },
                        {
                            title: 'Quality Assurance',
                            desc: 'We maintain rigorous quality standards, using only the best materials and finishes.',
                        },
                        {
                            title: 'Timely Delivery',
                            desc: 'Our structured workflow and experienced site management ensure on-time completion every time.',
                        },
                        {
                            title: 'Client-Centric Approach',
                            desc: 'Every design is tailored to meet client preferences, budgets, and lifestyle needs.',
                        },
                        {
                            title: 'Sustainable Practices',
                            desc: 'We integrate eco-friendly materials and processes that respect the environment.',
                        },
                    ].map((item, i) => (
                        <div key={i} className="card text-center">
                            <h4 className="text-xl font-heading text-gold mb-2">{item.title}</h4>
                            <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="text-center mt-20">
                <a href="/contact" className="btn-gold inline-block">
                    Get in Touch with Our Team
                </a>
            </section>
        </div>
    );
}
