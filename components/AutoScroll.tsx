import React, { PropsWithChildren, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AutoScroll = ({ children }: PropsWithChildren) => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const startScrolling = async () => {
      while (true) {
        await controls.start({
          x: ["0%", "-100%"],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 100,
              ease: "linear",
            },
          },
        });
      }
    };

    startScrolling();
  }, [controls]);

  return (
    <div
      className=""
      ref={containerRef}
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      <motion.div
        style={{
          display: "inline-block",
          position: "absolute",
          whiteSpace: "nowrap",
        }}
        animate={controls}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AutoScroll;
