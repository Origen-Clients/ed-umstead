import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-content',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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
            className="py-24 md:py-32 bg-base relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/5 rounded-full blur-[120px] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 relative z-10 text-center flex flex-col items-center">
                <h2 className="cta-content font-display font-bold text-4xl md:text-6xl leading-[1.1] text-surface mb-8 max-w-4xl">
                    Stop losing profitable deals starting this week
                </h2>

                <p className="cta-content text-lg md:text-xl text-surface/80 leading-[1.6] max-w-3xl mb-12 font-light">
                    Every day you delay is another day of lost deals and missed profits. Join the high-volume dealerships who never let insurance complications kill their numbers. Get immediate access to the two-minute solution that closes deals and protects your bottom line.
                </p>

                <div className="cta-content flex flex-col items-center gap-6">
                    <a
                        href="https://calendly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-accent text-base font-bold px-10 py-5 rounded-pill flex items-center justify-center gap-2 hover:scale-[1.03] hover:-translate-y-[2px] shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-95 text-base uppercase tracking-wider"
                    >
                        Get Your Solution Now
                        <svg className="w-5 h-5 ml-1 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </a>

                    <p className="flex items-center justify-center gap-2 text-surface/60 font-medium text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                        24-hour dealer setup, no dealer agreements required
                    </p>
                </div>
            </div>
        </section>
    );
}
