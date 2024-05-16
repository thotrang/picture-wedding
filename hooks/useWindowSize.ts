import { useEffect, useState } from "react";

function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  return { width: 0, height: 0 };
}

export function useWindowSize() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

export function useScreenSize() {
  const [size, setSize] = useState("2xl");

  useEffect(() => {
    function handleResize() {
      const { width } = getWindowDimensions();
      setSize(() => {
        if (width >= 1536) return "2xl";
        else if (width >= 1280) return "xl";
        else if (width >= 1024) return "lg";
        else if (width >= 768) return "md";
        else if (width >= 640) return "sm";
        return "xs";
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { size };
}
