import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  direction?: "vertical" | "horizontal";
}

export function ParallaxSection({
  children,
  direction = "vertical",
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  return (
    <motion.div
      ref={ref}
      style={direction === "vertical" ? { y } : { x }}
      className="relative"
    >
      {children}
    </motion.div>
  );
}
