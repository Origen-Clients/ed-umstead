import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        headline: "25 Years. Zero Complaints.",
        quote: "I am a partner in a law firm representing numerous auto dealers in the state of New Jersey. We have known the owners for over 25 years, and it is my pleasure to recommend them. In my opinion, they operate with the highest standards of professionalism and integrity. Their program is used by the great majority of dealerships in New Jersey, and in all those years we have never received a single complaint about the company or its owners.",
        attribution: "Perry, Partner at a New Jersey Law Firm"
    },
    {
        headline: "Keeps Deals Together and Protects Gross",
        quote: "We've been working together for over 15 years, and it's a great relationship. We now use the program at all three of our locations, and it helps us keep deals together. I think we save over 10 deals every month, and when you're averaging $2,500 per deal, that adds up.",
        attribution: "Miguel O., General Manager — Doral LM, Florida"
    }
];

export default function Testimonial() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.testimonial-card',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-surface text-base relative"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((t, index) => (
                        <div
                            key={index}
                            className="testimonial-card bg-white p-10 md:p-12 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.06)] relative"
                        >
                            <h3 className="font-display font-bold text-xl md:text-2xl text-base mb-3 relative z-10">
                                {t.headline}
                            </h3>
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <div className="text-accent text-6xl font-display leading-none absolute top-8 right-6 opacity-30">"</div>
                            <p className="font-display italic text-lg md:text-xl leading-[1.6] text-base/90 mb-8 relative z-10">
                                {t.quote}
                            </p>
                            <div className="font-body font-bold text-sm tracking-wide uppercase text-accent">
                                — {t.attribution}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
