import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Approach() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.approach-content',
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

            gsap.fromTo('.approach-pullquote',
                { scale: 0.95, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: '.approach-pullquote',
                        start: "top 85%",
                        toggleActions: "play none none none"
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="approach"
            ref={sectionRef}
            className="py-24 md:py-32 bg-surface text-base relative"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="max-w-2xl">
                        <h2 className="approach-content font-display font-bold text-4xl md:text-5xl leading-[1.15] mb-8">
                            Two minutes to coverage, zero complications
                        </h2>

                        <div className="space-y-6 text-lg font-body leading-[1.7] text-base/80">
                            <p className="approach-content">
                                We've been solving dealership insurance problems for 30 years. Policies are underwritten by Integon National, a billion-dollar A-rated carrier recently acquired by Allstate. We understand exactly what happens when insurance becomes a barrier to closing deals.
                            </p>

                            <p className="approach-content">
                                Our approach is simple: instead of fighting with agents or waiting for callbacks, managers can issue a state-approved binder in two minutes through our website. Your customer gets legitimate full coverage, your deal is protected, and your salesperson moves on to the next customer. A no-brainer tool which features no setup costs, no signup fees, no monthly minimums, and no complicated dealer agreements.
                            </p>
                        </div>
                    </div>

                    <div className="approach-pullquote relative">
                        <div className="absolute -inset-4 md:-inset-8 bg-accent/5 rounded-3xl -z-10 transform -rotate-3"></div>
                        <div className="bg-base text-surface p-10 md:p-14 rounded-2xl shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-[40px] -mr-10 -mt-10"></div>

                            <svg className="w-12 h-12 text-accent/40 mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                            </svg>

                            <p className="font-display text-2xl md:text-3xl font-medium leading-[1.4] relative z-10 italic">
                                This isn't about replacing your current agent relationships. It's about having a tool in your toolbox that works when everything else fails.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
