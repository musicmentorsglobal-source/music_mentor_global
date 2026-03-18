import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const blogs = [
  {
    image: "/images/blog-1.png",
    date: "Oct 30, 2024",
    category: "Classic Music",
    title: "10 Tips For Taking Online Classic Music Classes",
  },
  {
    image: "/images/blog-2.png",
    date: "February 28, 2024",
    category: "Rock Music",
    title: "The Biggest Online Classic Music Classes To Humanity.",
  },
  {
    image: "/images/blog-3.png",
    date: "July 25, 2024",
    category: "Folk Music",
    title: "10 Things To Avoid In Online Classic Dance Classes",
  },
  {
    image: "/images/blog-4.png",
    date: "April 30, 2024",
    category: "Modern Music",
    title: "Make Before Using Online Classic Dance Classes",
  },
];

const BlogSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
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
    <section id="blog" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="font-script text-primary text-2xl">Blog & News</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3">
            Our Latest News & Articles
          </h2>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {blogs.map((blog, index) => (
              <div key={index} className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-6">
                <div className="bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-sm">
                      <span className="text-muted-foreground">{blog.date}</span>
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                    <h3 className="text-foreground font-bold text-lg mb-4 leading-snug">
                      {blog.title}
                    </h3>
                    <a
                      href="#"
                      className="text-primary font-semibold text-sm uppercase tracking-wide hover:underline"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                selectedIndex === index ? "bg-primary w-8" : "bg-primary/30"
              }`}
              aria-label={`Go to blog ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
