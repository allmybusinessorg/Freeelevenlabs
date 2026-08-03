"use client";

import { Sparkles, Camera, Globe, Heart, ArrowUpRight } from "lucide-react";

export function CreatorSpotlight() {
  return (
    <section id="creator" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
            {/* Avatar Badge */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 p-1 shadow-xl shrink-0">
              <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                <Sparkles className="w-14 h-14 text-amber-400 animate-pulse" />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 flex-1">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <span>Meet The Developer</span>
              </div>

              <h3 className="text-3xl font-extrabold tracking-tight">
                Designed & Built by Sayak 007
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
                Founder of <strong className="text-white">I.SAYAK007 HQ</strong> and creator behind <strong className="text-white">@we.arecc</strong>. I build free, high-performance software tools for creators, developers, and AI enthusiasts.
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                <a
                  href="https://isayak007.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-900 px-5 py-2.5 rounded-xl font-bold text-sm transition-all shadow-md"
                >
                  <Globe className="w-4 h-4 text-slate-700" />
                  <span>Visit SAYAK HQ</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-400" />
                </a>

                <a
                  href="https://instagram.com/we.arecc"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-pink-600/20 hover:bg-pink-600/30 border border-pink-500/40 text-pink-300 px-5 py-2.5 rounded-xl font-bold text-sm transition-all"
                >
                  <Camera className="w-4 h-4" />
                  <span>Follow @we.arecc</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
