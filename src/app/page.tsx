import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import DesignWorks from "@/components/DesignWorks";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Marquee
          items={["PM", "UI/UX", "Frontend", "Mobile", "Backend", "Design System", "Agile"]}
          speed={25}
        />
        <Projects />
        <DesignWorks />
        <Marquee
          items={["React", "Next.js", "TypeScript", "React Native", "Flutter", "Figma", "Node.js"]}
          speed={30}
          reverse
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
