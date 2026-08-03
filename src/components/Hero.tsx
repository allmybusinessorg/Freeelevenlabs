"use client";

import { Download, ShieldCheck, Zap, Sparkles, Cpu, Play, CheckCircle2, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden gradient-bg-subtle">
      {/* Background Decorative Rings */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-200/40 via-purple-100/30 to-pink-100/20 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Top Tag Badge */}
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full text-blue-700 text-xs md:text-sm font-semibold mb-8 shadow-sm animate-in fade-in slide-in-from-bottom-3 duration-500">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>The 100% Free & Unlimited ElevenLabs Alternative</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight max-w-5xl mx-auto leading-[1.1] mb-6">
          Unlimited AI Voice Cloning. <br className="hidden sm:inline" />
          <span className="gradient-text">Zero Subscriptions. 100% Offline.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed mb-10">
          Generate ultra-realistic human speech, clone any voice in seconds, and design custom vocal styles locally on your Windows PC. Powered by the open-source <strong className="text-slate-900 font-semibold">OpenBMB VoxCPM Engine</strong>.
        </p>

        {/* Action CTAs */}
        <div id="download" className="flex flex-col items-center justify-center gap-4 mb-16">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a
              href="https://github.com/allmybusinessorg/Freeelevenlabs/releases"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Download for Windows (64-bit)</span>
            </a>

            <a
              href="#demo"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-7 py-4 rounded-2xl font-bold text-base transition-all border border-slate-200"
            >
              <span>Try Live Preview</span>
              <ArrowRight className="w-4 h-4 text-slate-500" />
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-500 mt-2 bg-slate-50 border border-slate-200 px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>v1.0 Full Studio Engine Live • 8-Bit Quantized Edition (v1.1) Coming Soon</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-slate-200/60">
          <div className="flex items-center justify-center gap-2.5 text-slate-600 text-xs md:text-sm font-medium">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>100% Offline Privacy</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-600 text-xs md:text-sm font-medium">
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Zero API Credit Limits</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-600 text-xs md:text-sm font-medium">
            <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
            <span>Local RTX GPU Accelerated</span>
          </div>
          <div className="flex items-center justify-center gap-2.5 text-slate-600 text-xs md:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Studio Quality 48kHz</span>
          </div>
        </div>
      </div>
    </section>
  );
}
