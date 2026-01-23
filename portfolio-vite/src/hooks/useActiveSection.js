import { useEffect, useState } from "react";

export function useActiveSection(sectionIds, rootMargin = "-50% 0px -50% 0px") {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const handleClick = (id) => setActive(id);
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin, threshold: 0.1 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    sectionIds.forEach((id) => {
      const link = document.querySelector(`[data-nav="${id}"]`);
      if (link) link.addEventListener("click", () => handleClick(id));
    });
    return () => {
      observer.disconnect();
      sectionIds.forEach((id) => {
        const link = document.querySelector(`[data-nav="${id}"]`);
        if (link) link.removeEventListener("click", () => handleClick(id));
      });
    };
  }, [sectionIds, rootMargin]);

  return active;
}
