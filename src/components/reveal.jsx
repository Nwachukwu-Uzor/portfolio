import { useRef, useEffect, useContext } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

import { slideDownVariant } from "../variants";
import ThemeContext from "../context/ThemeContext";

export const Reveal = ({
  children,
  width = "fit-content",
  variants = slideDownVariant,
  ...rest
}) => {
  const ref = useRef();
  const { lightTheme } = useContext(ThemeContext);

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      style={{ width: width, overflow: "hidden", position: "relative" }}
      {...rest}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: {
            left: 0,
          },
          visible: {
            left: "100%",
          },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 4,
          top: 4,
          backgroundColor: "rgba(255, 255, 255, 0.04)",

          backdropFilter: "blur(5px)",
          webkitBackdropFilter: "blur(5px)",
          zIndex: 10,
        }}
      ></motion.div>
    </div>
  );
};
