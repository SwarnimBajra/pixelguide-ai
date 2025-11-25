import { Github, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-cyan-glow/20 bg-gradient-to-b from-transparent to-blue-deep/30">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Horizon</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Neural Radiance Fields and 3D Gaussian Splatting for photorealistic novel view synthesis
            </p>
            <div className="flex space-x-2">
              <Button size="icon" variant="ghost" className="hover:text-cyan-glow">
                <Github className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-cyan-glow">
                <Mail className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:text-cyan-glow">
                <ExternalLink className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#about" className="hover:text-cyan-glow transition-colors">About</a></li>
              <li><a href="#technology" className="hover:text-cyan-glow transition-colors">Technology</a></li>
              <li><a href="#features" className="hover:text-cyan-glow transition-colors">Features</a></li>
              <li><a href="#team" className="hover:text-cyan-glow transition-colors">Team</a></li>
              <li><a href="#research" className="hover:text-cyan-glow transition-colors">Research</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">GitHub Repository</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Project Proposal</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Related Papers</a></li>
              <li><a href="#" className="hover:text-cyan-glow transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-glow/20 pt-8 text-center">
          <p className="text-muted-foreground text-sm mb-2">
            © 2025 Horizon Project • Kathmandu University
          </p>
          <p className="text-muted-foreground text-xs">
            Department of Computer Science and Engineering • COMP 308
          </p>
        </div>
      </div>
    </footer>
  );
};
