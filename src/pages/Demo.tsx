import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Upload, ArrowLeft, X, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const Demo = () => {
  const [uploadedImages, setUploadedImages] = useState<{ file: File; preview: string; storagePath: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    setIsUploading(true);
    const newImages: { file: File; preview: string; storagePath: string }[] = [];

    try {
      for (const file of files) {
        const fileName = `${Date.now()}-${file.name}`;
        const { error } = await supabase.storage
          .from("input-images")
          .upload(fileName, file);

        if (error) throw error;

        newImages.push({ 
          file, 
          preview: URL.createObjectURL(file),
          storagePath: fileName 
        });
      }

      setUploadedImages((prev) => [...prev, ...newImages]);
      toast.success(`${files.length} image(s) uploaded`);
    } catch (error) {
      toast.error("Upload failed");
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (uploadedImages.length === 0) {
      toast.error("Upload images first");
      return;
    }

    setIsProcessing(true);

    try {
      const { data, error } = await supabase
        .from("processing_jobs")
        .insert({
          job_type: "nerf",
          input_images: uploadedImages.map((img) => img.storagePath),
          status: "pending",
        })
        .select()
        .single();

      if (error) throw error;

      toast.success(`Job created: ${data.id.slice(0, 8)}...`);
      
      // Simulate processing
      setTimeout(() => {
        setIsProcessing(false);
        toast.success("Processing complete");
      }, 3000);
    } catch (error) {
      toast.error("Failed to create job");
      console.error(error);
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen">
      <header className="border-b px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <span className="text-sm font-bold">Demo</span>
        <div className="w-12" />
      </header>

      <div className="max-w-lg mx-auto px-4 py-6">
        <h1 className="text-xl font-bold mb-1">Upload Images</h1>
        <p className="text-xs text-muted-foreground mb-6">
          Upload photos to generate 3D scene
        </p>

        {/* Upload area */}
        <div className="border-2 border-dashed p-6 text-center mb-4">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            id="image-upload"
            disabled={isUploading}
          />
          <label htmlFor="image-upload" className="cursor-pointer block">
            {isUploading ? (
              <Loader2 className="w-8 h-8 mx-auto mb-2 animate-spin text-muted-foreground" />
            ) : (
              <Upload className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
            )}
            <p className="text-sm text-muted-foreground">
              {isUploading ? "Uploading..." : "Tap to upload"}
            </p>
          </label>
        </div>

        {/* Image previews */}
        {uploadedImages.length > 0 && (
          <div className="mb-6">
            <p className="text-xs text-muted-foreground mb-2">
              {uploadedImages.length} image(s)
            </p>
            <div className="grid grid-cols-3 gap-2">
              {uploadedImages.map((img, idx) => (
                <div key={idx} className="relative aspect-square">
                  <img
                    src={img.preview}
                    alt={`Upload ${idx + 1}`}
                    className="w-full h-full object-cover border"
                  />
                  <button
                    onClick={() => removeImage(idx)}
                    className="absolute top-1 right-1 w-5 h-5 bg-background border flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process button */}
        <Button
          onClick={handleProcess}
          className="w-full"
          size="sm"
          disabled={isProcessing || uploadedImages.length === 0}
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-3 h-3 mr-2 animate-spin" />
              Processing...
            </>
          ) : (
            "Generate 3D Scene"
          )}
        </Button>

        {/* Info */}
        <div className="mt-8 pt-6 border-t">
          <h2 className="text-sm font-bold mb-2">How it works</h2>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>1. Upload multiple views of a scene</li>
            <li>2. Images are stored securely</li>
            <li>3. NeRF pipeline generates 3D model</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo;
