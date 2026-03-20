import { Button } from "@/components/ui/button";

const images = Array.from({ length: 8 }, (_, i) => `/images/gallery-${i + 1}.png`);

const GallerySection = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-script text-primary text-2xl">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Music School Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-2xl group">
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-primary text-primary-foreground rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wider hover:bg-primary/90">
            See All Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
