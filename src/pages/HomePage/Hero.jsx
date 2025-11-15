// src/components/Hero.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";

export default function Hero() {
  const [cursorPos, setCursorPos] = useState({ x: -9999, y: -9999 });

  const titleWords = "Frontend Developer & UI Enthusiast".split(" ");

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden text-white bg-gradient-to-b from-[#0B0018] via-[#150033] to-[#0B001F]"
      onMouseMove={(e) => setCursorPos({ x: e.clientX, y: e.clientY })}
    >

      {/* === Cursor Spotlight === */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background: `radial-gradient(
            350px circle at ${cursorPos.x}px ${cursorPos.y}px,
            rgba(255,255,255,0.12),
            transparent 60%
          )`,
        }}
      ></div>

      {/* === Ambient Gradient Lighting === */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-purple-700/30 blur-[240px] rounded-full"></div>
        <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] bg-indigo-600/25 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-fuchsia-800/25 blur-[200px] rounded-full"></div>
      </div>

      {/* === Main Content === */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[95%] sm:max-w-2xl md:max-w-3xl lg:max-w-6xl"
      >
        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl font-light mb-3 text-neutral-300"
        >
          Hi, I’m <span className="text-white font-medium">Gunjan Jindal</span>
        </motion.h2>

        {/* Title with gradient beam + word animation */}
        <div className="relative w-full flex justify-center mb-3">
          <div className="absolute inset-0 w-[120%] h-[120%] bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-indigo-500/40 blur-[70px] rounded-full animate-beam-move -z-10"></div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: { staggerChildren: 0.09, delayChildren: 0.2 },
              },
            }}
            className="
              font-extrabold 
              text-center 
              leading-tight
              text-[clamp(1.8rem,4vw,3.2rem)]
              lg:text-[3.6rem]
              whitespace-normal
              lg:whitespace-nowrap
              bg-gradient-to-r from-white via-[#d6ccff] to-white 
              bg-clip-text text-transparent
            "
          >
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        {/* Extra Info (New Line Added Here) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-neutral-400 text-sm sm:text-base max-w-lg leading-relaxed mb-3"
        >
          Crafting digital experiences with clean UI, subtle motion, and modern frontend practices.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed text-neutral-300"
        >
          I build performant, responsive, and engaging experiences using{" "}
          <span className="text-white font-semibold">React</span>,{" "}
          <span className="text-white font-semibold">TailwindCSS</span>, and{" "}
          <span className="text-white font-semibold">MERN Stack</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-10"
        >
          <a
            href="https://www.wscubetech.com/portfolio/web-development/gunjan-b1hma2l"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-[#0B001F] font-semibold rounded-full text-sm hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] hover:scale-105 transition-all"
          >
            View My Work
          </a>

          <a
            href="mailto:jindalgunjan14@gmail.com"
            className="px-6 py-3 border border-white/40 text-white/90 rounded-full text-sm font-medium hover:border-white hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-8 text-neutral-300 text-sm sm:text-base"
        >
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-neutral-100" />
            <a href="mailto:jindalgunjan14@gmail.com" className="hover:text-white">
              jindalgunjan14@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-neutral-100" />
            <a href="tel:+918949951116" className="hover:text-white">
              +91 89499 51116
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 text-neutral-100"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
