// src/pages/Clients.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import wizardLogo from "../../assets/wizardLogo.png";
import vinayakLogo from "../../assets/vinayakLogo.png";
import puramenteLogo from "../../assets/PuramenteLogo.png";

export default function Clients() {
  const clients = [
    {
      name: "Vinayak Jewellers",
      logo: vinayakLogo,
      desc: "Luxury Jewellery Brand",
      link: "https://vinayak.kontentkraftdigital.com",
      accent: "from-[#f0e6ff]/80 via-[#e4d1ff]/70 to-[#f0e6ff]/80",
    },
    {
      name: "Wizard India",
      logo: wizardLogo,
      desc: "Manufacturer of Loudspeakers",
      link: "https://wizardindia.in",
      accent: "from-[#e0e8ff]/80 via-[#cfd8ff]/70 to-[#e0e8ff]/80",
    },
    {
      name: "Puramente International",
      logo: puramenteLogo,
      desc: "Global Luxury Jewellery Brand",
      link: "https://puramentejewel.com/en-in/",
      accent: "from-[#ffe6f2]/80 via-[#ffd6eb]/70 to-[#ffe6f2]/80",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleClients = [
    clients[index],
    clients[(index + 1) % clients.length],
    clients[(index + 2) % clients.length],
  ];

  return (
    <section
      id="clients"
      className="relative py-20 sm:py-24 md:py-28 bg-gradient-to-b from-[#090014] via-[#15002c] to-[#0a0018] text-white overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] sm:w-[700px] md:w-[900px] h-[500px] sm:h-[700px] md:h-[900px] bg-purple-700/20 blur-[200px] rounded-full -z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-4xl md:text-5xl font-light mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.25)]"
        >
          <span className="text-white">Honoured to work with </span>
          <span className="font-semibold text-purple-400">visionary brands</span>
        </motion.h2>

        {/* Subtitle */}
        <p className="text-neutral-300 text-sm sm:text-lg mb-12 sm:mb-16 max-w-2xl mx-auto px-2">
          Collaborating with brands that value creativity, innovation, and precision in every digital detail.
        </p>

        {/* Responsive Carousel Wrapper */}
        <div className="w-full flex justify-center overflow-x-auto sm:overflow-hidden no-scrollbar">
          <motion.div
            key={index}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="flex gap-6 sm:gap-10 md:gap-12 justify-center items-center px-2 sm:px-0"
          >
            {visibleClients.map((client, i) => (
              <motion.a
                key={i}
                href={client.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`
                  group 
                  w-56 h-56 
                  sm:w-64 sm:h-64 
                  md:w-72 md:h-72 
                  p-5 sm:p-6 md:p-8
                  rounded-2xl md:rounded-3xl 
                  backdrop-blur-xl 
                  bg-gradient-to-br ${client.accent} 
                  border border-white/20 
                  shadow-[0_0_30px_rgba(168,85,247,0.25)] 
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.45)] 
                  transition-all duration-700 
                  overflow-hidden 
                  flex flex-col justify-center items-center relative
                `}
              >
                {/* Inner Light */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 bg-white/40 blur-3xl rounded-full opacity-70"></div>

                {/* Logo */}
                <motion.img
                  src={client.logo}
                  alt={client.name}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-20 sm:w-40 sm:h-24 md:w-52 md:h-32 object-contain mb-3 sm:mb-4 drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] brightness-[1.5] contrast-[1.4] saturate-[1.2] z-10"
                />

                {/* Text */}
                <div className="text-center z-10">
                  <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 font-medium">
                    {client.desc}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
