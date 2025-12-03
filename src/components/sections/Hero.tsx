import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-[60vh] flex items-center px-4 py-12">
      <div className="w-full max-w-lg mx-auto">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Neural Radiance Fields
        </p>

        <h1 className="text-3xl font-bold mb-3">Horizon</h1>

        <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
          3D scene reconstruction from images using Neural Radiance Fields and 3D Gaussian Splatting.
        </p>

        <div className="flex gap-3">
          <Link to="/demo">
            <Button size="sm">Try Demo</Button>
          </Link>
          <Button size="sm" variant="outline">
            GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};
