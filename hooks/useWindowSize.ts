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
export enum ESizeScreen {
  XXL = "XXL",
  XL = "XL",
  LG = "LG",
  MD = "MD",
  SM = "SM",
  XS = "XS",
}
export function useScreenSize() {
  const { width } = useWindowSize();
  const handleSize = (width: number) => {
    if (width >= 1536) return ESizeScreen.XXL;
    else if (width >= 1280) return ESizeScreen.XL;
    else if (width >= 1024) return ESizeScreen.LG;
    else if (width >= 768) return ESizeScreen.MD;
    else if (width >= 640) return ESizeScreen.SM;
    return ESizeScreen.XS;
  };
  return { size: handleSize(width) };
}
