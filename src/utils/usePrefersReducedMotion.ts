type PrefersReducedMotionHandler = (isReduced: boolean) => void;

const getQuery = () => {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") return null;
  return window.matchMedia("(prefers-reduced-motion: reduce)");
};

export const usePrefersReducedMotion = () => {
  const query = getQuery();
  const isReduced = () => !!query?.matches;

  const subscribe = (handler: PrefersReducedMotionHandler) => {
    if (!query) return () => {};

    const listener = (event: MediaQueryListEvent) => handler(event.matches);
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", listener);
    } else if (typeof query.addListener === "function") {
      query.addListener(listener);
    }

    return () => {
      if (typeof query.removeEventListener === "function") {
        query.removeEventListener("change", listener);
      } else if (typeof query.removeListener === "function") {
        query.removeListener(listener);
      }
    };
  };

  return { isReduced, subscribe };
};
