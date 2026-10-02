// Reorder or remove sections here.
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technology from "@/components/Technology";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import Project from "@/components/Project";
import Approach from "@/components/Approach";
import Vision from "@/components/Vision";
import Impact from "@/components/Impact";
import Careers from "@/components/Careers";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Technology />
        <Products />
        <Industries />
        <Project />
        <Approach />
        <Vision />
        <Impact />
        <Careers />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
