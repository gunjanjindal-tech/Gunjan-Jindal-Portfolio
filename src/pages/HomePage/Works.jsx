// src/pages/MyWork.jsx

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// =======================
// IMPORT PROJECT IMAGES
// =======================

// Vinayak Jewellers
import vinayak1 from "../../assets/vinayak/vinayak1.png";
import vinayak2 from "../../assets/vinayak/vinayak2.png";
import vinayak3 from "../../assets/vinayak/vinayak3.png";
import vinayak4 from "../../assets/vinayak/vinayak4.png";
import vinayak5 from "../../assets/vinayak/vinayak5.png";

// Wizard India
import wiz1 from "../../assets/wizard/wiz1.png";
import wiz2 from "../../assets/wizard/wiz2.png";
import wiz3 from "../../assets/wizard/wiz3.png";
import wiz4 from "../../assets/wizard/wiz4.png";
import wiz5 from "../../assets/wizard/wiz5.png";

// Puramente International
import pura1 from "../../assets/puramente/pura1.png";
import pura2 from "../../assets/puramente/pura2.png";
import pura3 from "../../assets/puramente/pura3.png";
import pura4 from "../../assets/puramente/pura4.png";
import pura5 from "../../assets/puramente/pura5.png";

// Swoo Petmall
import swoo1 from "../../assets/Swoo Petmall/swoo1.png";
import swoo2 from "../../assets/Swoo Petmall/swoo2.png";
import swoo3 from "../../assets/Swoo Petmall/swoo3.png";

// Movie Search App
import movie1 from "../../assets/movie-search/movie1.png";
import movie2 from "../../assets/movie-search/movie2.png";
import movie3 from "../../assets/movie-search/movie3.png";

// Spotify Clone
import spotify1 from "../../assets/spotify/spotify1.png";
import spotify2 from "../../assets/spotify/spotify2.png";

// Sugar & Blush Bakehouse
import sugar1 from "../../assets/sugarandblush/sugar1.png";
import sugar2 from "../../assets/sugarandblush/sugar2.png";
import sugar3 from "../../assets/sugarandblush/sugar3.png";
import sugar4 from "../../assets/sugarandblush/sugar4.png";

// Myntra Clone
import myntra1 from "../../assets/myntra/myntra1.png";
import myntra2 from "../../assets/myntra/myntra2.png";
import myntra3 from "../../assets/myntra/myntra3.png";
import myntra4 from "../../assets/myntra/myntra4.png";

// Redbus Clone
import redbus1 from "../../assets/redbus/redbus1.png";
import redbus2 from "../../assets/redbus/redbus2.png";
import redbus3 from "../../assets/redbus/redbus3.png";
import redbus4 from "../../assets/redbus/redbus4.png";

// =======================
// PROJECT DATA
// =======================

const projects = [
  {
    title: "Vinayak Jewellers",
    category: "Full Stack",
    description:
      "Luxury jewellery brand website crafted with premium UI, responsiveness and refined layouts.",
    tech: ["ReactJS", "TailwindCSS", "Node.js", "MongoDB"],
    link: "https://vinayak.kontentkraftdigital.com/",
    images: [vinayak1, vinayak2, vinayak3, vinayak4, vinayak5],
  },
  {
    title: "Wizard India",
    category: "React",
    description:
      "Premium audio equipment manufacturer website reflecting innovation and global presence.",
    tech: ["ReactJS", "TailwindCSS"],
    link: "https://wizard-india.vercel.app/",
    images: [wiz1, wiz2, wiz3, wiz4, wiz5],
  },
  {
    title: "Puramente International",
    category: "Full Stack",
    description:
      "Full-stack luxury jewellery brand built using MERN stack with admin panel.",
    tech: ["ReactJS", "TailwindCSS", "Node.js", "MongoDB"],
    link: "https://puramentejewel.com/en-in/",
    images: [pura1, pura2, pura3, pura4, pura5],
  },
  {
    title: "Swoo Petmall",
    category: "Frontend",
    description: "Premium pet shop UI design built using Bootstrap and HTML/CSS.",
    tech: ["HTML", "CSS", "Bootstrap"],
    link: "https://gunjanjindal-tech.github.io/Swoo-Petmall/",
    images: [swoo1, swoo2, swoo3],
  },
  {
    title: "Movie Search App",
    category: "JavaScript",
    description: "Movie search interface built using OMDB API.",
    tech: ["JavaScript", "API", "HTML", "CSS"],
    link: "https://gunjanjindal-tech.github.io/Movie-Search-App/",
    images: [movie1, movie2, movie3],
  },
  {
    title: "Spotify Clone",
    category: "JavaScript",
    description: "Front-end replica with animation-rich music player UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://gunjanjindal-tech.github.io/Spotify-Clone/",
    images: [spotify1, spotify2],
  },
  {
    title: "Sugar & Blush Bakehouse",
    category: "Frontend",
    description: "Responsive bakery website with clean visuals and soft UI.",
    tech: ["HTML", "CSS", "Media Query"],
    link: "https://gunjanjindal-tech.github.io/Sugar-and-Blush-Bakehouse/",
    images: [sugar1, sugar2, sugar3, sugar4],
  },
  {
    title: "Myntra Clone",
    category: "Frontend",
    description: "Fashion e-commerce UI inspired by Myntra.",
    tech: ["HTML", "CSS"],
    link: "https://gunjanjindal-tech.github.io/Myntra/",
    images: [myntra1, myntra2, myntra3, myntra4],
  },
  {
    title: "RedBus Clone",
    category: "Frontend",
    description:
      "Responsive front-end clone of RedBus with clean layout and booking UI.",
    tech: ["HTML", "CSS"],
    link: "https://gunjanjindal-tech.github.io/Redbus/",
    images: [redbus1, redbus2, redbus3, redbus4],
  },
];

// =======================
// CATEGORY FILTERS
// =======================

const categories = ["All", "React", "JavaScript", "Frontend", "Full Stack"];

export default function MyWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [modalData, setModalData] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work"  className="py-28 bg-gradient-to-b from-[#0a0018] via-[#13002c] to-[#0a0018] text-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-light mb-4"
        >
          My <span className="font-semibold text-purple-400">Work</span>
        </motion.h2>

        {/* Subtext */}
        <p className="text-neutral-300 mb-10">
          A showcase of my favourite projects crafted with creativity & clean
          code.
        </p>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border ${
                activeCategory === cat
                  ? "bg-purple-500 text-white border-purple-500"
                  : "bg-transparent border-purple-300/40 text-purple-300"
              } transition-all duration-300`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer bg-white/5 backdrop-blur-lg p-4 rounded-2xl border border-white/10 hover:border-purple-400/40 transition-all"
              onClick={() => setModalData(project)}
            >
              <img
                src={project.images[0]}
                className="h-56 w-full object-cover rounded-xl mb-4"
              />

              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-neutral-400 text-sm mt-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-500/20 border border-purple-400/40 text-purple-300 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {modalData && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-xl flex items-center justify-center p-4 z-[999]"
              onClick={() => setModalData(null)}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="bg-[#0a0018] p-6 rounded-2xl max-w-3xl w-full border border-purple-400/40"
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4">{modalData.title}</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {modalData.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="w-full h-48 object-cover rounded-lg border border-white/10"
                    />
                  ))}
                </div>

                <a
                  href={modalData.link}
                  target="_blank"
                  className="px-5 py-2 bg-purple-500 text-white rounded-full mt-4 inline-block"
                >
                  Visit Website
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
