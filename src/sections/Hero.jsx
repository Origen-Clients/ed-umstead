import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations for Hero
            gsap.fromTo('.stagger-reveal',
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    stagger: 0.15,
                    ease: "power3.out",
                    delay: 0.2
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
        >
            {/* Dynamic Background Noise / Pattern */}
            <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            {/* Geometric background accents */}
            <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-muted/10 rounded-full blur-[120px] z-0"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-accent/5 rounded-full blur-[100px] z-0"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 w-full relative z-10">
                <div className="w-full">
                    <p className="stagger-reveal text-accent font-mono font-medium tracking-[0.15em] uppercase text-sm mb-6 flex items-center gap-3">
                        <span className="w-12 h-px bg-accent/60"></span>
                        Dealership Insurance Solution
                    </p>

                    <h1 className="stagger-reveal font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-surface mb-8 max-w-4xl">
                        Never lose another <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">profitable deal</span> to insurance
                    </h1>

                    <p className="stagger-reveal text-lg md:text-xl text-surface/80 leading-[1.6] max-w-3xl mb-12 font-light">
                        The proven two-minute system that high-volume dealerships use to close more cars, protect their bottom line, and deliver customers 24/7 regardless of agent availability or driving records.
                    </p>

                    <div className="stagger-reveal flex flex-col sm:flex-row items-start sm:items-center gap-6">
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-base font-bold px-8 py-5 rounded-pill flex items-center justify-center gap-2 hover:scale-[1.03] hover:-translate-y-[2px] shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-[0_15px_40px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-95 uppercase tracking-wider"
                        >
                            Get Your Solution Now
                            <svg className="w-5 h-5 ml-1 -mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                        </a>

                        <p className="flex items-center gap-2 text-surface/60 font-medium text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                            24-hour dealer setup, no dealer agreements required
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
