import { motion } from "framer-motion";
import { TechIcon, FloatingIcon, FloatingShape } from "../ui/FloatingElements";
import { ParallaxSection } from "../ui/ParallaxSection";
import { ProjectSlideshow } from "../ui/ProjectSlideshow";
import { HiOutlineExternalLink } from "react-icons/hi";

export default function Projects() {
  const mobileAppTechStacks = [
    [
      "React Native",
      "React",
      "TypeScript",
      "CSS",
      "Expo",
      "Supabase",
      "RevenueCat",
    ],
    ["Swift", "SwiftUI"],
    ["Swift", "SwiftUI", "Firebase", "API"],
  ];

  return (
    <section
      id="projects"
      className="py-32 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      {/* Tech Icons */}
      <TechIcon
        type="svg"
        content="/logos/javascript.svg"
        className="top-20 left-[8%]"
        scale={1.2}
        delay={1}
      />
      <TechIcon
        type="svg"
        content="/logos/react.svg"
        className="top-40 right-[12%]"
        scale={1.3}
        delay={2}
      />
      <TechIcon
        type="svg"
        content="/logos/firebase.svg"
        className="bottom-32 left-[15%]"
        scale={1.1}
        delay={3}
      />
      <TechIcon
        type="svg"
        content="/logos/tailwind.svg"
        className="bottom-60 right-[10%]"
        scale={1.4}
        delay={2.5}
      />
      <TechIcon
        type="emoji"
        content="🐍"
        className="top-96 left-[20%]"
        scale={1.2}
        delay={1.8}
      />
      <TechIcon
        type="svg"
        content="/logos/nodejs.svg"
        className="bottom-96 right-[18%]"
        scale={1.3}
        delay={3.2}
      />

      {/* Decorative Elements */}
      <FloatingIcon className="top-20 right-[25%]" delay={1} />
      <FloatingIcon className="bottom-40 left-[12%]" delay={2} />
      <FloatingIcon className="top-96 right-[15%]" delay={3} />
      <FloatingShape className="bottom-60 left-[22%]" delay={2.5} />
      <FloatingShape className="top-40 right-[8%]" delay={1.5} />
      <FloatingShape className="bottom-32 right-[20%]" delay={3.5} />

      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 className="text-4xl sm:text-5xl font-bold mb-20 text-center">
          <span className="inline-block backdrop-blur-sm bg-white/95 dark:bg-black/95 px-6 py-3 rounded-2xl border border-white/40 dark:border-white/30">
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
              Featured Projects
            </span>
          </span>
        </motion.h2>

        <div className="space-y-32">
          {/* Websites */}
          <ParallaxSection>
            <div className="space-y-12">
              <motion.h3 className="text-4xl font-bold mb-12 text-center">
                <span className="inline-block backdrop-blur-sm bg-white/95 dark:bg-black/95 px-6 py-3 rounded-2xl border border-white/40 dark:border-white/30">
                  <span className="text-gray-900 dark:text-white">
                    Websites
                  </span>
                </span>
              </motion.h3>
              <div className="grid grid-cols-1 gap-12 pb-60 md:pb-48">
                <motion.div
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-white/40 dark:border-white/30"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <ProjectSlideshow
                    images={[
                      {
                        src: "/projects/websites/website-1.png",
                        alt: "Website Screenshot 1",
                      },
                      {
                        src: "/projects/websites/website-2.png",
                        alt: "Website Screenshot 2",
                      },
                      {
                        src: "/projects/websites/website-3.png",
                        alt: "Website Screenshot 3",
                      },
                    ]}
                  />
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      <a
                        href="https://colorlensapp.site"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        ColorLens (colorlensapp.site)
                        <HiOutlineExternalLink className="inline-block text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      ColorLens is a tool created for quickly extracting and
                      refining color palettes from images. It features a
                      versatile color picker that allows users to manually
                      adjust sampling points, re-randomize selections, and
                      fine-tune colors for precision. Palettes can be downloaded
                      as a PNG, JPG, or JSON file, making it ideal for designers
                      and developers. 🎨
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React",
                        "JavaScript",
                        "TailwindCSS",
                        "HTML5 Canvas API",
                        "Chroma.js",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* New Website Card */}
                <motion.div
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-white/40 dark:border-white/30"
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <ProjectSlideshow
                    images={[
                      {
                        src: "/projects/websites/website-4.png",
                        alt: "Website Screenshot 4",
                      },
                      {
                        src: "/projects/websites/website-5.png",
                        alt: "Website Screenshot 5",
                      },
                    ]}
                  />
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      <a
                        href="https://beatbytes.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        BeatByes App Landing Page
                        <HiOutlineExternalLink className="inline-block text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      This is a landing page for BeatBytes! An iOS app that you
                      can find on the Apple App Store now!
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "TailwindCSS",
                        "HTML",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Third Website Card */}
                <motion.div
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-white/40 dark:border-white/30"
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                >
                  <ProjectSlideshow
                    images={[
                      {
                        src: "/projects/websites/website-6.png",
                        alt: "Website Screenshot 6",
                      },
                      {
                        src: "/projects/websites/website-7.png",
                        alt: "Website Screenshot 7",
                      },
                      {
                        src: "/projects/websites/website-8.png",
                        alt: "Website Screenshot 8",
                      },
                      {
                        src: "/projects/websites/website-9.png",
                        alt: "Website Screenshot 9",
                      },
                    ]}
                  />
                  <div className="p-8">
                    <h4 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      <a
                        href="https://kennanproperty.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                      >
                        Kennan Property Management
                        <HiOutlineExternalLink className="inline-block text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      My personal portfolio website showcasing my projects and
                      skills. Built with modern web technologies and featuring a
                      clean, responsive design with smooth animations and dark
                      mode support. The site you&apos;re currently viewing! 🚀
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "TailwindCSS",
                        "Framer Motion",
                        "Vercel",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </ParallaxSection>

          {/* Mobile Apps */}
          <ParallaxSection>
            <div className="space-y-12 mb-36 sm:mb-0">
              <motion.h3 className="text-4xl font-bold mb-12 text-center mt-60 md:mt-0">
                <span className="inline-block backdrop-blur-sm bg-white/95 dark:bg-black/95 px-6 py-3 rounded-2xl border border-white/40 dark:border-white/30">
                  <span className="text-gray-900 dark:text-white">
                    Mobile Apps
                  </span>
                </span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((index) => (
                  <motion.div
                    key={index}
                    className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden border border-white/40 dark:border-white/30"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      bounce: 0.4,
                      delay: index * 0.2,
                    }}
                  >
                    <ProjectSlideshow
                      images={
                        index === 1
                          ? [1, 2, 3, 4].map((screenNum) => ({
                              src: `/projects/mobile-apps/mobile-app-1-${screenNum}.png`,
                              alt: `Mobile App 1 Screenshot ${screenNum}`,
                            }))
                          : index === 2
                          ? [1, 2, 3, 4, 5, 6].map((screenNum) => ({
                              src: `/projects/mobile-apps/mobile-app-2-${screenNum}.png`,
                              alt: `Mobile App 2 Screenshot ${screenNum}`,
                            }))
                          : [1, 2, 3, 4].map((screenNum) => ({
                              src: `/projects/mobile-apps/mobile-app-3-${screenNum}.png`,
                              alt: `Mobile App 3 Screenshot ${screenNum}`,
                            }))
                      }
                      isMobileApp={true}
                    />
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {index === 1
                          ? "BeatBytes"
                          : index === 2
                          ? "ColorLens Mobile App"
                          : "OrthodoxGPT"}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                        {index === 1
                          ? "Music player app built with React Native, integrating Spotify, YouTube, and Musi, allowing users to manage their music all in one place."
                          : index === 2
                          ? "iOS app that helps users capture, analyze, and manage colors through multiple features including a color picker, camera-based color detection, palette creation, and color saving capabilities, all integrated into a sleek dark-themed interface with four main tabs."
                          : "iOS app that serves as an AI-powered Orthodox Christian assistant, allowing users to chat with an AI about Orthodox theology, traditions, and practices while also providing features like a church calendar, fasting guidelines, and user authentication through Firebase."}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {mobileAppTechStacks[index - 1].map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ParallaxSection>
        </div>
      </div>
    </section>
  );
}
