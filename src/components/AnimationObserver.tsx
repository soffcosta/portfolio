import { useEffect } from "react";

const AnimationObserver = () => {
  useEffect(() => {
    // Intersection Observer for section animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all sections
    document.querySelectorAll(".section").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Clean up observer
      document.querySelectorAll(".section").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationObserver;
