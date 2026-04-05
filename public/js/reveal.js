(() => {
  const DEFAULTS = {
    stagger: 0.12,
    threshold: 0.18,
    rootMargin: "0px 0px -10% 0px",
  };
  const MOBILE_DEFAULTS = {
    threshold: 0.06,
    rootMargin: "0px 0px 18% 0px",
  };
  const ROOT_CLASS = "reveal-ready";

  const getReducedMotionQuery = () => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return null;
    return window.matchMedia("(prefers-reduced-motion: reduce)");
  };

  const subscribeReducedMotion = (query, handler) => {
    if (!query) return () => {};

    const listener = (event) => handler(event.matches);
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

  const setRevealMode = (enabled) => {
    document.documentElement.classList.toggle(ROOT_CLASS, enabled);
  };

  const showAllElements = (elements) => {
    elements.forEach((el) => {
      el.classList.add("reveal-visible");
      el.style.removeProperty("--reveal-delay");
    });
  };

  const setTimingVars = (el) => {
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
    const groups = Array.from(document.querySelectorAll("[data-reveal-group]"));

    groups.forEach((group) => {
      const staggerValue = Number.parseFloat(group.dataset.revealStagger || `${DEFAULTS.stagger}`);
      const stagger = Number.isFinite(staggerValue) ? staggerValue : DEFAULTS.stagger;
      const inheritVariant = group.dataset.revealVariant;
      const children = Array.from(group.children).filter(
        (child) => child instanceof HTMLElement && child.matches("[data-reveal]")
      );

      children.forEach((child, index) => {
        if (inheritVariant && !child.dataset.revealVariant) {
          child.dataset.revealVariant = inheritVariant;
        }

        if (!child.dataset.revealDelay) {
          const delay = Math.max(0, index * stagger);
          child.style.setProperty("--reveal-delay", `${delay.toFixed(3)}s`);
        }
      });
    });
  };

  const initRevealAnimations = () => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (elements.length === 0) {
      setRevealMode(false);
      return;
    }

    const reducedMotionQuery = getReducedMotionQuery();
    applyGroupConfig();

    if (!("IntersectionObserver" in window)) {
      setRevealMode(false);
      elements.forEach((el) => {
        setTimingVars(el);
        el.classList.add("reveal-visible");
      });
      return;
    }

    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const observerThreshold = isMobile ? MOBILE_DEFAULTS.threshold : DEFAULTS.threshold;
    const observerRootMargin = isMobile ? MOBILE_DEFAULTS.rootMargin : DEFAULTS.rootMargin;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
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
        threshold: observerThreshold,
        rootMargin: observerRootMargin,
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

    if (reducedMotionQuery?.matches) {
      setRevealMode(false);
      showAllElements(elements);
    } else {
      setRevealMode(true);
      startObserving();
    }

    const unsubscribe = subscribeReducedMotion(reducedMotionQuery, (reduce) => {
      if (reduce) {
        observer.disconnect();
        setRevealMode(false);
        showAllElements(elements);
      } else {
        setRevealMode(true);
        startObserving();
      }
    });

    window.addEventListener(
      "pagehide",
      () => {
        observer.disconnect();
        unsubscribe();
        setRevealMode(false);
      },
      { once: true }
    );
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initRevealAnimations, { once: true });
  } else {
    initRevealAnimations();
  }
})();
