import Hero from './Hero';
import About from './About';
import Projects from './Projects'
import Footer from './Footer';
import Education from './Education';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="bg-teal-900 ">
      <Hero />
      <About />
      <Education />
      <Projects />
      <Footer />
      <Analytics />
    </main>
  );
}