import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl 
      bg-gradient-to-b from-[#0b0018]/80 via-[#0f0020]/40 to-transparent 
      border-b border-white/10">

      <nav className="flex justify-between items-center px-6 sm:px-12 py-5 
        text-sm tracking-wide text-neutral-200">

        {/* LOGO */}
        <h1 
          onClick={() => scrollToSection("home")}
          className="font-semibold text-white text-lg sm:text-xl tracking-tight cursor-pointer 
          hover:text-neutral-100 transition-colors duration-300">
          Gunjan Jindal <span className="text-purple-400">| Frontend Developer</span>
        </h1>

        {/* DESKTOP NAV */}
        <ul className="hidden md:flex gap-10">

          <li className="relative cursor-pointer group" onClick={() => scrollToSection("home")}>
            <span className="transition-all duration-300 group-hover:text-white">HOME</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white 
              group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative cursor-pointer group" onClick={() => scrollToSection("work")}>
            <span className="transition-all duration-300 group-hover:text-white">WORK</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white 
              group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative cursor-pointer group" onClick={() => scrollToSection("about")}>
            <span className="transition-all duration-300 group-hover:text-white">ABOUT</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white 
              group-hover:w-full transition-all duration-300"></span>
          </li>

          <li className="relative cursor-pointer group" onClick={() => scrollToSection("contact")}>
            <span className="transition-all duration-300 group-hover:text-white">CONTACT</span>
            <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-white 
              group-hover:w-full transition-all duration-300"></span>
          </li>

        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 rounded-lg border border-white/20 text-white hover:border-white/40 
            transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M3.75 5.75h16.5M3.75 12h16.5m-16.5 6.25h16.5" />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 pb-8 bg-[#0b0018]/95 backdrop-blur-xl border-t border-white/10">

          <ul className="flex flex-col gap-5 text-neutral-200 text-base">
            <span onClick={() => scrollToSection("home")} className="hover:text-white">HOME</span>
            <span onClick={() => scrollToSection("work")} className="hover:text-white">WORK</span>
            <span onClick={() => scrollToSection("about")} className="hover:text-white">ABOUT</span>
            <span onClick={() => scrollToSection("contact")} className="hover:text-white">CONTACT</span>
          </ul>

        </div>
      )}
    </header>
  );
}
