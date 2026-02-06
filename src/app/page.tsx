import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
        <Marquee
          items={["PM", "UI/UX", "Frontend", "Mobile", "Backend", "Design System", "Agile"]}
          speed={25}
          variant="light"
        />
        <Projects />
        <Marquee
          items={["React", "Next.js", "TypeScript", "React Native", "Flutter", "Figma", "Node.js"]}
          speed={30}
          reverse
          variant="dark"
        />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
