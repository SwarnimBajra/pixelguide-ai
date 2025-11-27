import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Technology } from "@/components/sections/Technology";
import { Features } from "@/components/sections/Features";
import { Team } from "@/components/sections/Team";
import { Research } from "@/components/sections/Research";
import { Footer } from "@/components/sections/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ThemeToggle />
      <Hero />
      <About />
      <Technology />
      <Features />
      <Team />
      <Research />
      <Footer />
    </div>
  );
};

export default Index;
