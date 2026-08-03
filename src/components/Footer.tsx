"use client";

import { Play, Sparkles, Github, Camera, Globe, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center shadow-md">
                <Play className="w-4 h-4 text-slate-900 ml-0.5" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight">Luxe Audio</span>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              The 100% free, unlimited, offline ElevenLabs alternative. Powered by OpenBMB VoxCPM. Engineered for Windows PC.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/allmybusinessorg/Freeelevenlabs"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 flex items-center justify-center transition-colors"
                title="GitHub Repo"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://instagram.com/we.arecc"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-pink-400 flex items-center justify-center transition-colors"
                title="Instagram @we.arecc"
              >
                <Camera className="w-5 h-5" />
              </a>

              <a
                href="https://isayak007.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 flex items-center justify-center transition-colors"
                title="Sayak HQ"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#demo" className="hover:text-white transition-colors">Live Preview</a></li>
              <li><a href="#engine" className="hover:text-white transition-colors">OpenBMB VoxCPM</a></li>
              <li><a href="#creator" className="hover:text-white transition-colors">Sayak 007</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div className="space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Open Source</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/OpenBMB/VoxCPM" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">VoxCPM GitHub</a></li>
              <li><a href="https://huggingface.co/OpenBMB/VoxCPM2" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">HuggingFace Model</a></li>
              <li><a href="https://isayak007.vercel.app" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">I.SAYAK007 HQ</a></li>
              <li><a href="https://instagram.com/we.arecc" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">CC Creative Creature</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Luxe Audio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed & Engineered by</span>
            <a href="https://isayak007.vercel.app" target="_blank" rel="noreferrer" className="text-white font-bold hover:underline">
              Sayak 007
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}
