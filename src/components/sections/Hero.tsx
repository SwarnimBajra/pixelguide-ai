import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container relative z-10 mx-auto max-w-4xl text-center">
        <div className="inline-block mb-8 px-6 py-3 rounded-sm border-2 border-primary bg-background">
          <p className="text-xs uppercase tracking-wider font-medium">Neural Radiance Fields • 3D Gaussian Splatting</p>
        </div>

        <h1 className="text-7xl md:text-9xl font-bold mb-8 tracking-tight">
          Horizon
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-2xl mx-auto">
          Photorealistic 3D Scene Reconstruction from RGB Images
        </p>

        <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          A lightweight, efficient pipeline leveraging NeRF and Gaussian Splatting for 
          high-quality novel view synthesis on modest hardware
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link to="/demo">
            <Button 
              size="lg" 
              variant="default"
              className="group text-base px-10 py-6"
            >
              Explore Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="text-base px-10 py-6"
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost" 
            className="text-base px-10 py-6"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Read Paper
          </Button>
        </div>
      </div>
    </section>
  );
};