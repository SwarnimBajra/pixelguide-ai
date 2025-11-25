import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Redefining <span className="gradient-text">3D Reconstruction</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Horizon bridges the gap between cutting-edge research and practical deployment, 
            making photorealistic 3D scene generation accessible on modest hardware
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-cyan-glow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Target className="h-6 w-6 text-cyan-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Objectives</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Develop working NVS pipeline</li>
              <li>• Optimize for modest hardware</li>
              <li>• Achieve high quality & efficiency</li>
              <li>• Evaluate across datasets</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-purple-deep/20 hover:border-purple-deep/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-purple-deep/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Lightbulb className="h-6 w-6 text-purple-deep" />
            </div>
            <h3 className="text-xl font-bold mb-2">Motivation</h3>
            <p className="text-muted-foreground">
              Making NVS practical for VR, AR, gaming, and immersive media by addressing 
              computational limitations and accessibility barriers
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-cyan-glow/20 hover:border-cyan-glow/40 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-lg bg-cyan-glow/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <TrendingUp className="h-6 w-6 text-cyan-glow" />
            </div>
            <h3 className="text-xl font-bold mb-2">Impact</h3>
            <p className="text-muted-foreground">
              Bridging research and real-world applications through efficiency, 
              adaptability, and performance on standard hardware
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-purple-deep/20">
          <h3 className="text-2xl font-bold mb-4">Background</h3>
          <div className="text-muted-foreground space-y-4 leading-relaxed">
            <p>
              Neural Radiance Fields (NeRF) revolutionized 3D scene reconstruction by demonstrating 
              photorealistic novel view synthesis from sparse input images. However, traditional NeRF 
              approaches suffer from long training times, high computational requirements, and the need 
              for accurate camera poses.
            </p>
            <p>
              Recent advances in 3D Gaussian Splatting have enabled real-time rendering while maintaining 
              quality, but at the cost of high memory usage and geometric inconsistencies. Horizon addresses 
              these challenges by developing a lightweight pipeline that maintains quality while being 
              deployable on modest hardware systems.
            </p>
            <p>
              Our approach combines insights from state-of-the-art methods including Instant-NGP, Plenoxels, 
              FA-BARF, and Analytic-Splatting to create an efficient, practical solution for novel view synthesis.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
