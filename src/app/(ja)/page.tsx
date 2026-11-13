import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Marquee = dynamic(() => import("@/components/Marquee"));
const Projects = dynamic(() => import("@/components/Projects"));
const Process = dynamic(() => import("@/components/Process"));
const Contact = dynamic(() => import("@/components/Contact"));

export default function Home() {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Marquee
          items={["Design", "Frontend", "Mobile App", "Home Page", "Figma"]}
          speed={70}
        />
        <Projects />
        <Process />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
