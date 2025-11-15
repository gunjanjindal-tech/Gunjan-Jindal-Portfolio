// src/pages/AboutMe.jsx

import React from "react";
import { motion } from "framer-motion";
import myImg from "../../assets/about-me/my-img.jpeg";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-gradient-to-b from-[#0a0018] via-[#13002c] to-[#0a0018] text-white"
    >
      <div className="w-full px-4 sm:px-8 lg:px-20 flex flex-col gap-16 sm:gap-20">

        {/* ================= TEXT SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-center px-2"
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight mb-6">
              About<span className="font-semibold text-purple-400"> Me</span>
            </h2>

            <div className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed space-y-5 sm:space-y-6">
              <p>
                I'm
                <span className="text-white font-semibold"> Gunjan Jindal</span>,
                a Frontend Developer dedicated to creating clean, modern, and visually
                appealing digital experiences. I specialize in responsive layouts,
                smooth interactions, and intuitive UI design using
                <span className="text-purple-300 font-medium">
                  {" "}React, TailwindCSS, and JavaScript
                </span>.
              </p>

              <p>
                I completed an
                <span className="font-semibold text-white"> 8-month internship at WsCube Tech</span>,
                where I worked on UI improvements, optimized UX flows, and created
                reusable frontend components focused on scalability and performance.
              </p>

              <p>
                I’m passionate about animations, modern UI aesthetics, and turning
                ideas into smooth and immersive digital experiences.
              </p>
            </div>

            {/* SKILLS */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 sm:mt-10">
              {[
                "React.js",
                "Tailwind CSS",
                "Bootstrap",
                "HTML5",
                "CSS3",
                "Responsive Design",
                "Media Queries",
                "Git",
              ].map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.07 }}
                  className="px-4 py-2 bg-white/10 text-purple-300 rounded-full text-xs sm:text-sm 
                  border border-purple-400/40 backdrop-blur-md shadow-sm cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ================= IMAGE SECTION ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <div
            className="w-full max-w-3xl sm:max-w-4xl rounded-3xl bg-gradient-to-br 
          from-purple-500/30 via-fuchsia-500/20 to-blue-500/20 
          backdrop-blur-xl border border-white/10 shadow-xl overflow-hidden"
          >
            {/* Floating Image */}
            <motion.img
              src={myImg}
              alt="Gunjan Jindal"
              className="w-full h-[320px] sm:h-[380px] md:h-[460px] object-cover rounded-3xl 
              opacity-95 hover:opacity-100 transition-all duration-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Bottom Banner */}
            <div className="p-4 sm:p-5 bg-white/10 backdrop-blur-xl border-t border-white/10">
              <p className="text-purple-300 text-xs sm:text-sm">Frontend Developer</p>
              <p className="text-white font-semibold text-base sm:text-lg">Gunjan Jindal</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
