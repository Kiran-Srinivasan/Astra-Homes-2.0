import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';

// Revalidate every 60 seconds
export const revalidate = 60;

export default async function PropertyDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;

    // Fetch property data
    const query = `*[_type == "property" && slug.current == $slug][0]{
        title, location, price, status, description, image
    }`;
    const property = await client.fetch(query, { slug });

    if (!property) {
        return (
            <div className="bg-beige min-h-screen pt-32 text-center px-4">
                <h2 className="text-3xl font-heading text-charcoal mb-6">Property Not Found</h2>
                <Link href="/properties" className="btn-gold inline-block">
                    Back to Properties
                </Link>
            </div>
        );
    }

    return (
        <div className="bg-beige min-h-screen pt-32 pb-20 px-4">
            <div className="container mx-auto max-w-4xl">
                {/* ---------- Header ---------- */}
                <div className="text-center mb-10">
                    <div className="inline-block bg-gold/10 text-gold px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                        {property.status}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-heading text-charcoal mb-4">{property.title}</h1>
                    <div className="flex items-center justify-center gap-2 text-gray-500 uppercase tracking-widest text-sm">
                        <span>📍 {property.location}</span>
                    </div>
                </div>

                {/* ---------- Main Image ---------- */}
                <div className="rounded-sm overflow-hidden shadow-xl mb-12">
                    {property.image ? (
                        <img
                            src={urlFor(property.image).url()}
                            alt={property.title}
                            className="w-full h-[400px] md:h-[600px] object-cover"
                        />
                    ) : (
                        <div className="w-full h-[400px] bg-gray-200 flex items-center justify-center text-gray-400">No Image Available</div>
                    )}
                </div>

                {/* ---------- Details Grid ---------- */}
                <div className="grid md:grid-cols-3 gap-8 mb-12 border-b border-gray-200 pb-12">
                    <div className="text-center md:text-left">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Price</span>
                        <span className="text-2xl font-bold text-gold">{property.price}</span>
                    </div>
                    <div className="text-center md:text-left">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Location</span>
                        <span className="text-xl text-charcoal">{property.location}</span>
                    </div>
                    <div className="text-center md:text-left">
                        <span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Status</span>
                        <span className="text-xl text-charcoal">{property.status}</span>
                    </div>
                </div>

                {/* ---------- Description ---------- */}
                <div className="prose prose-lg max-w-none text-gray-600 mb-16 leading-relaxed">
                    <p>{property.description}</p>
                </div>

                {/* ---------- CTA ---------- */}
                <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm text-center border-t-4 border-gold">
                    <h3 className="text-2xl font-heading text-charcoal mb-4">Interested in this Property?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">
                        Contact us today to schedule a viewing or get more details about pricing and availability.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="btn-gold px-8 py-3">
                            Enquire Now
                        </Link>
                        <Link href="/properties" className="px-8 py-3 border border-gray-300 hover:border-gold hover:text-gold transition-colors text-gray-600 rounded-sm font-semibold uppercase tracking-wider text-sm flex items-center justify-center">
                            Back to All Properties
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
