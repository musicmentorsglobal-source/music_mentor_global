import { useEffect, useRef, useState } from "react";

export function useInView<T extends Element>(options?: IntersectionObserverInit, once = true) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const root = options?.root ?? null;
    const rootMargin = options?.rootMargin;
    const threshold = options?.threshold;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.disconnect();
      } else if (!once) {
        setInView(false);
      }
    }, { root, rootMargin, threshold });

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, options?.root, options?.rootMargin, options?.threshold]);

  return { ref, inView };
}
