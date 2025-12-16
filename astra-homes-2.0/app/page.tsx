import React from "react";
import Link from "next/link";
import { client, urlFor } from "@/lib/sanity";
import { homePageQuery, featuredPropertiesQuery } from "@/lib/sanityQueries";
import HeroCarousel from "./component/HeroCarousel";

export default async function HomePage() {
  const [homeData, featuredProperties] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(featuredPropertiesQuery)
  ]);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic Background Media */}
        <HeroCarousel
          slides={[
            // 1. Sanity Video (if available)
            ...(homeData?.heroMediaType === 'video' && homeData?.heroVideo ? [{ type: 'video' as const, src: homeData.heroVideo }] : []),

            // 2. High-End Stock Video (Luxury Home)
            { type: 'video', src: 'https://videos.pexels.com/video-files/3770033/3770033-hd_1920_1080_25fps.mp4' },
            // 3. Second Feature Video (Modern Exterior/Lifestyle)
            { type: 'video', src: 'https://videos.pexels.com/video-files/3770033/3770033-hd_1920_1080_25fps.mp4' },

            // 3. Extra Luxury Stock Images
            { type: 'image', src: 'https://images.unsplash.com/photo-1600596542815-e328701102b9?q=80&w=2669&auto=format&fit=crop' }, // Modern Villa
            { type: 'image', src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop' }, // Luxury Living Room
            { type: 'image', src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2669&auto=format&fit=crop' }, // Elegant Interior

            // 4. Sanity Hero Image (or default)
            { type: 'image', src: homeData?.heroImage ? urlFor(homeData.heroImage).url() : "/images/home-hero.jpg" },

            // 5. Featured Project Images
            ...(featuredProperties?.map((p: any) => ({
              type: 'image' as const,
              src: p.image ? urlFor(p.image).url() : ''
            })).filter((s: any) => s.src) || [])
          ]}
        />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-24 md:mt-16">
          <h1 className="text-4xl md:text-7xl font-heading font-medium tracking-tight mb-6 leading-tight text-beige">
            Where Vision Meets <br />
            <span className="text-gold italic">Exquisite Reality.</span>
          </h1>

          <p className="text-base md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            From bespoke interior design to turnkey construction, Astra Homes delivers
            unmatched quality and elegance. We build not just structures, but the backdrops of your life's best moments.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <Link href="/interior-design" className="px-8 py-4 bg-gold text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-gold transition-all duration-300 w-full sm:w-auto shadow-lg hover:shadow-xl">
              Explore Interiors
            </Link>
            <Link href="/construction" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 w-full sm:w-auto hover:border-white">
              View Construction
            </Link>
            <Link href="/properties" className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-charcoal transition-all duration-300 w-full sm:w-auto hover:border-white">
              Browse Properties
            </Link>
          </div>
        </div>
      </section>

      {/* STATS / CREDIBILITY BAR */}
      <div className="bg-charcoal text-white py-12 border-b border-white/10">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 text-center md:divide-x divide-white/10">
          <div className="border-r border-white/10 md:border-none">
            <span className="block text-3xl md:text-4xl font-heading text-gold mb-1">10+</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Years Experience</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-heading text-gold mb-1">50+</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Projects Completed</span>
          </div>
          <div className="border-r border-white/10 md:border-none">
            <span className="block text-3xl md:text-4xl font-heading text-gold mb-1">100%</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Client Satisfaction</span>
          </div>
          <div>
            <span className="block text-3xl md:text-4xl font-heading text-gold mb-1">2</span>
            <span className="text-xs uppercase tracking-widest text-gray-400">Major Cities</span>
          </div>
        </div>
      </div>

      {/* SERVICES OVERVIEW (REVAMPED) */}
      <section className="py-16 md:py-24 lg:py-32 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-4">Our Expertise</h2>
            <p className="text-charcoal/70 max-w-2xl mx-auto text-lg">We offer a seamless blend of design aesthetics and construction engineering.</p>
          </div>

          <div className="flex flex-col gap-16 md:gap-24">
            {/* 1. Interior Design (Image Left / Text Right) */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="relative group overflow-hidden rounded-sm shadow-xl h-[300px] md:h-[500px]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop"
                  alt="Interior Design"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div>
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">Aesthetics</span>
                <h3 className="text-3xl md:text-4xl font-heading text-charcoal mb-4 md:mb-6">Interior Design</h3>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  We curate spaces that reflect your personality. From bespoke furnishings to intelligent lighting, every detail is meticulously planned to create an atmosphere of elegance and comfort.
                </p>
                <ul className="space-y-3 mb-8 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Spatial Planning & Layouts</li>
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Custom Furniture Design</li>
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Mood Lighting & Decor</li>
                </ul>
                <Link href="/interior-design" className="btn-gold px-8 py-3 w-full md:w-auto text-center inline-block">
                  Explore Interiors
                </Link>
              </div>
            </div>

            {/* 2. Construction (Text Left / Image Right) - Reversed on Desktop */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1">
                <span className="text-gold font-bold tracking-widest uppercase text-sm mb-2 block">Engineering</span>
                <h3 className="text-3xl md:text-4xl font-heading text-charcoal mb-4 md:mb-6">Civil Construction</h3>
                <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
                  Building your dream home requires a solid foundation. Our end-to-end construction services ensure structural integrity, premium material sourcing, and adherence to strict timelines.
                </p>
                <ul className="space-y-3 mb-8 text-gray-700 text-sm md:text-base">
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Turnkey Residential Projects</li>
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Structural Architecture</li>
                  <li className="flex items-center gap-3"><span className="text-gold">●</span> Quality Assurance & Safety</li>
                </ul>
                <Link href="/construction" className="btn-gold px-8 py-3 w-full md:w-auto text-center inline-block">
                  View Construction
                </Link>
              </div>
              <div className="relative group overflow-hidden rounded-sm shadow-xl h-[300px] md:h-[500px] order-1 md:order-2">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000&auto=format&fit=crop"
                  alt="Construction"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE LISTINGS (FEATURED PROPERTIES) */}
      {featuredProperties && featuredProperties.length > 0 && (
        <section className="py-24 bg-beige/30 border-b border-gray-100">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <div>
                <p className="text-gold uppercase tracking-widest text-sm font-bold mb-2">Real Estate</p>
                <h2 className="text-4xl font-heading text-charcoal">Exclusive Listings</h2>
              </div>
              <Link href="/properties" className="btn-gold px-6 py-3 text-sm">
                View All Properties
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 ">
              {featuredProperties.map((property: any) => (
                <Link href={`/properties/${property.slug.current}`} key={property._id || property.slug.current} className="group block bg-white rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500">
                  {/* Image Container */}
                  <div className="relative h-[350px] overflow-hidden">
                    {property.image ? (
                      <img
                        src={urlFor(property.image).url()}
                        alt={property.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">No Image</div>
                    )}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-charcoal px-4 py-2 text-xs font-bold uppercase tracking-widest shadow-sm">
                      {property.status}
                    </div>
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-8 relative">
                    <p className="text-gray-500 text-sm mb-3 uppercase tracking-wider flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gold inline-block"></span>
                      {property.location}
                    </p>
                    <h3 className="text-2xl font-heading text-charcoal mb-4 group-hover:text-gold transition-colors leading-tight">
                      {property.title}
                    </h3>
                    <div className="flex justify-between items-end border-t border-gray-100 pt-6 mt-4">
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Starting From</p>
                        <p className="text-xl font-bold text-charcoal">{property.price}</p>
                      </div>
                      <span className="text-gold text-sm font-bold uppercase tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                        View Details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* WHY US SECTION */}
      <section className="py-24 bg-beige/30">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gold uppercase tracking-widest text-sm font-bold mb-4">Why Astra Homes</p>
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal mb-6 leading-tight">
              Building Trust through <br /> <span className="text-gold italic">Transparency</span>.
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We believe the foundation of a great home is not just concrete, but the trust between the builder and the owner.
              We eliminate the chaos of construction with clear communication and ethical practices.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold text-xl shadow-sm">✓</div>
                <div>
                  <h4 className="font-heading text-lg font-bold">Transparent Pricing</h4>
                  <p className="text-gray-500 text-sm">No hidden costs. Detailed BOQs provided upfront.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold text-xl shadow-sm">✓</div>
                <div>
                  <h4 className="font-heading text-lg font-bold">On-Time Delivery</h4>
                  <p className="text-gray-500 text-sm">We stick to our schedules with rigorous project management.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gold text-xl shadow-sm">✓</div>
                <div>
                  <h4 className="font-heading text-lg font-bold">Premium Materials</h4>
                  <p className="text-gray-500 text-sm">Sourced only from certified top-tier brands.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Decorative Element */}
            <div className="absolute -top-10 -left-10 w-full h-full border-2 border-gold/30 z-0 hidden lg:block rounded-sm"></div>

            {/* Main Large Image */}
            <div className="relative z-10 w-full rounded-sm shadow-xl overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
                alt="Luxury Home Interior"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Secondary Offset Image */}
            <div className="absolute -bottom-12 -right-12 w-2/3 h-2/3 rounded-sm shadow-2xl overflow-hidden z-20 border-4 border-white hidden lg:block group">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                alt="Architectural Detail"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-beige/30 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-heading text-gold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-lg">
          Whether you have a plot ready for construction or an apartment waiting for interiors, we are here to help.
        </p>

        <Link href="/contact" className="btn-gold px-12 py-5 text-lg shadow-lg hover:shadow-gold/20">
          Book a Free Consultation
        </Link>
      </section>
    </>
  );
}
