'use client';
import React, { useState } from 'react';


export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, simulate submission
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <div className="section">
            {/* ---------- Hero ---------- */}
            <section className="text-center mb-12">
                <h1 className="text-5xl font-heading text-gold mb-4">Contact Us</h1>
                <p className="text-gray-700 max-w-2xl mx-auto">
                    Have a project in mind? We’d love to hear from you. Reach out to Astra Homes for interior design,
                    construction, or property inquiries.
                </p>
            </section>

            {/* ---------- Contact Form ---------- */}
            <section className="grid md:grid-cols-2 gap-10">
                <div>
                    <h2 className="text-2xl font-heading text-gold mb-4">Get in Touch</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                        <textarea
                            name="message"
                            rows={5}
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
                        ></textarea>
                        <button type="submit" className="btn-gold w-full">
                            Send Message
                        </button>

                        {submitted && (
                            <p className="text-green-600 font-semibold text-center mt-2">
                                ✅ Thank you! Your message has been received.
                            </p>
                        )}
                    </form>
                </div>

                {/* ---------- Contact Info ---------- */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-heading text-gold mb-2">Our Office</h2>
                    <p className="text-gray-700">
                        <strong>Address:</strong>
                        123 Astra Homes Lane, Whitefield, Bangalore – 560066
                    </p>
                    <p className="text-gray-700">
                        <strong>Phone:</strong> +91 98765 43210
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong> info@astrahomes.in
                    </p>

                    {/* Map placeholder */}
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                        Google Map Embed Here
                    </div>
                </div>
            </section>
        </div>
    );
}
