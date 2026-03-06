import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Services from './sections/Services';
import Approach from './sections/Approach';
import WhoWeWorkWith from './sections/WhoWeWorkWith';
import Testimonial from './sections/Testimonial';
import Founder from './sections/Founder';
import Vision from './sections/Vision';
import FinalCTA from './sections/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-base min-h-screen text-surface selection:bg-accent/30 selection:text-surface">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Approach />
        <WhoWeWorkWith />
        <Testimonial />
        <Founder />
        <Vision />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
