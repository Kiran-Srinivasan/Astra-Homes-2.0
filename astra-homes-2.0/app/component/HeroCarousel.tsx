'use client';

import React, { useState, useEffect } from 'react';

interface Slide {
    type: 'image' | 'video';
    src: string;
}

interface HeroCarouselProps {
    slides: Slide[];
}

export default function HeroCarousel({ slides }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 8000); // Change slide every 8 seconds

        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                        }`}
                >
                    {slide.type === 'video' ? (
                        <video
                            className="w-full h-full object-cover min-w-full min-h-full pointer-events-none"
                            src={slide.src}
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                        />
                    ) : (
                        <img
                            src={slide.src}
                            alt="Hero Background"
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    {/* Overlay gradient for text readability - applied to each slide specifically or globally (doing globally in parent is better usually but here ensures it fades with slide if needed, but actually static overlay is better. Keeping standard overlap in parent) */}
                </div>
            ))}
            {/* Global Overlay to ensure consistent text readability regardless of slide brightness */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/70 z-10" />

            {/* Carousel Indicators */}
            <div className="absolute bottom-8 right-8 z-20 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
