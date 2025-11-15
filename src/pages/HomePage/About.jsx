// src/pages/AboutMe.jsx

import React from "react";
import { motion } from "framer-motion";
import myImg from "../../assets/about-me/my-img.jpeg";

export default function About() {
  return (
    <section id="about" className="py-28 bg-gradient-to-b from-[#0a0018] via-[#13002c] to-[#0a0018] text-white">
      
      {/* FULL WIDTH WRAPPER */}
      <div className="w-full px-6 lg:px-20 flex flex-col gap-20">

     {/* ================= TEXT SECTION (CENTERED) ================= */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  className="w-full flex justify-center"
>
  <div className="max-w-6xl text-center">
    <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-6">
      About<span className="font-semibold text-purple-400">Me</span>
    </h2>

    <div className="text-neutral-300 text-base sm:text-lg leading-relaxed space-y-6">

      <p>
        I'm <span className="text-white font-semibold">Gunjan Jindal</span>, 
        a Frontend Developer dedicated to building clean, modern, and visually 
        engaging digital experiences. I specialize in crafting responsive layouts, 
        smooth interactions, and meaningful UI design using 
        <span className="text-purple-300 font-medium"> React, TailwindCSS, and JavaScript</span>.
      </p>

      <p>
        I completed an <span className="font-semibold text-white">8-month internship at WsCube Tech</span>, 
        where I worked on UI enhancements, improved UX flows, and built reusable frontend 
        components with performance and scalability in mind.
      </p>

      <p>
        I’m passionate about animations, modern UI aesthetics, and transforming ideas 
        into smooth, immersive digital experiences that feel effortless.
      </p>
    </div>

    {/* SKILL TAGS */}
    <div className="flex flex-wrap justify-center gap-3 mt-10">
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
          className="px-4 py-2 bg-white/10 text-purple-300 rounded-full text-sm 
          border border-purple-400/40 backdrop-blur-md shadow-sm cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
</motion.div>


        {/* ================= IMAGE SECTION (FULL WIDTH) ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-4xl rounded-3xl bg-gradient-to-br 
                          from-purple-500/30 via-fuchsia-500/20 to-blue-500/20 
                          backdrop-blur-xl border border-white/10 
                          shadow-xl overflow-hidden">

            {/* Floating Image */}
            <motion.img
              src={myImg}
              alt="Gunjan Jindal"
              className="w-full h-[460px] object-cover rounded-3xl opacity-95 hover:opacity-100 transition-all duration-500"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Bottom Banner */}
            <div className="p-5 bg-white/10 backdrop-blur-xl border-t border-white/10">
              <p className="text-purple-300 text-sm">Frontend Developer</p>
              <p className="text-white font-semibold text-lg">Gunjan Jindal</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
