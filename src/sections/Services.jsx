import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldAlert, ShieldCheck, Building2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        icon: ShieldAlert,
        overline: "EMERGENCY COVERAGE",
        title: "Deal Saver",
        subtitle: "For occasional insurance emergencies and difficult customers",
        description: "Get immediate state-approved coverage when traditional agents fail. Perfect for weekend deliveries, bad driving record customers, and emergency situations. Two-minute policy issuance through our website, no monthly minimum.",
        bestFor: "Dealerships handling 5-10 difficult insurance situations per month"
    },
    {
        icon: ShieldCheck,
        overline: "FULL PROTECTION",
        title: "Revenue Accelerator",
        subtitle: "For high-volume stores that can't afford to lose deals",
        description: "Complete insurance solution covering all scenarios that kill deals. Permissive-use policy covering the vehicle regardless of the driver. First-time buyers. Customers with an international or out-of-state license. Includes spot delivery protection and facilitation to lock in dealer profits immediately.",
        bestFor: "High-volume dealerships selling 200+ cars per month who understand that 10 extra deals on average will generate at least $23,000 in additional gross profits.",
    },
    {
        icon: Building2,
        overline: "ENTERPRISE SOLUTION",
        title: "Dealer Group Mastery",
        subtitle: "For multi-location operations and dealer groups",
        description: "Comprehensive coverage across multiple locations with dedicated support, custom implementation, and priority service. Includes training for all managers, quarterly account reviews, and direct access to our team for immediate support during high-volume periods.",
        bestFor: "Dealer groups with 10+ locations looking for a lifestyle-changing competitive advantage"
    }
];

export default function Services() {
    const sectionRef = useRef(null);
    const [selectedCard, setSelectedCard] = useState(1);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.service-header',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    }
                }
            );

            gsap.fromTo('.service-card',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: '.service-cards-container',
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
            id="services"
            ref={sectionRef}
            className="py-24 md:py-32 bg-base relative overflow-hidden"
        >
            <div className="absolute top-0 right-[-10%] w-[40%] h-[70%] bg-muted/5 rounded-full blur-[100px] z-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 relative z-10">
                <div className="service-header mb-16 md:mb-24 text-center">
                    <h2 className="font-display font-bold text-4xl md:text-5xl leading-[1.15] mb-6 mx-auto max-w-4xl">
                        Three ways we eliminate insurance barriers
                    </h2>
                    <p className="text-xl text-surface/80 font-light max-w-2xl mx-auto">
                        Choose the level of coverage that matches your dealership's volume and needs.
                    </p>
                </div>

                <div className="service-cards-container grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
                    {services.map((service, index) => {
                        const isSelected = selectedCard === index;
                        return (
                        <div
                            key={index}
                            onClick={() => setSelectedCard(isSelected ? null : index)}
                            className={`service-card flex flex-col rounded-card p-8 md:p-10 transition-all duration-300 hover:-translate-y-2 border cursor-pointer ${isSelected ? 'bg-surface/5 border-accent/30 shadow-[0_8px_30px_rgba(212,175,55,0.1)]' : 'bg-surface/5 border-white/10 hover:border-white/20 hover:bg-surface/10'}`}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3 rounded-lg ${isSelected ? 'bg-accent/20 text-accent' : 'bg-white/10 text-surface'}`}>
                                    <service.icon size={24} />
                                </div>
                                <span className="font-mono text-xs tracking-wider uppercase opacity-70">
                                    {service.overline}
                                </span>
                            </div>

                            <h3 className="font-display font-bold text-2xl md:text-3xl mb-3">
                                {service.title}
                            </h3>

                            <p className="text-base font-medium mb-6" style={{ color: '#d4af37' }}>
                                {service.subtitle}
                            </p>

                            <p className="text-surface/70 leading-[1.6] mb-8 flex-grow">
                                {service.description}
                            </p>

                            <div className={`mt-auto pt-6 border-t ${isSelected ? 'border-accent/20' : 'border-white/10'}`}>
                                <p className="text-sm">
                                    <span className="font-bold opacity-90 block mb-1">Best for:</span>
                                    <span className="text-surface/60">{service.bestFor}</span>
                                </p>
                            </div>
                        </div>
                        );
                    })}
                </div>

                <div className="service-header text-center">
                    <p className="text-xl font-display italic text-surface/90 mb-8">
                        Ready to stop losing deals? Choose your solution and start closing more cars this week.
                    </p>
                    <a
                        href="https://calendly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-base font-bold px-8 py-4 rounded-pill hover:scale-[1.03] hover:-translate-y-[2px] shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider"
                    >
                        Get Your Solution Now
                    </a>
                </div>
            </div>
        </section>
    );
}
