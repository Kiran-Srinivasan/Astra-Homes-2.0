import Link from 'next/link';

export default function PropertyDetailPage({ params }: { params: { slug: string } }) {
    const { slug } = params;
    // Mock property data (you’ll replace with backend or CMS later)
    const properties = [
        {
            slug: 'luxury-villa-sarjapur',
            title: 'Luxury Villa – Sarjapur',
            location: 'Bangalore',
            price: '₹3.2 Cr',
            status: 'Ready to Move',
            type: 'Villa',
            description:
                'This elegant 4BHK villa combines contemporary design with premium amenities, landscaped gardens, and a private pool. Situated in Sarjapur with easy access to IT hubs.',
            images: ['/images/property1.jpg', '/images/property1b.jpg', '/images/property1c.jpg'],
        },
        {
            slug: 'premium-apartments-whitefield',
            title: 'Premium Apartments – Whitefield',
            location: 'Bangalore',
            price: '₹1.1 Cr onwards',
            status: 'Under Construction',
            type: 'Apartment',
            description:
                'High-rise apartments with modern amenities, gym, clubhouse, and 24x7 security. Designed for comfort and convenience in the heart of Whitefield.',
            images: ['/images/property2.jpg', '/images/property2b.jpg', '/images/property2c.jpg'],
        },
        {
            slug: 'beach-view-residences-ecr-chennai',
            title: 'Beach View Residences – ECR Chennai',
            location: 'Chennai',
            price: '₹2.8 Cr',
            status: 'Ready to Move',
            type: 'Villa',
            description:
                'Exclusive beachfront villas offering sea views, open terraces, and smart home features. Perfect for luxury coastal living.',
            images: ['/images/property3.jpg', '/images/property3b.jpg', '/images/property3c.jpg'],
        },
    ];

    const property = properties.find((p) => p.slug === slug);

    if (!property) {
        return (
            <div className="section text-center">
                <h2 className="text-3xl font-heading text-gold mb-6">Property Not Found</h2>
                <Link href="/properties" className="btn-gold inline-block">
                    Back to Properties
                </Link>
            </div>
        );
    }

    return (
        <div className="section">
            {/* ---------- Header ---------- */}
            <h1 className="text-5xl font-heading text-gold mb-6 text-center">{property.title}</h1>
            <p className="text-center text-gray-600 mb-10">
                {property.location} • {property.type} • {property.status}
            </p>

            {/* ---------- Gallery ---------- */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                {property.images.map((img, i) => (
                    <div key={i} className="overflow-hidden rounded-lg shadow-md">
                        <img
                            src={img}
                            alt={`${property.title} image ${i + 1}`}
                            className="w-full h-64 object-cover hover:scale-105 transition-transform"
                        />
                    </div>
                ))}
            </div>

            {/* ---------- Details ---------- */}
            <div className="max-w-3xl mx-auto text-center mb-16">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">{property.description}</p>
                <p className="text-xl font-bold text-gold">Price: {property.price}</p>
            </div>

            {/* ---------- CTA ---------- */}
            <div className="text-center">
                <a href="/contact" className="btn-gold inline-block">
                    Enquire Now
                </a>
            </div>

            <div className="text-center mt-8">
                <Link href="/properties" className="text-gold hover:underline">
                    ← Back to Properties
                </Link>
            </div>
        </div>
    );
}
