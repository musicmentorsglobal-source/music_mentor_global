import { useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AOS from "aos";
import "aos/dist/aos.css";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const waitForImages = () => {
      const images = Array.from(document.images || []);
      if (images.length === 0) {
        return Promise.resolve();
      }

      return Promise.all(
        images.map((img) => {
          if (img.complete && img.naturalWidth > 0) {
            return Promise.resolve();
          }
          return new Promise<void>((resolve) => {
            const onDone = () => {
              img.removeEventListener("load", onDone);
              img.removeEventListener("error", onDone);
              resolve();
            };
            img.addEventListener("load", onDone, { once: true });
            img.addEventListener("error", onDone, { once: true });
          });
        })
      ).then(() => undefined);
    };

    const handleReady = async () => {
      await waitForImages();
      if (isActive) {
        setIsLoading(false);
      }
    };

    if (document.readyState === "complete") {
      void handleReady();
    } else {
      window.addEventListener("load", handleReady, { once: true });
    }

    const safetyTimeout = window.setTimeout(() => {
      if (isActive) {
        setIsLoading(false);
      }
    }, 8000);

    return () => {
      isActive = false;
      window.removeEventListener("load", handleReady);
      window.clearTimeout(safetyTimeout);
    };
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: false,
      mirror: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refreshHard();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {isLoading && (
        <div className="app-loader" role="status" aria-live="polite">
          <div className="app-loader__inner">
            <div className="app-loader__logo brand-wordmark brand-wordmark--center">
              <span className="brand-wordmark__title music-gradient">Music Mentors Global</span>
            </div>
            <div className="app-loader__pads" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      )}
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
