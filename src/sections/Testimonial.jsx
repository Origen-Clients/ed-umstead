import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "This system saved us at least 15 deals last month that would have walked because of insurance issues. The two-minute coverage capability is a game changer, especially for our weekend deliveries. My team can focus on selling cars instead of chasing agents.",
        attribution: "Mike T., General Manager, Tampa Toyota"
    },
    {
        quote: "During the last hurricane, every other dealer shut down but we stayed open and sold cars because we could issue coverage when all the agents were closed. That alone generated over $100,000 in profit we never would have seen otherwise.",
        attribution: "Sarah M., Sales Manager, Atlanta Nissan"
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
                            <div className="text-accent text-6xl font-display leading-none absolute top-8 left-6 opacity-30">"</div>
                            <p className="font-display italic text-lg md:text-xl leading-[1.6] text-base/90 mb-8 relative z-10 pt-4">
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
