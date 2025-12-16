import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@sanity/client';

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: false, // We want fresh data for writes
    token: process.env.SANITY_API_TOKEN, // Requires a token with write permissions
    apiVersion: '2023-05-03',
});

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { message: 'Name, email, and message are required' },
                { status: 400 }
            );
        }

        const doc = {
            _type: 'contactForm',
            name,
            email,
            message,
            submittedAt: new Date().toISOString(),
        };

        await client.create(doc);

        return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Sanity submission error:', error);
        return NextResponse.json(
            { message: 'Failed to submit message', error },
            { status: 500 }
        );
    }
}
