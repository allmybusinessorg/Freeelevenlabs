"use client";

import { useState, useEffect } from "react";
import { Play, Download, Sparkles, Github, Menu, X } from "lucide-react";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <Play className="w-5 h-5 text-white ml-0.5" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">
              Creative Audio AI
            </span>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-blue-600 mt-1">
              Free ElevenLabs Alt
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors">
            Features
          </a>
          <a href="#demo" className="hover:text-slate-900 transition-colors">
            Live Preview
          </a>
          <a href="#engine" className="hover:text-slate-900 transition-colors">
            OpenBMB Credits
          </a>
          <a href="#creator" className="hover:text-slate-900 transition-colors">
            Creator
          </a>
          <a href="#faq" className="hover:text-slate-900 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Right Action Badges & Download Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://isayak007.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border border-slate-200/60"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>By Sayak 007</span>
          </a>

          <a
            href="https://github.com/allmybusinessorg/Freeelevenlabs"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            href="#download"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md hover:shadow-lg hover:shadow-blue-500/20 transition-all transform active:scale-95"
          >
            <Download className="w-4 h-4" />
            <span>Download Free</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 animate-in slide-in-from-top-4">
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-1"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-1"
          >
            Live Preview
          </a>
          <a
            href="#engine"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-1"
          >
            OpenBMB Credits
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-slate-800 py-1"
          >
            FAQ
          </a>
          <div className="pt-4 flex flex-col gap-3">
            <a
              href="https://isayak007.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 bg-slate-100 text-slate-900 py-3 rounded-xl font-bold text-sm"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>By Sayak 007</span>
            </a>
            <a
              href="#download"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-xl font-bold text-sm shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Free for Windows</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
