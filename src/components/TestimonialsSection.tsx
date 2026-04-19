import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { User } from "lucide-react";
import MusicCornerDecor from "@/components/MusicCornerDecor";

const testimonials = [
  {
    text: "I definitely recommend Gokul as a piano teacher. His understanding of my learning capability really stood out. The classes were designed specifically for me, which made the entire process comfortable and effective. Even as an adult learner, I felt confident and motivated in every session.",
    name: "Mrs. Amutha Pal",
    role: "Piano Student",
    heading: "",
  },
  {
    text: "I successfully completed my Trinity Grade exam with distinction under Gokul's guidance. Everything was taught online, but the method was so simple and structured that learning never felt difficult. He breaks down concepts in a very practical way, which really helped me improve quickly.",
    name: "Prahan",
    role: "Acoustic Guitar Student",
    heading: "",
  },
  {
    text: "Gokul makes learning piano very easy to follow, even for beginners. His teaching style is clear and patient, and he focuses on building strong fundamentals. Within a few months, I was able to play confidently and understand music better than I expected.",
    name: "Rithika S",
    role: "Piano Student",
    heading: "Beginner to Intermediate",
  },
  {
    text: "Classes were very easy to follow and well structured. I could see clear improvement within a few weeks, which kept me motivated.",
    name: "Kavya R",
    role: "Piano Student",
    heading: "",
  },
  {
    text: "Learning online was surprisingly smooth. The teaching method is simple and practical, and I was able to play songs much faster than I expected.",
    name: "Arjun K",
    role: "Acoustic Guitar Student",
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
    <section className="app-surface relative overflow-hidden py-16 md:py-24">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="brand-gradient-text font-script text-2xl" data-aos="fade-up">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#54456f] mt-3" data-aos="fade-up" data-aos-delay="120">
            What's on our students' minds?
          </h2>
        </div>

        <div className="overflow-hidden px-1" ref={emblaRef} data-aos="fade-up">
          <div className="flex -ml-6">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6"
                data-aos="fade-down"
                data-aos-delay={index * 100}
              >
                <div className="gradient-outline-card relative h-full overflow-hidden rounded-2xl p-8">
                  <div className="pointer-events-none absolute inset-[1px] rounded-2xl border border-white/60" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="gradient-avatar-ring">
                      <span>
                        <User className="h-7 w-7" strokeWidth={2.2} />
                      </span>
                    </div>
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
              className={`gradient-carousel-dot h-3 rounded-full transition-all ${
                selectedIndex === index ? "is-active w-8" : "w-3"
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
