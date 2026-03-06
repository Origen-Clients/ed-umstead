import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeWorkWith() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.who-we-work-with-content',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 75%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="who-we-work-with"
            ref={sectionRef}
            className="py-24 md:py-32 bg-base relative"
        >
            <div className="absolute inset-0 z-0 bg-muted/5"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
                <h2 className="who-we-work-with-content font-display font-bold text-4xl md:text-5xl leading-[1.15] mb-8 max-w-4xl">
                    Built for high-volume dealerships
                </h2>

                <div className="space-y-6 text-lg font-body leading-[1.7] text-surface/80 max-w-4xl">
                    <p className="who-we-work-with-content">
                        Our ideal partners are General Managers, Sales Managers, and Finance Managers at Toyota, Nissan, Kia, Hyundai, Chevy, Ford, and Mitsubishi dealerships selling 200+ cars per month. You operate in major metropolitan markets where customers want to buy cars around the clock, but traditional insurance agents keep banker's hours.
                    </p>

                    <p className="who-we-work-with-content">
                        You're tired of watching profitable customers walk away because their insurance quote was too high or their agent was unavailable. You understand that every lost deal costs approximately $2,500 in profit, and you can't afford to let insurance complications derail your numbers. You want a solution that works immediately without disrupting your existing processes.
                    </p>
                </div>
            </div>
        </section>
    );
}
