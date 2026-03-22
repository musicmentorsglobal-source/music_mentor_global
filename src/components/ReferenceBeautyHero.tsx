import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import "./ReferenceBeautyHero.css";

const slides = [
  {
    subtitle: "Let The Music Move You",
    title: "Education In Harmony With",
    highlight: "Music",
    description:
      "Join Tune In School Of Music And Unlock Your Musical Potential With Expert Guidance, Personalized Lessons, And A Supportive Learning Environment. Let Your Musical Journey Begin Today!",
    image: "/img/img1.png",
  },
  {
    subtitle: "Best Ballet Studio",
    title: "Master the Art of Music With",
    highlight: "Us",
    description:
      "Tune In School of Music offers expert guidance, personalized lessons, and a welcoming space to help you unlock your musical abilities. Start your musical journey with us today!",
    image: "/img/img11.png",
  },
  {
    subtitle: "Grand Ceremony",
    title: "Teaching Tunes, Creating",
    highlight: "Stars",
    description:
      "At Tune In School of Music, we help you master your instrument with expert lessons, personalized attention, and a supportive atmosphere. Begin your musical adventure today!",
    image: "/img/img6.png",
  },
];

const ReferenceBeautyHero = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="hero">
      <div className="hero-viewport" ref={emblaRef}>
        <div className="hero-track">
          {slides.map((slide, index) => (
            <article key={index} className="hero-slide">
              <div className="hero-left">
                <img src={slide.image} alt="musician" />
              </div>

              <div className="hero-right">
                <div className="hero-subtitle-row">
                  <span className="font-script hero-subtitle">{slide.subtitle}</span>
                  <span className="hero-subtitle-line" />
                </div>

                <h1>
                  {slide.title} <span className="hero-highlight">{slide.highlight}</span>
                </h1>

                <p>{slide.description}</p>

                <button className="cta-btn" type="button">
                  Read More
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => emblaApi?.scrollTo(index)}
            className={`hero-dot ${index === selectedIndex ? "is-active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ReferenceBeautyHero;
