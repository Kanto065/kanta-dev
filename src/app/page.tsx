import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 pb-20">
      <div id="home"><Hero /></div>
      <div id="summary"><Summary /></div>
      <Stats />
      <div id="skills"><Skills /></div>
      <div id="portfolio"><Portfolio /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <FloatingNav />
    </main>
  );
}
