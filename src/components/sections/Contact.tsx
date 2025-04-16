import { motion } from "framer-motion";
import { TechIcon, FloatingIcon, FloatingShape } from "../ui/FloatingElements";
import { ParallaxSection } from "../ui/ParallaxSection";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-10 sm:py-16 bg-white dark:bg-black relative min-h-[50vh] sm:min-h-[60vh] flex items-center"
    >
      {/* Tech Icons */}
      <TechIcon
        type="svg"
        content="/logos/tailwind.svg"
        className="top-20 left-[20%]"
        scale={1.2}
        delay={1}
      />
      <TechIcon
        type="svg"
        content="/logos/nodejs.svg"
        className="bottom-40 right-[15%]"
        scale={1.3}
        delay={2}
      />
      <TechIcon
        type="svg"
        content="/logos/react.svg"
        className="top-60 left-[12%]"
        scale={1.1}
        delay={1.5}
      />
      <TechIcon
        type="svg"
        content="/logos/javascript.svg"
        className="bottom-60 right-[22%]"
        scale={1.4}
        delay={2.5}
      />
      <TechIcon
        type="emoji"
        content="🐍"
        className="top-80 left-[25%]"
        scale={1.2}
        delay={1.8}
      />
      <TechIcon
        type="svg"
        content="/logos/firebase.svg"
        className="bottom-80 right-[18%]"
        scale={1.3}
        delay={2.8}
      />

      {/* Decorative Elements */}
      <FloatingIcon className="top-20 right-[25%]" delay={1} />
      <FloatingIcon className="bottom-20 left-[18%]" delay={2} />
      <FloatingIcon className="top-60 right-[12%]" delay={1.5} />
      <FloatingIcon className="bottom-60 left-[28%]" delay={2.5} />
      <FloatingShape className="top-40 left-[20%]" delay={1.2} />
      <FloatingShape className="bottom-40 right-[15%]" delay={2.2} />

      <div className="max-w-5xl mx-auto px-6 w-full">
        <ParallaxSection>
          <motion.h2 className="text-3xl sm:text-6xl font-bold mb-8 sm:mb-16 text-center">
            <span className="inline-block backdrop-blur-sm bg-white/95 dark:bg-black/95 px-8 py-4 rounded-2xl border border-white/40 dark:border-white/30">
              <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
                Get In Touch
              </span>
            </span>
          </motion.h2>
          <motion.div className="max-w-3xl mx-auto text-center">
            <div className="backdrop-blur-xl bg-white/[0.99] dark:bg-black/[0.99] px-6 sm:px-10 py-6 sm:py-8 rounded-2xl border border-white/40 dark:border-white/30 mb-6 sm:mb-8 shadow-xl">
              <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200">
                Thanks for making it to the bottom! I really appreciate you
                taking the time to check out my work. If you&apos;re interested
                in connecting, my socials are below. Feel free to reach out!
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pb-8 sm:pb-0">
              <motion.a
                href="mailto:belihuyonatan@gmail.com"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-lg group w-full sm:w-auto justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/yonatan-belihu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-lg group w-full sm:w-auto justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </motion.a>
              <motion.a
                href="https://github.com/yonnytan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white px-8 py-4 rounded-xl font-medium hover:opacity-90 transition-opacity text-lg group w-full sm:w-auto justify-center shadow-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.a>
            </div>
          </motion.div>
        </ParallaxSection>
      </div>
    </section>
  );
}
