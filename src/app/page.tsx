import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Career from "@/components/Career";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Marquee
          items={["PM", "UI/UX", "Frontend", "Mobile", "Backend", "Design System", "Agile"]}
          speed={25}
        />
        <Career />
        <Projects />
        <Marquee
          items={["React", "Next.js", "TypeScript", "React Native", "Flutter", "Figma", "Node.js"]}
          speed={30}
          reverse
        />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
