import React from 'react';
export const metadata = {
    title: 'Construction Services | Astra Homes',
    description:
        'End-to-end construction services combining engineering precision and modern architecture.',
};


export default function ConstructionPage() {
    const process = [
        {
            step: '01',
            title: 'Planning & Design',
            desc: 'We collaborate with architects and clients to create efficient layouts, budgets, and timelines that bring vision to reality.',
        },
        {
            step: '02',
            title: 'Material Selection',
            desc: 'Only premium-grade materials are used—ensuring structural strength, durability, and aesthetics.',
        },
        {
            step: '03',
            title: 'Execution & Supervision',
            desc: 'Our on-site team monitors every phase to guarantee quality workmanship, safety, and timely completion.',
        },
        {
            step: '04',
            title: 'Handover & Support',
            desc: 'We deliver projects ready for occupancy and continue to provide post-handover assistance.',
        },
    ];

    const projects = [
        { title: 'Luxury Villa – Whitefield', img: '/images/construction1.jpg' },
        { title: 'Corporate Office – Indiranagar', img: '/images/construction2.jpg' },
        { title: 'Residential Complex – HSR Layout', img: '/images/construction3.jpg' },
    ];

    return (
        <div className="section">
            {/* ---------- Hero ---------- */}
            <section className="text-center mb-16">
                <h1 className="text-5xl font-heading mb-4 text-gold">Construction</h1>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                    Astra Homes combines engineering precision with modern architecture to construct
                    residential, commercial, and turnkey projects that stand the test of time.
                </p>
            </section>

            {/* ---------- Process Steps ---------- */}
            <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {process.map((p) => (
                    <div key={p.step} className="card text-center relative">
                        <span className="absolute top-3 left-4 text-gold font-bold text-xl opacity-30">
                            {p.step}
                        </span>
                        <h3 className="text-xl font-heading text-gold mb-3">{p.title}</h3>
                        <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                ))}
            </section>

            {/* ---------- Featured Projects ---------- */}
            <section>
                <h2 className="text-3xl font-heading text-center mb-8 text-gold">Featured Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {projects.map((proj, i) => (
                        <div key={i} className="overflow-hidden rounded-lg shadow-md">
                            <img
                                src={proj.img}
                                alt={proj.title}
                                className="w-full h-64 object-cover hover:scale-105 transition-transform"
                            />
                            <div className="p-4 text-center bg-white">
                                <h4 className="font-heading text-gold text-lg">{proj.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ---------- CTA ---------- */}
            <section className="text-center mt-20">
                <a href="/contact" className="btn-gold inline-block">
                    Request a Construction Quote
                </a>
            </section>
        </div>
    );
}
