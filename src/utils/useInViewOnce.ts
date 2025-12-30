type InViewOptions = {
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export const createInViewOnce = (options: InViewOptions = {}) => {
  const { rootMargin = "300px 0px", threshold = 0, once = true } = options;
  const callbacks = new Map<Element, () => void>();

  const observer =
    "IntersectionObserver" in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;

              const cb = callbacks.get(entry.target);
              if (cb) {
                cb();
              }

              if (once) {
                callbacks.delete(entry.target);
                observer.unobserve(entry.target);
              }
            });
          },
          { rootMargin, threshold }
        )
      : null;

  const observe = (el: Element | null, callback: () => void) => {
    if (!el || typeof callback !== "function") return;
    callbacks.set(el, callback);

    if (observer) {
      observer.observe(el);
    } else {
      callback();
    }
  };

  const disconnect = () => {
    observer?.disconnect();
    callbacks.clear();
  };

  return { observe, disconnect };
};
