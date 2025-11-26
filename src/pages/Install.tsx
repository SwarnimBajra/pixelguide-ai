import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Smartphone, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Install = () => {
  const navigate = useNavigate();
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="w-32 h-32 rounded-3xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Smartphone className="w-16 h-16 text-white" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-primary bg-clip-text text-transparent">
            Install Horizon
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Get the full app experience with offline access, faster loading, and home screen convenience
          </p>
        </div>

        {isInstalled ? (
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20">
              <Check className="w-6 h-6 text-primary" />
              <span className="text-lg font-medium">App Installed Successfully!</span>
            </div>
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="px-8"
            >
              Open Horizon
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {deferredPrompt ? (
              <Button
                onClick={handleInstall}
                size="lg"
                className="px-8 gap-2"
              >
                <Download className="w-5 h-5" />
                Install Now
              </Button>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  To install Horizon on your device:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <div className="p-6 rounded-xl bg-card border border-border space-y-2">
                    <h3 className="font-display font-semibold text-lg">iOS (iPhone/iPad)</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Tap the Share button in Safari</li>
                      <li>2. Select "Add to Home Screen"</li>
                      <li>3. Tap "Add" to confirm</li>
                    </ol>
                  </div>
                  <div className="p-6 rounded-xl bg-card border border-border space-y-2">
                    <h3 className="font-display font-semibold text-lg">Android</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. Tap the menu icon (⋮)</li>
                      <li>2. Select "Install app" or "Add to Home screen"</li>
                      <li>3. Follow the prompts</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
            
            <Button
              variant="outline"
              onClick={() => navigate('/')}
            >
              Continue in Browser
            </Button>
          </div>
        )}

        <div className="pt-8 border-t border-border">
          <h3 className="font-display font-semibold mb-4">Why Install?</h3>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 rounded-lg bg-card/50">
              <div className="font-medium mb-1">⚡ Faster Loading</div>
              <div className="text-muted-foreground">Instant access with cached resources</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50">
              <div className="font-medium mb-1">📱 Native Feel</div>
              <div className="text-muted-foreground">Full-screen app experience</div>
            </div>
            <div className="p-4 rounded-lg bg-card/50">
              <div className="font-medium mb-1">🔌 Offline Access</div>
              <div className="text-muted-foreground">Works without internet</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
