import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    subtitle: "Let The Music Move You",
    title: "Education In Harmony With",
    highlight: "Music",
    description:
      "Join Music Mentors Global And Unlock Your Musical Potential With Expert Guidance, Personalized Lessons, And A Supportive Learning Environment. Let Your Musical Journey Begin Today!",
  },
  {
    subtitle: "The Mentor Studio",
    title: "Master the Art of Music With",
    highlight: "Us",
    description:
      "Music Mentors Global offers expert guidance, personalized lessons, and a welcoming space to help you unlock your musical abilities. Start your musical journey with us today!",
  },
  {
    subtitle: "The Path to Performance",
    title: "Building Artists, One Note at a",
    highlight: "Time",
    description:
      "At Music Mentors Global, we help you master your instrument with expert lessons, personalized attention, and a supportive atmosphere. Begin your musical adventure today!",
  },
];

const heroImages = [
  "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=1920&q=80",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1920&q=80",
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1920&q=80",
];

const HeroSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="hero" className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-0 flex-[0_0_100%] min-h-[600px] md:min-h-[700px] lg:min-h-[800px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImages[index]})` }}>
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/30" />
              </div>

              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 h-full flex items-center min-h-[600px] md:min-h-[700px] lg:min-h-[800px]">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="music-gradient font-script text-2xl md:text-3xl italic">{slide.subtitle}</span>
                    <span className="w-16 h-[2px] bg-primary-foreground/50 inline-block" />
                  </div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
                    {slide.title} <span className="music-gradient">{slide.highlight}</span>
                  </h1>
                  <p className="text-primary-foreground/80 text-base md:text-lg mb-8 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-8 flex flex-col gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-4 h-4 rounded-sm border-2 transition-all ${
              selectedIndex === index ? "bg-primary border-primary" : "bg-transparent border-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
