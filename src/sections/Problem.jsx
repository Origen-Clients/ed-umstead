import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Problem() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.problem-reveal',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
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
            id="problem"
            ref={sectionRef}
            className="py-24 md:py-32 bg-surface text-base relative"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
                <h2 className="problem-reveal font-display font-bold text-4xl md:text-5xl leading-[1.15] mb-8 max-w-4xl">
                    Insurance complications are killing your most profitable deals
                </h2>

                <div className="space-y-6 text-lg font-body leading-[1.7] text-base/80 max-w-4xl">
                    <p className="problem-reveal">
                        Saturday night, 10 PM. Your salesperson has spent hours with a customer, switched them through three different cars, built all the value, and financing is approved. Then it happens. Their insurance agent isn't answering. Or worse, they get quoted a rate higher than their car payment because of their driving record. A $2,500 profit deal just walked away.
                    </p>

                    <p className="problem-reveal">
                        This isn't just one lost deal. High-volume dealerships are losing 10, 20, sometimes 30 deals every month to insurance complications. Bad credit customers who can't get reasonable quotes. Weekend deliveries when agents are closed. State emergencies that shut down traditional insurance while you're still open for business. First-time buyers with no insurance history. Customers with DUIs or poor driving records.
                    </p>

                    <p className="problem-reveal">
                        Meanwhile, your salespeople are stuck on the phone with unavailable agents instead of taking the next customer. You're forced to make spot deliveries without confirmed coverage, exposing your dealership to massive liability. Every single lost deal represents wasted time, frustrated customers, and profit that should have been yours.
                    </p>
                </div>

                <div className="problem-reveal mt-16 pt-12 border-t border-base/10">
                    <p className="font-display italic text-2xl md:text-3xl text-accent font-semibold leading-[1.3] max-w-3xl mx-auto text-center">
                        "The brutal truth is that insurance complications are costing you hundreds of thousands in profit every year."
                    </p>
                </div>
            </div>
        </section>
    );
}
