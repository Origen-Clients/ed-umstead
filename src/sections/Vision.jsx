import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Vision() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.vision-content',
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 md:py-32 bg-surface text-base relative"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
                <div className="mb-8">
                    <span className="vision-content block font-mono text-sm tracking-widest text-accent uppercase mb-4">
                        The Vision
                    </span>
                    <h2 className="vision-content font-display font-bold text-4xl md:text-5xl leading-[1.15] max-w-4xl">
                        No deal should ever die from insurance
                    </h2>
                </div>

                <div className="space-y-6 text-lg font-body leading-[1.7] text-base/80 max-w-4xl">
                    <p className="vision-content">
                        We're creating a world where insurance never becomes a barrier between a qualified customer and their new car. Every dealership in our target markets will have immediate access to state-approved coverage that works when traditional agents fail.
                    </p>

                    <p className="vision-content">
                        Our vision extends beyond individual stores to entire dealer groups, creating competitive advantages that translate to millions in additional annual profit. We're not just solving today's insurance problems, we're building the infrastructure that ensures tomorrow's deals close successfully.
                    </p>
                </div>

                <div className="vision-content mt-16 pt-12 border-t border-base/10">
                    <p className="font-display italic text-2xl text-base/90 font-medium max-w-3xl">
                        "The automotive industry is evolving, but the need to deliver cars and protect profits remains constant. We're here to make sure insurance complications never stand in the way of either."
                    </p>
                </div>
            </div>
        </section>
    );
}
