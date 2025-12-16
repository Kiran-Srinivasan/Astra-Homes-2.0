'use client';

import React, { useState } from 'react';
import { client } from '@/lib/sanity';
import { contactPageQuery } from '@/lib/sanityQueries';

export default function ContactPage() {
    const [data, setData] = useState<any>(null);
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    React.useEffect(() => {
        const fetchContent = async () => {
            const result = await client.fetch(contactPageQuery);
            setData(result);
        };
        fetchContent();
    }, []);

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div className="bg-beige min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-6xl">
                {/* ---------- Hero ---------- */}
                <section className="text-center mb-12 md:mb-16">
                    <h1 className="text-4xl md:text-5xl font-heading text-gold mb-6">
                        {data?.heroTitle || 'Contact Us'}
                    </h1>
                    <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed text-base md:text-lg">
                        {data?.heroSubtitle ||
                            'Have a project in mind? We’d love to hear from you.'}
                    </p>
                </section>

                {/* ---------- Contact Form + Info ---------- */}
                <section className="grid md:grid-cols-2 gap-10 md:gap-16">
                    {/* Left: Form */}
                    <div className="bg-white p-6 md:p-10 rounded-sm shadow-sm">
                        <h2 className="text-2xl font-heading text-charcoal mb-6">Get in Touch</h2>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 bg-gray-50 rounded-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 bg-gray-50 rounded-sm px-4 py-3 focus:outline-none focus:border-gold transition-colors"
                            />

                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-200 bg-gray-50 rounded-sm px-4 py-3 resize-none focus:outline-none focus:border-gold transition-colors"
                            />

                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="btn-gold w-full disabled:opacity-70 disabled:cursor-not-allowed py-3 font-semibold tracking-wider"
                            >
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 font-semibold text-center mt-2 text-sm">
                                    ✅ Thank you! Your message has been received.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-500 font-semibold text-center mt-2 text-sm">
                                    ❌ Something went wrong. Please try again.
                                </p>
                            )}
                        </form>
                    </div>

                    {/* Right: Info */}
                    <div className="space-y-8 md:pt-10">
                        <div>
                            <h2 className="text-2xl font-heading text-charcoal mb-4">Our Office</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Visit us to discuss your dream project over a cup of coffee.
                            </p>
                        </div>

                        <div className="space-y-4 text-gray-700">
                            <div className="flex items-start gap-3">
                                <span className="text-gold text-xl">📍</span>
                                <div>
                                    <strong className="block text-charcoal mb-1">Address</strong>
                                    <p className="text-sm">{data?.address || "123 Astra Lane, Design District, NY"}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold text-xl">📞</span>
                                <div>
                                    <strong className="block text-charcoal mb-1">Phone</strong>
                                    <p className="text-sm">{data?.phone || "+1 (555) 123-4567"}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="text-gold text-xl">✉️</span>
                                <div>
                                    <strong className="block text-charcoal mb-1">Email</strong>
                                    <p className="text-sm">{data?.email || "hello@astrahomes.com"}</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div
                            className="w-full h-64 rounded-sm overflow-hidden shadow-sm border border-gray-200 mt-6"
                            dangerouslySetInnerHTML={{ __html: data?.mapEmbed || '<iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>' }}
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}
