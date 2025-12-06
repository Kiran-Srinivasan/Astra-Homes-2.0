import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      {/* ---------- Hero Section ---------- */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        <img
          src="/images/home-hero.jpg"
          alt="Modern luxury living room - Astra Homes design"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.65]"
        />
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-full text-white px-4">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6" style={{ color: 'wheat' }}>
            Design. Build. Live.
          </h1>
          <p className="max-w-2xl text-lg mb-10 text-gray-100">
            Astra Homes transforms ideas into extraordinary spaces —
            from interior design and construction to premium properties for sale.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/interior-design" className="btn-gold">
              Explore Interiors
            </Link>
            <Link href="/construction" className="btn-gold">
              View Construction
            </Link>
            <Link href="/properties" className="btn-gold">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Quick Overview ---------- */}
      <section className="section text-center">
        <h2 className="text-3xl font-heading text-gold mb-8">
          Creating Timeless Spaces with Purpose
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-12">
          With over a decade of expertise in interior design and construction, Astra Homes has
          delivered bespoke projects across India. We combine aesthetic innovation with functional
          excellence to build spaces that truly inspire.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Interior Design',
              desc: 'Modern, elegant, and personalized interiors for homes and offices.',
              link: '/interior-design',
            },
            {
              title: 'Construction',
              desc: 'End-to-end project execution — quality, precision, and reliability.',
              link: '/construction',
            },
            {
              title: 'Properties for Sale',
              desc: 'Premium villas and apartments developed by Astra Homes.',
              link: '/properties',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="card hover:scale-[1.02] transition-transform"
            >
              <h3 className="text-xl font-heading text-gold mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="text-center py-16 bg-charcoal text-beige">
        <h2 className="text-3xl font-heading mb-4">Let’s Build Something Beautiful</h2>
        <p className="mb-8 text-gray-300">
          From design concepts to construction handover — Astra Homes is your trusted partner.
        </p>
        <Link href="/contact" className="btn-gold">
          Get in Touch
        </Link>
      </section>
    </>
  );
}
