import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import MusicCornerDecor from "@/components/MusicCornerDecor";

const courses = [
  { name: "PIANO", image: "/images/piano.png" },
  { name: "KEYBOARD", image: "/images/keyboard.png" },
  { name: "PLECTRUM GUITAR", image: "/images/guitar.png" },
  { name: "CLASSIC GUITAR", image: "/images/classic-guitar.png" },
  { name: "VIOLIN", image: "/images/violin.png" },
  { name: "DRUMS", image: "/images/drums.png" },
  { name: "THEORY OF MUSIC", image: "/images/music-theory.png" },
];

const CoursesSection = () => {
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
    <section id="courses" className="relative overflow-hidden py-16 md:py-24 bg-[#f3f1ee]">
      <MusicCornerDecor />
      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="w-10 h-[2px] bg-primary" />
            <span className="font-script text-primary text-xl">
              Master Your Instrument at Tune In School Of Music
            </span>
            <span className="w-10 h-[2px] bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#54456f]">
            Instrument Teaching Courses
          </h2>
        </div>

        {/* Swipe Carousel - No Arrows / No Dots / Manual Only */}
        <div className="max-w-6xl mx-auto overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
          <div className="flex -ml-6">
            {courses.map((course, index) => {
              const total = courses.length;
              let delta = index - selectedIndex;
              if (delta > total / 2) delta -= total;
              if (delta < -total / 2) delta += total;
              const distance = Math.abs(delta);
              const isActive = distance === 0;
              const isAdjacent = distance === 1;
              const isLeft = isAdjacent && delta < 0;
              const isRight = isAdjacent && delta > 0;

              return (
                <div
                  key={course.name}
                  className="min-w-0 flex-[0_0_90%] sm:flex-[0_0_72%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6"
                >
                  <article className="relative text-center">
                    <img
                      src={course.image}
                      alt={course.name}
                      className={`w-full h-[380px] md:h-[430px] lg:h-[500px] rounded-[28px] object-cover transition-all duration-500 ${
                        isActive
                          ? "opacity-100 blur-0 scale-100 shadow-[0_16px_34px_rgba(84,69,111,0.22)]"
                          : isLeft
                          ? "opacity-58 blur-[14px] brightness-90 saturate-75 shadow-[0_8px_20px_rgba(84,69,111,0.10)] [transform:perspective(1000px)_rotateY(12deg)_scale(0.86)]"
                          : isRight
                          ? "opacity-58 blur-[14px] brightness-90 saturate-75 shadow-[0_8px_20px_rgba(84,69,111,0.10)] [transform:perspective(1000px)_rotateY(-12deg)_scale(0.86)]"
                          : "opacity-0 scale-[0.9] blur-[10px] pointer-events-none"
                      }`}
                      draggable={false}
                    />
                    <h3
                      className={`text-center text-[#54456f] font-bold text-sm md:text-base mt-4 uppercase tracking-wide transition-opacity duration-500 ${
                        isActive ? "opacity-100" : isAdjacent ? "opacity-80" : "opacity-0"
                      }`}
                    >
                      {course.name}
                    </h3>
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

export default CoursesSection;
