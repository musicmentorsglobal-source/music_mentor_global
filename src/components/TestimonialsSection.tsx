import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    text: "The masters take up individual classes for piano, keyboard, drum, guitar violin and theory of music. I am learning since 5 years and have been supported well to take graded exams.",
    name: "Thanik",
    role: "Student",
    heading: "Good teaching",
  },
  {
    text: "It's a nice place to study music.. music master Praveen is so simple and approachable. It's very budget friendly too. You can trust this music school",
    name: "Jude Albert",
    role: "Student",
    heading: "",
  },
  {
    text: "The masters take up individual classes for piano, keyboard, drum, guitar violin and theory of music. I am learning since 5 years and have been supported well to take graded exams.",
    name: "Thanik",
    role: "Student",
    heading: "Good teaching",
  },
  {
    text: "It's a nice place to study music.. music master Praveen is so simple and approachable. It's very budget friendly too. You can trust this music school",
    name: "Jude Albert",
    role: "Student",
    heading: "",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-script text-primary text-2xl">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            What's on our students' minds?
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="bg-background rounded-2xl p-8 shadow-sm relative h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/images/user.svg" alt={t.name} className="w-14 h-14" />
                    <div>
                      <h4 className="font-bold text-foreground">{t.name}</h4>
                      <p className="text-muted-foreground text-sm">{t.role}</p>
                    </div>
                  </div>
                  {t.heading && (
                    <h5 className="font-semibold text-foreground mb-2">{t.heading}</h5>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed">{t.text}</p>
                  <img
                    src="/images/quote.svg"
                    alt=""
                    className="absolute top-6 right-6 w-10 h-10 opacity-20"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedIndex === index ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
