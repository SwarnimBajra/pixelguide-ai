import { Button } from "@/components/ui/button";
import { ArrowRight, Github, BookOpen } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-glow/20 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-deep/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl text-center">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-cyan-glow/30 bg-card/50 backdrop-blur-sm">
          <p className="text-sm text-muted-foreground">Neural Radiance Fields • 3D Gaussian Splatting • Novel View Synthesis</p>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="gradient-text">Horizon</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
          Photorealistic 3D Scene Reconstruction from RGB Images
        </p>

        <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-2xl mx-auto">
          A lightweight, efficient pipeline leveraging NeRF and Gaussian Splatting for 
          high-quality novel view synthesis on modest hardware
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            variant="hero"
            className="group text-lg px-8 py-6 glow-cyan"
          >
            Explore Demo
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-cyan-glow/30 hover:bg-cyan-glow/10 hover:border-cyan-glow/50 text-lg px-8 py-6"
          >
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Button>
          
          <Button 
            size="lg" 
            variant="ghost" 
            className="hover:bg-purple-deep/10 hover:text-purple-deep text-lg px-8 py-6"
          >
            <BookOpen className="mr-2 h-5 w-5" />
            Read Paper
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-glow/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-cyan-glow rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};
