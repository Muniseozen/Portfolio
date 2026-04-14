import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const About = dynamic(() => import("@/components/About"));
const Skills = dynamic(() => import("@/components/Skills"));
const Marquee = dynamic(() => import("@/components/Marquee"));
const Projects = dynamic(() => import("@/components/Projects"));
const DesignWorks = dynamic(() => import("@/components/DesignWorks"));

export default function Home() {
  return (
    <PageTransition>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Skills />
        <Marquee
          items={["Figma", "UI/UX Design", "Frontend", "Mobile App", "SwiftUI"]}
          speed={25}
        />
        <Projects />
        <DesignWorks />
        <Marquee
          items={["Figma", "UI/UX Design", "Frontend", "Mobile App", "SwiftUI"]}
          speed={30}
          reverse
        />
      </main>
      <Footer />
    </PageTransition>
  );
}
