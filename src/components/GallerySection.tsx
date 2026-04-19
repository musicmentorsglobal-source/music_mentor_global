import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MusicCornerDecor from "@/components/MusicCornerDecor";

const images = Array.from({ length: 8 }, (_, i) => `/images/gallery-${i + 1}.png`);

const GallerySection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    dragFree: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="gallery" className="app-surface relative overflow-hidden py-16 md:py-24">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <span className="brand-gradient-text font-script text-2xl">Gallery</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#54456f] mt-3">
            Our Music School Gallery
          </h2>
        </div>

        <div className="max-w-6xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
          <div className="flex -ml-6">
            {images.map((src, index) => {
              const total = images.length;
              let delta = index - selectedIndex;
              if (delta > total / 2) delta -= total;
              if (delta < -total / 2) delta += total;

              const distance = Math.abs(delta);
              const isActive = distance === 0;
              const isLeft = distance === 1 && delta < 0;
              const isRight = distance === 1 && delta > 0;

              return (
                <div
                  key={src}
                  className="min-w-0 flex-[0_0_90%] sm:flex-[0_0_72%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                >
                  <article className="relative text-center">
                    <img
                      src={src}
                      alt={`Gallery image ${index + 1}`}
                      className={`w-full h-[380px] md:h-[430px] lg:h-[500px] rounded-[28px] object-cover transition-all duration-500 ${
                        isActive
                          ? "opacity-100 blur-0 scale-100 shadow-[0_16px_34px_rgba(84,69,111,0.22)]"
                          : isLeft
                          ? "opacity-58 blur-[14px] brightness-90 saturate-75 shadow-[0_8px_20px_rgba(84,69,111,0.10)] [transform:perspective(1000px)_rotateY(12deg)_scale(0.86)]"
                          : isRight
                          ? "opacity-58 blur-[14px] brightness-90 saturate-75 shadow-[0_8px_20px_rgba(84,69,111,0.10)] [transform:perspective(1000px)_rotateY(-12deg)_scale(0.86)]"
                          : "opacity-0 scale-[0.9] blur-[10px] pointer-events-none"
                      }`}
                      loading="lazy"
                      draggable={false}
                    />
                  </article>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
