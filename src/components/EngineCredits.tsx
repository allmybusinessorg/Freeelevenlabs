"use client";

import { Github, ExternalLink, Heart, Code2, Cpu, CheckCircle2 } from "lucide-react";

export function EngineCredits() {
  return (
    <section id="engine" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-800/80 border border-slate-700/80 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-700/60 mb-8">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Code2 className="w-3.5 h-3.5" />
                <span>Open Source Engine Attribution</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Powered by OpenBMB VoxCPM
              </h2>
            </div>

            <a
              href="https://github.com/OpenBMB/VoxCPM"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm px-6 py-3 rounded-xl transition-all shadow-md shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>View VoxCPM Repo</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>
          </div>

          <div className="space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Special gratitude and credit goes to the extraordinary researchers and developers at <strong className="text-white">OpenBMB (Open Model Initiative for Big Models)</strong> for creating and open-sourcing the <strong className="text-white">VoxCPM & VoxCPM2</strong> continuous speech generation model family.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">Tokenizer-Free Architecture</h4>
                  <p className="text-slate-400 text-xs mt-1">Direct continuous acoustic modeling without discrete tokenization bottlenecks.</p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm">2 Billion Parameters</h4>
                  <p className="text-slate-400 text-xs mt-1">High-capacity neural weights trained for expressive multi-lingual voice synthesis.</p>
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 pt-4 border-t border-slate-700/60">
              Luxe Audio provides a native Windows desktop GUI runtime for the VoxCPM model family. All underlying model architecture, weights, and research belong to the respective OpenBMB authors and contributors under open-source licensing.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
