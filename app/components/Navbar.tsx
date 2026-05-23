"use client";
import { useState, useEffect } from "react";

export default function Navbar() {     
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}>
      
      <a href="#" className="text-white font-bold text-lg">
        rimpy.dev
      </a>

      <div className="flex gap-8">
        <a href="#about" className="text-gray-400 hover:text-white text-sm">About</a>
        <a href="#experience" className="text-gray-400 hover:text-white text-sm">Experience</a>
        <a href="#projects" className="text-gray-400 hover:text-white text-sm">Projects</a>
        <a href="#art" className="text-gray-400 hover:text-white text-sm">Art</a>
      </div>

      <a href="mailto:rimpybhogal09@gamil.com" className="bg-white text-black text-sm font-medium px-4 py-2 rounded-full">
        Hire Me →
      </a>

    </nav>
  );
}