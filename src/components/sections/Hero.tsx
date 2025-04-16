import { motion } from "framer-motion";
import { TechIcon, FloatingIcon, FloatingShape } from "../ui/FloatingElements";
import Image from "next/image";

export default function Hero() {
  return (
    <motion.section
      className="relative min-h-[65vh] flex flex-col justify-center items-center max-w-7xl mx-auto px-6 pb-8 md:pb-0 md:items-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Effects - Enhanced */}
      <div className="absolute inset-0 -z-10 w-screen left-1/2 -translate-x-1/2">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 to-violet-50/60 dark:from-blue-950/40 dark:to-violet-950/40" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]" />
      </div>

      {/* Tech Icons - Reduced number and improved positioning */}
      <TechIcon
        type="svg"
        content="/logos/react.svg"
        className="top-20 left-[10%]"
        scale={1.1}
        delay={0.5}
      />
      <TechIcon
        type="svg"
        content="/logos/javascript.svg"
        className="top-40 right-[15%]"
        scale={1.2}
        delay={1.2}
      />
      <TechIcon
        type="svg"
        content="/logos/tailwind.svg"
        className="bottom-40 right-[18%] hidden md:block"
        scale={1.3}
        delay={1.5}
      />
      <TechIcon
        type="svg"
        content="/logos/nodejs.svg"
        className="bottom-60 left-[15%]"
        scale={1.1}
        delay={2}
      />

      {/* Decorative Elements - Reduced number */}
      <FloatingIcon className="top-20 left-[8%]" />
      <FloatingIcon className="bottom-40 right-[15%]" delay={2} />
      <FloatingShape className="top-32 right-[25%]" delay={1.5} />

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full">
        {/* Text Content */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-5 flex flex-col sm:flex-row items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block backdrop-blur-sm bg-white/[0.97] dark:bg-black/[0.97] px-4 py-3 rounded-2xl border border-white/50 dark:border-white/40 shadow-sm">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 text-transparent bg-clip-text">
                Hi, I&apos;m Yonatan Belihu
              </span>
            </span>
            <motion.span
              className="hidden sm:inline-block origin-bottom text-4xl sm:text-5xl"
              animate={{ rotate: [0, 20, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              👋
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-xl sm:text-3xl mb-5 sm:mb-7"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="inline-block backdrop-blur-sm bg-white/[0.97] dark:bg-black/[0.97] px-4 py-3 rounded-2xl border border-white/50 dark:border-white/40 shadow-sm">
              <span className="text-gray-600 dark:text-gray-300">
                A Full Stack Developer who loves bringing ideas to life, one
                project at a time!
              </span>
            </span>
          </motion.p>

          {/* Profile Picture (Mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden backdrop-blur-sm bg-white/[0.97] dark:bg-black/[0.97] border-2 border-white/50 dark:border-white/40 shadow-md mb-4 sm:mb-6 md:hidden -mt-2 sm:-mt-4"
          >
            <Image
              src="/profile-placeholder.png"
              alt="Profile Picture"
              fill
              className="object-cover scale-150 translate-x-7 -translate-y-10"
              priority
              onError={(e) => {
                console.error("Error loading profile image:", e);
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center w-full"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  const headerOffset = 80;
                  const elementPosition =
                    projectsSection.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - headerOffset;

                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                  });
                }
              }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-7 sm:px-10 py-4 sm:py-5 rounded-xl font-medium hover:opacity-90 transition-opacity text-lg sm:text-xl group shadow-sm"
            >
              View My Work
              <svg
                className="w-4 h-4 transform group-hover:translate-y-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Profile Picture (Desktop) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative w-72 h-72 rounded-full overflow-hidden backdrop-blur-sm bg-white/[0.97] dark:bg-black/[0.97] border-2 border-white/50 dark:border-white/40 shadow-md hidden md:block -mt-8"
        >
          <Image
            src="/profile-placeholder.png"
            alt="Profile Picture"
            fill
            className="object-cover scale-150 translate-x-7 -translate-y-10"
            priority
            onError={(e) => {
              console.error("Error loading profile image:", e);
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
