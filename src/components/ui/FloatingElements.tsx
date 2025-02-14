import { motion } from "framer-motion";
import Image from "next/image";

interface FloatingProps {
  className: string;
  delay?: number;
}

interface TechIconProps extends FloatingProps {
  type: "emoji" | "svg";
  content: string;
  scale?: number;
}

export function TechIcon({
  type,
  content,
  className,
  delay = 0,
  scale = 1,
}: TechIconProps) {
  const floatingAnimation =
    type === "emoji"
      ? "animate-float hover:animate-spin"
      : "animate-float hover:scale-110 transition-transform";

  return (
    <div
      className={`absolute ${floatingAnimation} ${className}`}
      style={{
        transform: `scale(${scale})`,
        animation: `float 6s ease-in-out infinite ${delay}s`,
      }}
    >
      {type === "emoji" ? (
        <span className="text-4xl">{content}</span>
      ) : (
        <Image
          src={content}
          alt="Tech Logo"
          width={48}
          height={48}
          className="w-12 h-12"
        />
      )}
    </div>
  );
}

export function FloatingIcon({ className, delay = 0 }: FloatingProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none opacity-20 dark:opacity-[0.15] ${className}`}
      animate={{
        y: ["0%", "-50%", "0%"],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
    >
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl" />
    </motion.div>
  );
}

export function FloatingShape({ className, delay = 0 }: FloatingProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none opacity-10 dark:opacity-[0.07] ${className}`}
      animate={{
        y: ["0%", "-30%", "0%"],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 15,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
    >
      <div className="w-24 h-24 border-2 border-blue-500/50 rounded-full" />
    </motion.div>
  );
}

export function FloatingLogo({
  src,
  className,
  delay = 0,
}: { src: string } & FloatingProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none w-8 h-8 ${className}`}
      animate={{
        y: ["0%", "-20%", "0%"],
        rotate: [-5, 5, -5],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 10,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      <Image
        src={src}
        alt="Tech Logo"
        width={32}
        height={32}
        className="opacity-60 dark:opacity-40"
      />
    </motion.div>
  );
}
