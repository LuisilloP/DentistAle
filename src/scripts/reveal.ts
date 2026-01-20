import { usePrefersReducedMotion } from "../utils/usePrefersReducedMotion";

type RevealElement = HTMLElement & {
  dataset: DOMStringMap & {
    revealOnce?: string;
    revealToggle?: string;
    revealDelay?: string;
    revealDuration?: string;
    revealEase?: string;
    revealVariant?: string;
  };
};

const DEFAULTS = {
  stagger: 0.12,
  threshold: 0.2,
  rootMargin: "0px 0px -12% 0px",
};

const setTimingVars = (el: RevealElement) => {
  const delay = el.dataset.revealDelay;
  const duration = el.dataset.revealDuration;
  const ease = el.dataset.revealEase;

  if (delay) {
    const value = Number.parseFloat(delay);
    if (Number.isFinite(value)) {
      el.style.setProperty("--reveal-delay", `${value}s`);
    }
  }

  if (duration) {
    const value = Number.parseFloat(duration);
    if (Number.isFinite(value)) {
      el.style.setProperty("--reveal-duration", `${value}s`);
    }
  }

  if (ease) {
    el.style.setProperty("--reveal-ease", ease);
  }
};

const applyGroupConfig = () => {
  const groups = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal-group]"));

  groups.forEach((group) => {
    const stagger = Number.parseFloat(group.dataset.revealStagger || `${DEFAULTS.stagger}`);
    const inheritVariant = group.dataset.revealVariant;
    const children = Array.from(group.querySelectorAll<RevealElement>("[data-reveal]"));

    children.forEach((child, index) => {
      if (inheritVariant && !child.dataset.revealVariant) {
        child.dataset.revealVariant = inheritVariant;
      }

      if (!child.dataset.revealDelay) {
        const delay = Math.max(0, index * (Number.isFinite(stagger) ? stagger : DEFAULTS.stagger));
        child.style.setProperty("--reveal-delay", `${delay.toFixed(3)}s`);
      }
    });
  });
};

export const initRevealAnimations = () => {
  if (typeof window === "undefined") return () => {};

  const elements = Array.from(document.querySelectorAll<RevealElement>("[data-reveal]"));
  if (elements.length === 0) return () => {};

  const { isReduced, subscribe } = usePrefersReducedMotion();
  applyGroupConfig();

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => {
      setTimingVars(el);
      el.classList.add("reveal-visible");
    });
    return () => {};
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as RevealElement;
        const once = el.dataset.revealOnce !== "false";
        const toggle = el.dataset.revealToggle === "true";

        if (entry.isIntersecting) {
          setTimingVars(el);
          el.classList.add("reveal-visible");
          if (once) observer.unobserve(el);
        } else if (toggle) {
          el.classList.remove("reveal-visible");
        }
      });
    },
    {
      threshold: DEFAULTS.threshold,
      rootMargin: DEFAULTS.rootMargin,
    }
  );

  const startObserving = () => {
    applyGroupConfig();
    elements.forEach((el) => {
      if (!el.classList.contains("reveal-visible")) {
        setTimingVars(el);
        observer.observe(el);
      }
    });
  };

  if (isReduced()) {
    elements.forEach((el) => {
      el.classList.add("reveal-visible");
      el.style.removeProperty("--reveal-delay");
    });
  } else {
    startObserving();
  }

  const unsubscribe = subscribe((reduce) => {
    if (reduce) {
      observer.disconnect();
      elements.forEach((el) => {
        el.classList.add("reveal-visible");
        el.style.removeProperty("--reveal-delay");
      });
    } else {
      startObserving();
    }
  });

  return () => {
    observer.disconnect();
    unsubscribe();
  };
};

if (typeof window !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initRevealAnimations(), { once: true });
  } else {
    initRevealAnimations();
  }
}
