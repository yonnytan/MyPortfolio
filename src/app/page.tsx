"use client";

import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 overflow-hidden">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
