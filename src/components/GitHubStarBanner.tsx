"use client";

import { Star, Github, Heart, ArrowUpRight } from "lucide-react";

export function GitHubStarBanner() {
  return (
    <section className="py-12 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden border-y border-slate-800">
      {/* Background Accent Glow */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Show Your Support</span>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Loving Creative Audio AI? Give us a Star! ⭐
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              If this free software helps your voiceover workflow, please star our repository on GitHub. Your star helps more creators discover free, privacy-first offline AI tools!
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <a
              href="https://github.com/allmybusinessorg/Freeelevenlabs"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 px-6 py-3.5 rounded-xl font-extrabold text-sm shadow-xl hover:shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5 fill-slate-950" />
              <Star className="w-4 h-4 fill-slate-950 text-slate-950" />
              <span>Star on GitHub</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
