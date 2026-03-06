import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Founder() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.founder-content',
                { y: 30, opacity: 0 },
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

            gsap.fromTo('.founder-image',
                { scale: 0.95, opacity: 0, rotation: -2 },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.founder-image',
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
            id="founder"
            ref={sectionRef}
            className="py-24 md:py-32 bg-base relative overflow-hidden"
        >
            <div className="absolute top-1/2 left-[-10%] w-[30%] h-[50%] bg-accent/5 rounded-full blur-[100px] z-0 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    <div className="w-full lg:w-[45%]">
                        <div className="founder-image relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] bg-surface/5 group">
                            {/* Note: The user provided a photo. We assume it is placed at public/ed-umstead.jpg */}
                            <img
                                src="/ed-umstead.jpg"
                                alt="Ed Umstead - Founder"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                onError={(e) => {
                                    // Fallback if image isn't loaded properly
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'flex';
                                }}
                            />
                            <div
                                className="absolute inset-0 bg-surface/5 flex items-center justify-center text-surface/40 font-mono text-sm hidden"
                            >
                                [Image: ed-umstead.jpg]
                            </div>
                            <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[55%]">
                        <h2 className="founder-content font-display font-bold text-4xl md:text-5xl leading-[1.1] mb-4">
                            Ed Umstead
                        </h2>
                        <p className="founder-content text-accent font-display italic text-xl md:text-2xl mb-10">
                            30 years of solving the insurance problems that kill profitable deals
                        </p>

                        <div className="space-y-6 text-lg font-body leading-[1.7] text-surface/80">
                            <p className="founder-content">
                                Ed has been in the trenches of automotive sales and finance since the 1990s, spending 20 years as a Toyota finance manager before becoming one of the most trusted insurance solution representatives in the Southeast. He understands exactly what happens on the showroom floor when insurance becomes a barrier to closing deals.
                            </p>

                            <p className="founder-content">
                                With clients across Florida, Georgia, and Texas, Ed has built relationships with hundreds of dealerships by delivering exactly what he promises: a reliable way to never lose another deal to insurance complications. His approach is straightforward, his product is proven, and his results speak for themselves. When dealership managers need insurance coverage that works when everything else fails, they call Ed.
                            </p>

                            <p className="founder-content">
                                Ed is currently expanding his proven system to help more high-volume dealerships eliminate insurance as a barrier to profitability. His philosophy is simple: every qualified customer should be able to drive off the lot, regardless of their insurance situation.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
