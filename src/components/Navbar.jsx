import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-base/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 flex items-center justify-between">

                    {/* Logo Mark */}
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-sm bg-accent rotate-45 flex items-center justify-center transform transition-transform hover:rotate-180 duration-500">
                            <div className="w-4 h-4 rounded-sm border border-base -rotate-45" />
                        </div>
                        <span className="font-display font-bold text-xl tracking-tight text-surface">
                            Ed's Insurance Solution
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#problem" className="text-surface/80 hover:text-accent transition-colors font-medium text-sm tracking-wide">The Problem</a>
                        <a href="#services" className="text-surface/80 hover:text-accent transition-colors font-medium text-sm tracking-wide">Solutions</a>
                        <a href="#approach" className="text-surface/80 hover:text-accent transition-colors font-medium text-sm tracking-wide">Approach</a>
                        <a href="#who-we-work-with" className="text-surface/80 hover:text-accent transition-colors font-medium text-sm tracking-wide">Who We Help</a>
                        <a href="#founder" className="text-surface/80 hover:text-accent transition-colors font-medium text-sm tracking-wide">About Ed</a>
                        <a
                            href="https://calendly.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent text-base font-bold px-6 py-2.5 rounded-pill hover:scale-[1.03] hover:-translate-y-[2px] shadow-md hover:shadow-xl transition-all duration-300 active:scale-95 text-sm uppercase tracking-wider"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-surface p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-base z-40 transition-opacity duration-300 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    <a href="#problem" onClick={() => setIsMenuOpen(false)} className="text-surface text-2xl font-display font-medium hover:text-accent transition-colors">The Problem</a>
                    <a href="#services" onClick={() => setIsMenuOpen(false)} className="text-surface text-2xl font-display font-medium hover:text-accent transition-colors">Solutions</a>
                    <a href="#approach" onClick={() => setIsMenuOpen(false)} className="text-surface text-2xl font-display font-medium hover:text-accent transition-colors">Approach</a>
                    <a href="#founder" onClick={() => setIsMenuOpen(false)} className="text-surface text-2xl font-display font-medium hover:text-accent transition-colors">About Ed</a>
                    <a
                        href="https://calendly.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsMenuOpen(false)}
                        className="bg-accent text-base font-bold px-8 py-4 rounded-pill mt-4"
                    >
                        Get Your Solution Now
                    </a>
                </div>
            </div>
        </>
    );
}
