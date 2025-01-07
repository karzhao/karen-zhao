import Hero from './Hero';
import About from './About';
import Projects from './Projects'
import Footer from './Footer';
import Education from './Education';

export default function Home() {
  return (
    <main className="overflow-hidden bg-teal-900 ">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}