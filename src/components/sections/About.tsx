import { motion, AnimatePresence } from "framer-motion";
import { TechIcon, FloatingIcon, FloatingShape } from "../ui/FloatingElements";
import { useState } from "react";
import {
  SiPython,
  SiOpenjdk as SiJava,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSwift,
  SiTypescript,
  SiR,
  SiC,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiGithub,
  SiFirebase,
  SiPostman,
  SiDocker,
  SiVuedotjs,
} from "react-icons/si";
import { IoLanguage } from "react-icons/io5";
import { IconType } from "react-icons";
import React from "react";

export default function About() {
  const [openCategories, setOpenCategories] = useState<string[]>([]);

  const skills = {
    "Programming Languages": [
      "Python",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "Swift",
      "TypeScript",
      "R",
      "C",
      "PHP",
      "SQL",
    ],
    "Technologies & Tools": [
      "React",
      "Next.js",
      "Node.js",
      "GitHub",
      "Firebase",
      "REST APIs",
      "Docker",
      "Vue.js",
    ],
    "Spoken Languages": [
      { name: "English", level: "Fluent" },
      { name: "Spanish", level: "Fluent" },
      { name: "Amharic", level: "Fluent" },
    ],
  };

  const skillIcons: Record<string, IconType> = {
    Python: SiPython,
    Java: SiJava,
    JavaScript: SiJavascript,
    HTML: SiHtml5,
    CSS: SiCss3,
    Swift: SiSwift,
    TypeScript: SiTypescript,
    R: SiR,
    C: SiC,
    PHP: SiPhp,
    SQL: SiPostgresql,
    React: SiReact,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    GitHub: SiGithub,
    Firebase: SiFirebase,
    "REST APIs": SiPostman,
    Docker: SiDocker,
    "Vue.js": SiVuedotjs,
  };

  const handleToggle = (category: string) => {
    setOpenCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  return (
    <section id="about" className="py-32 bg-white dark:bg-black relative">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-violet-50/50 dark:from-blue-950/30 dark:to-violet-950/30" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      </div>

      {/* Tech Icons */}
      <TechIcon
        type="svg"
        content="/logos/react.svg"
        className="top-20 left-[12%]"
        scale={1.3}
        delay={1}
      />
      <TechIcon
        type="emoji"
        content="🐍"
        className="bottom-40 right-[15%]"
        scale={1.2}
        delay={2}
      />
      <TechIcon
        type="svg"
        content="/logos/javascript.svg"
        className="top-60 left-[28%]"
        scale={1.1}
        delay={1.5}
      />

      {/* Decorative Elements */}
      <FloatingIcon className="top-20 left-[20%]" delay={1.2} />
      <FloatingShape className="bottom-40 left-[22%]" delay={2.5} />

      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block backdrop-blur-sm bg-white/95 dark:bg-black/95 px-6 py-3 rounded-2xl border border-white/40 dark:border-white/30">
            <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">
              About Me
            </span>
          </span>
        </motion.h2>

        <div className="grid gap-8">
          {/* Bio Section */}
          <motion.div
            className="backdrop-blur-sm bg-white/95 dark:bg-black/95 p-8 rounded-2xl border border-white/40 dark:border-white/30 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text text-2xl font-semibold mb-6 text-center">
              My Journey
            </h3>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I&apos;m a recent graduate from Virginia Tech, where my studies
                in computer science and data analytics ignited a profound
                commitment to utilizing technology for community benefit. I love
                building tools to <i>scratch my own itches</i> and creating apps
                that I know will help others. My drive to help people shapes my
                approach to work, inspiring me to seek out collaborative
                environments where teamwork and innovation thrive. I&apos;m
                always eager to tackle challenging tasks, applying what
                I&apos;ve learned to solve real-world problems while
                continuously expanding my knowledge. My goal is to make a
                meaningful impact through my professional endeavors,
                contributing to a better, more connected world.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    delay: index * 0.2,
                    ease: [0.21, 1.11, 0.81, 0.99],
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="backdrop-blur-sm bg-white/95 dark:bg-black/95 rounded-2xl p-6 text-center"
              >
                <div className="h-24 mb-8">
                  <div className="flex items-center gap-3 justify-center">
                    <span className="text-4xl">
                      {category === "Programming Languages"
                        ? "💻"
                        : category === "Technologies & Tools"
                        ? "⚙️"
                        : "🗣️"}
                    </span>
                    <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text text-2xl font-bold">
                      {category}
                    </span>
                  </div>
                  <div className="mt-4 border-b-2 border-blue-500/20 dark:border-blue-400/20 w-full" />
                </div>

                <ul className="space-y-3">
                  {Array.isArray(items)
                    ? items.map(
                        (
                          item: string | { name: string; level: string },
                          itemIndex
                        ) => (
                          <motion.li
                            key={typeof item === "string" ? item : item.name}
                            className="text-gray-600 dark:text-gray-300 flex items-center gap-2 font-medium justify-center"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                              transition: {
                                duration: 0.5,
                                delay: itemIndex * 0.1,
                                ease: "easeOut",
                              },
                            }}
                            viewport={{ once: true, margin: "-50px" }}
                          >
                            {typeof item === "string" ? (
                              <>
                                {skillIcons[item] ? (
                                  <span className="text-blue-500 dark:text-blue-400 text-lg">
                                    {React.createElement(skillIcons[item])}
                                  </span>
                                ) : (
                                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                )}
                                <span>{item}</span>
                              </>
                            ) : (
                              <>
                                <IoLanguage className="text-blue-500 dark:text-blue-400 text-lg" />
                                <span className="flex justify-between w-full">
                                  <span>{item.name}</span>
                                  <span className="text-blue-500 dark:text-blue-400 ml-2">
                                    {item.level}
                                  </span>
                                </span>
                              </>
                            )}
                          </motion.li>
                        )
                      )
                    : null}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
