-- Create storage buckets for input images and output models
INSERT INTO storage.buckets (id, name, public) 
VALUES 
  ('input-images', 'input-images', false),
  ('output-models', 'output-models', true);

-- Create processing jobs table
CREATE TABLE IF NOT EXISTS public.processing_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status TEXT NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
  job_type TEXT NOT NULL CHECK (job_type IN ('nerf', 'gaussian_splatting')),
  input_images TEXT[] NOT NULL,
  output_model_url TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  error_message TEXT
);

-- Enable RLS
ALTER TABLE public.processing_jobs ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view completed jobs (for demo purposes)
CREATE POLICY "Anyone can view completed jobs"
  ON public.processing_jobs
  FOR SELECT
  USING (status = 'completed');

-- Allow anyone to create jobs (for demo purposes)
CREATE POLICY "Anyone can create jobs"
  ON public.processing_jobs
  FOR INSERT
  WITH CHECK (true);

-- Storage policies for input images
CREATE POLICY "Anyone can upload input images"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'input-images');

CREATE POLICY "Anyone can view input images"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'input-images');

-- Storage policies for output models
CREATE POLICY "Anyone can view output models"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'output-models');

CREATE POLICY "System can upload output models"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'output-models');

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_processing_jobs_updated_at
  BEFORE UPDATE ON public.processing_jobs
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();