"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          theme?: "light" | "dark";
          size?: "normal" | "compact";
        }
      ) => number;
    };
  }
}

export default function RecaptchaWidget() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const renderedRef = useRef(false);

  useEffect(() => {
    let attempts = 0;

    const tryRender = () => {
      if (
        renderedRef.current ||
        !containerRef.current ||
        !window.grecaptcha ||
        !process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      ) {
        return;
      }

      window.grecaptcha.render(containerRef.current, {
        sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
        theme: "light",
        size: "normal"
      });

      renderedRef.current = true;
    };

    const interval = setInterval(() => {
      attempts += 1;
      tryRender();

      if (renderedRef.current || attempts > 50) {
        clearInterval(interval);
      }
    }, 200);

    tryRender();

    return () => clearInterval(interval);
  }, []);

  return <div ref={containerRef} />;
}