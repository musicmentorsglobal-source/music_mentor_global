import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import MusicCornerDecor from "@/components/MusicCornerDecor";

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
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#f3f1ee]">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-script text-primary text-2xl">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#54456f] mt-3">
            What's on our students' minds?
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="relative h-full overflow-hidden rounded-2xl border border-[#e5dfda] bg-white/90 p-8 shadow-[0_12px_28px_rgba(84,69,111,0.10)]">
                  <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-white/60" />
                  <div className="flex items-center gap-4 mb-4">
                    <img src="/images/user.svg" alt={t.name} className="w-14 h-14" />
                    <div>
                      <h4 className="font-bold text-[#54456f]">{t.name}</h4>
                      <p className="text-[#6b5f7d] text-sm">{t.role}</p>
                    </div>
                  </div>
                  {t.heading && (
                    <h5 className="font-semibold text-[#54456f] mb-2">{t.heading}</h5>
                  )}
                  <p className="text-[#6b5f7d] text-sm leading-relaxed">{t.text}</p>
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
