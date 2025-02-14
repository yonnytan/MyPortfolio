import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface SlideshowImage {
  src: string;
  alt: string;
}

interface ProjectSlideshowProps {
  images: SlideshowImage[];
  isMobileApp?: boolean;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function ProjectSlideshow({
  images,
  isMobileApp = false,
}: ProjectSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) => (prevIndex + newDirection + images.length) % images.length
    );
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-700">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          Add project screenshots/GIFs (1200x800)
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] bg-gray-100 dark:bg-gray-700 overflow-hidden cursor-pointer group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0 flex items-center justify-center"
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onClick={() => paginate(1)}
        >
          <div
            className={`relative ${
              isMobileApp ? "w-[280px]" : "w-full px-8"
            } h-full`}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className={`object-contain ${isMobileApp ? "scale-100" : ""}`}
              sizes={isMobileApp ? "280px" : "(max-width: 768px) 100vw, 1200px"}
              priority={currentIndex === 0}
              onError={(e) => {
                console.error(
                  `Error loading image: ${images[currentIndex].src}`
                );
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => {
              e.stopPropagation();
              const newDirection = index > currentIndex ? 1 : -1;
              setDirection(newDirection);
              setCurrentIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>

      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-all opacity-60 sm:opacity-0 sm:group-hover:opacity-100 z-10"
        onClick={(e) => {
          e.stopPropagation();
          paginate(-1);
        }}
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/20 hover:bg-black/40 flex items-center justify-center text-white transition-all opacity-60 sm:opacity-0 sm:group-hover:opacity-100 z-10"
        onClick={(e) => {
          e.stopPropagation();
          paginate(1);
        }}
      >
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
}
