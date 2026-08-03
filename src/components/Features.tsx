"use client";

import { Mic, Sparkles, Shield, Cpu, Flame, Infinity as InfinityIcon, Radio, Volume2 } from "lucide-react";

export function Features() {
  const list = [
    {
      icon: Mic,
      color: "text-blue-600 bg-blue-100",
      title: "Zero-Shot Voice Cloning",
      desc: "Clone any voice with incredible fidelity using a short 3-second reference audio file."
    },
    {
      icon: Sparkles,
      color: "text-purple-600 bg-purple-100",
      title: "Natural Voice Design",
      desc: "Instruct the AI in plain text to generate custom accents, age groups, emotional tones, and tempos."
    },
    {
      icon: Shield,
      color: "text-emerald-600 bg-emerald-100",
      title: "100% Offline Privacy",
      desc: "Your audio recordings and scripts never leave your computer. No cloud servers, no data tracking."
    },
    {
      icon: Cpu,
      color: "text-amber-600 bg-amber-100",
      title: "Local GPU Acceleration",
      desc: "Powered by PyTorch CUDA for ultra-fast 1-to-3 second speech generation on your NVIDIA GeForce RTX GPU."
    },
    {
      icon: InfinityIcon,
      color: "text-pink-600 bg-pink-100",
      title: "Unlimited Free Generations",
      desc: "No monthly character limits, no paywalls, and no subscription plans. Generate as much audio as you want."
    },
    {
      icon: Radio,
      color: "text-indigo-600 bg-indigo-100",
      title: "Tokenizer-Free Waveform",
      desc: "Uses continuous neural representations for smooth, natural pitch transitions without robotic artifacts."
    }
  ];

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Engineered for Creators & Developers
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need for voiceovers, video dubbing, podcasts, game character voices, and AI content creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {list.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl border border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
