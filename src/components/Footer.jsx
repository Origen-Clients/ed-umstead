export default function Footer() {
    const currentYear = new Date().getFullYear();
    // Using 2026 based on the prompt instructions if needed, or dynamic year
    const displayYear = currentYear > 2026 ? currentYear : 2026;

    return (
        <footer className="bg-base py-12 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24 flex flex-col md:flex-row items-center justify-between gap-6">

                <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-sm bg-accent rotate-45 flex items-center justify-center">
                        <div className="w-3 h-3 rounded-sm border border-base -rotate-45" />
                    </div>
                    <span className="font-display font-medium text-lg tracking-tight text-surface/90">
                        ED'S INSURANCE SOLUTION
                    </span>
                </div>

                <div className="text-surface/50 text-sm font-mono tracking-widest uppercase">
                    &copy; {displayYear} All rights reserved.
                </div>

            </div>
        </footer>
    );
}
