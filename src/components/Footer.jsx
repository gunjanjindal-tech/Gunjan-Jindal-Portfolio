import React from "react";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#0a0018] via-[#13002c] to-[#0a0018] text-white text-center py-20">
      {/* Background Light Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/20 blur-[200px] rounded-full -z-10"></div>

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl font-light mb-3 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
        Get <span className="font-semibold text-white">in Touch.</span>
      </h2>
      <p className="text-neutral-200 mb-12 text-base sm:text-lg">
        Let’s collaborate and create something remarkable together.
      </p>

      {/* Contact Icons */}
      <div className="flex justify-center gap-8 sm:gap-10 mb-12 text-3xl">
        <a
          href="tel:+918949951116"
          className="hover:text-[#00ffb7] transition duration-300 hover:drop-shadow-[0_0_10px_rgba(0,255,183,0.6)]"
          title="Call Gunjan"
        >
          <FaPhoneAlt />
        </a>
        <a
          href="mailto:jindalgunjan14@gmail.com"
          className="hover:text-[#ff6b6b] transition duration-300 hover:drop-shadow-[0_0_10px_rgba(255,107,107,0.6)]"
          title="Email Gunjan"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://linkedin.com/in/gunjan-jindal-377818245"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4e9eff] transition duration-300 hover:drop-shadow-[0_0_10px_rgba(78,158,255,0.6)]"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/gunjanjindal-tech"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-300 transition duration-300 hover:drop-shadow-[0_0_10px_rgba(200,200,200,0.6)]"
          title="GitHub"
        >
          <FaGithub />
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-[80%] sm:w-[60%] mx-auto h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>

      {/* Footer Credit */}
      <p className="text-neutral-400 text-sm sm:text-base">
        Made with <span className="text-red-500 drop-shadow-[0_0_6px_rgba(255,50,50,0.6)]">❤️</span> by{" "}
        <a
          href="https://linkedin.com/in/gunjan-jindal-377818245"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white font-semibold hover:underline hover:text-white transition"
        >
          Gunjan Jindal
        </a>
      </p>
    </footer>
  );
}
