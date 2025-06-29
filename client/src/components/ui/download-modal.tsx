import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Download, FileText, CheckCircle, X } from "lucide-react";

interface DownloadForm {
  name: string;
  email: string;
  company: string;
  phone?: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  downloadUrl: string;
  fileName: string;
}

export function DownloadModal({ isOpen, onClose, title, description, downloadUrl, fileName }: DownloadModalProps) {
  const [isDownloaded, setIsDownloaded] = useState(false);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<DownloadForm>();

  const downloadMutation = useMutation({
    mutationFn: async (data: DownloadForm) => {
      return apiRequest("/api/downloads", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          resource: fileName,
          downloadUrl
        }),
      });
    },
    onSuccess: () => {
      setIsDownloaded(true);
      // Trigger actual download
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Reset form and close modal after delay
      setTimeout(() => {
        reset();
        setIsDownloaded(false);
        onClose();
      }, 2000);
    },
  });

  const onSubmit = (data: DownloadForm) => {
    downloadMutation.mutate(data);
  };

  const handleClose = () => {
    reset();
    setIsDownloaded(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Download Resource
            </DialogTitle>
            <Button variant="ghost" size="sm" onClick={handleClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>

        {!isDownloaded ? (
          <div className="space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="your.email@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name *
                </label>
                <input
                  type="text"
                  {...register("company", { required: "Company name is required" })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Your company name"
                />
                {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 text-sm"
                  placeholder="Your phone number"
                />
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-xs text-gray-600">
                  By downloading this resource, you agree to receive occasional updates about MXO2 
                  products and services. You can unsubscribe at any time.
                </p>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2"
                disabled={downloadMutation.isPending}
              >
                {downloadMutation.isPending ? (
                  "Preparing Download..."
                ) : (
                  <>
                    <Download className="w-4 h-4 mr-2" />
                    Download Now
                  </>
                )}
              </Button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Download Started!</h3>
            <p className="text-sm text-gray-600 mb-4">
              Your download should begin automatically. If it doesn't start, please check your downloads folder.
            </p>
            <p className="text-xs text-gray-500">
              This window will close automatically...
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}