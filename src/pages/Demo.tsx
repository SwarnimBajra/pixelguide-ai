import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Box, RotateCcw, Download, ArrowLeft, Play } from "lucide-react";
import { toast } from "sonner";

const Demo = () => {
  const [uploadedImages, setUploadedImages] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setUploadedImages(files);
      toast.success(`${files.length} image(s) uploaded successfully`);
    }
  };

  const handleProcess = () => {
    if (uploadedImages.length === 0) {
      toast.error("Please upload at least one image first");
      return;
    }
    setIsProcessing(true);
    toast.info("Processing images... This may take a few moments");
    setTimeout(() => {
      setIsProcessing(false);
      toast.success("3D scene generated successfully!");
    }, 3000);
  };

  const exampleDatasets = [
    { name: "ShapeNet Car", views: 251, category: "Vehicle" },
    { name: "DTU Scan", views: 49, category: "Object" },
    { name: "Real Car", views: 1, category: "Real-world" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground hover:text-accent transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Horizon
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Model
            </Button>
            <Button variant="default" size="sm">Documentation</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Interactive Demo
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Upload your images and watch as Horizon reconstructs a full 3D scene using neural radiance fields
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Upload & Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Upload Section */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5 text-accent" />
                  Upload Images
                </CardTitle>
                <CardDescription>Upload one or more views of your scene</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-accent/50 transition-colors cursor-pointer group">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
                    <p className="text-sm text-muted-foreground mb-2">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                  </label>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium">{uploadedImages.length} image(s) uploaded</p>
                    <div className="grid grid-cols-3 gap-2">
                      {uploadedImages.slice(0, 6).map((file, idx) => (
                        <div key={idx} className="aspect-square rounded-lg bg-muted/50 border border-border/50" />
                      ))}
                    </div>
                  </div>
                )}

                <Button 
                  onClick={handleProcess} 
                  className="w-full" 
                  disabled={isProcessing || uploadedImages.length === 0}
                >
                  {isProcessing ? (
                    <>
                      <RotateCcw className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Generate 3D Scene
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>

            {/* Example Datasets */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Example Datasets</CardTitle>
                <CardDescription>Try these pre-configured scenes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {exampleDatasets.map((dataset, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-border/50 hover:border-accent/50 transition-all cursor-pointer hover:shadow-glow group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium group-hover:text-accent transition-colors">{dataset.name}</h4>
                      <span className="text-xs text-muted-foreground">{dataset.views} views</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{dataset.category}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Settings */}
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Render Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Resolution</label>
                  <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm">
                    <option>512 x 512</option>
                    <option>1024 x 1024</option>
                    <option>2048 x 2048</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Quality</label>
                  <select className="w-full px-3 py-2 rounded-md border border-border bg-background text-sm">
                    <option>Fast</option>
                    <option>Balanced</option>
                    <option>High Quality</option>
                  </select>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Panel - 3D Viewer */}
          <div className="lg:col-span-2">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-accent" />
                  3D Scene Viewer
                </CardTitle>
                <CardDescription>Interactive neural radiance field rendering</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-background to-primary/10 rounded-lg border border-primary/30 flex items-center justify-center relative overflow-hidden group">
                  {/* Placeholder 3D viewer */}
                  <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                  <div className="relative z-10 text-center space-y-4">
                    <Box className="w-20 h-20 mx-auto text-accent/50 animate-float" />
                    <div>
                      <p className="text-lg font-medium text-muted-foreground mb-2">
                        {uploadedImages.length > 0 
                          ? "Click 'Generate 3D Scene' to start" 
                          : "Upload images to begin"}
                      </p>
                      <p className="text-sm text-muted-foreground/70">
                        Interactive 3D viewer will appear here
                      </p>
                    </div>
                  </div>
                  
                  {/* Control hints */}
                  <div className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg px-4 py-2 border border-border/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-muted-foreground">
                      🖱️ Click & drag to rotate • Scroll to zoom
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mt-6">
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-2xl font-bold text-accent mb-1">0</p>
                    <p className="text-xs text-muted-foreground">Input Views</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-2xl font-bold text-accent mb-1">--</p>
                    <p className="text-xs text-muted-foreground">Render Time</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-2xl font-bold text-accent mb-1">--</p>
                    <p className="text-xs text-muted-foreground">PSNR</p>
                  </div>
                  <div className="text-center p-4 rounded-lg bg-muted/30 border border-border/30">
                    <p className="text-2xl font-bold text-accent mb-1">--</p>
                    <p className="text-xs text-muted-foreground">Quality</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
