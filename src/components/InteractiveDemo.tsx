"use client";

import { useState } from "react";
import { Play, Pause, Mic, AudioLines, Sparkles, Sliders, Volume2, Check } from "lucide-react";

export function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState<"design" | "clone" | "ultimate">("design");
  const [isPlaying, setIsPlaying] = useState(false);

  const samples = {
    design: {
      title: "Voice Design Mode",
      desc: "Describe the voice in plain English. The AI synthesizes the exact tone, age, emotion, and cadence.",
      prompt: "A warm, authoritative male narrator with a deep resonant voice and slow cadence...",
      text: "Welcome to Luxe Audio. Experience continuous, tokenizer-free speech generation running 100% locally on your computer.",
      sampleUrl: "https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg" // sample placeholder
    },
    clone: {
      title: "Controllable Voice Cloning",
      desc: "Upload a 3-second reference audio clip and guide the emotion with text instructions.",
      prompt: "Whisper softly with excitement...",
      text: "This voice was cloned instantly from a 3-second reference clip with zero cloud API costs.",
      sampleUrl: "https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg"
    },
    ultimate: {
      title: "Ultimate Zero-Shot Clone",
      desc: "Exact 1-to-1 voice duplication with natural breathing, pitch dynamics, and studio-grade clarity.",
      prompt: "Match reference voice pitch and accent exactly...",
      text: "Luxe Audio delivers state-of-the-art voice cloning directly on your Windows PC.",
      sampleUrl: "https://actions.google.com/sounds/v1/ambiences/rain_heavy.ogg"
    }
  };

  const current = samples[activeTab];

  return (
    <section id="demo" className="py-20 bg-slate-50 border-y border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Experience the Audio Engine in Action
          </h2>
          <p className="text-slate-600 text-lg">
            See how Luxe Audio gives you full creative control over synthetic voice generation without monthly cloud API subscriptions.
          </p>
        </div>

        {/* Demo Interface Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden glass-panel">
          {/* Tab Selection */}
          <div className="flex border-b border-slate-200 bg-slate-100/60 p-2 gap-2">
            <button
              onClick={() => { setActiveTab("design"); setIsPlaying(false); }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "design"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Voice Design</span>
            </button>
            <button
              onClick={() => { setActiveTab("clone"); setIsPlaying(false); }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "clone"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Controllable Clone</span>
            </button>
            <button
              onClick={() => { setActiveTab("ultimate"); setIsPlaying(false); }}
              className={`flex-1 py-3 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                activeTab === "ultimate"
                  ? "bg-white text-blue-600 shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Mic className="w-4 h-4" />
              <span>Ultimate Clone</span>
            </button>
          </div>

          {/* Content Body */}
          <div className="p-8 sm:p-10 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{current.title}</h3>
              <p className="text-slate-600 text-sm">{current.desc}</p>
            </div>

            {/* Simulated Prompt Box */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                AI Control Instruction
              </label>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium">
                {current.prompt}
              </div>
            </div>

            {/* Simulated Script Box */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Input Text Script
              </label>
              <div className="p-4 bg-slate-900 text-slate-100 rounded-xl text-sm font-normal leading-relaxed">
                "{current.text}"
              </div>
            </div>

            {/* Audio Waveform Simulation Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center gap-6">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-14 h-14 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center shadow-lg shadow-blue-500/30 transition-transform active:scale-95 shrink-0"
              >
                {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
              </button>

              <div className="flex-1 w-full space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-blue-600">
                    <AudioLines className="w-4 h-4 animate-pulse" />
                    <span>48kHz Studio Waveform</span>
                  </span>
                  <span>{isPlaying ? "00:04 / 00:08" : "00:00 / 00:08"}</span>
                </div>
                
                {/* Fake Animated Equalizer Bars */}
                <div className="h-10 bg-slate-100 rounded-xl p-2 flex items-center gap-1 overflow-hidden">
                  {[40, 75, 30, 90, 60, 100, 45, 80, 50, 95, 70, 35, 85, 60, 90, 40, 75, 60, 85, 95, 50, 30, 70, 90, 60, 40, 80, 100, 55, 35].map((h, i) => (
                    <div
                      key={i}
                      className={`flex-1 rounded-full transition-all duration-300 ${
                        isPlaying ? "bg-blue-600" : "bg-slate-300"
                      }`}
                      style={{ height: isPlaying ? `${Math.max(15, Math.floor(h * Math.random()))}%` : `${h * 0.4}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
