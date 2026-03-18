import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 17, suffix: "+", label: "Years of Experience" },
  { value: 425, suffix: "+", label: "Students Certified" },
  { value: 85, suffix: "+", label: "Successful Performances" },
  { value: 7, suffix: "+", label: "Musical Instruments" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary-foreground">
      {count}{suffix}
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-primary-foreground/80 mt-2 text-sm md:text-base font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
