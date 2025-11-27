import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 border-b">
      <div className="container relative z-10 mx-auto max-w-3xl">
        <div className="inline-block mb-6 px-4 py-1.5 border border-primary bg-background">
          <p className="text-xs uppercase tracking-widest font-medium">Neural Radiance Fields • 3D Gaussian Splatting</p>
        </div>

        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
          Horizon
        </h1>

        <p className="text-lg md:text-xl mb-4 font-semibold">
          Photorealistic 3D Scene Reconstruction from RGB Images
        </p>

        <p className="text-sm md:text-base text-muted-foreground mb-10 leading-relaxed max-w-2xl">
          A lightweight, efficient pipeline leveraging NeRF and Gaussian Splatting for 
          high-quality novel view synthesis on modest hardware
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <Link to="/demo">
            <Button 
              size="default" 
              variant="default"
              className="group"
            >
              Explore Demo
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            size="default" 
            variant="outline"
          >
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Button>
          
          <Button 
            size="default" 
            variant="ghost"
          >
            <BookOpen className="mr-2 h-4 w-4" />
            Read Paper
          </Button>
        </div>
      </div>
    </section>
  );
};