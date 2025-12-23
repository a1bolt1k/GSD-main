import { useEffect } from "react";

export function FixImages() {
  useEffect(() => {
    const apply = () => {
      document.querySelectorAll<HTMLImageElement>("img[data-original-url]").forEach((img) => {
        const url = img.dataset.originalUrl;
        if (!url) return;

        if (img.src.startsWith("data:image/svg+xml")) {
          img.src = url;
        }
      });
    };

    apply();

    const obs = new MutationObserver(apply);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => obs.disconnect();
  }, []);

  return null;
}
