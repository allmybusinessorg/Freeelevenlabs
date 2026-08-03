"use client";

import { Mic, AudioLines, Radio, Music, FileAudio, Volume2, Headphones, Disc, Sliders, Sparkles, VolumeX } from "lucide-react";

export function BackgroundAudioIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-[0.05] selection:bg-transparent">
      {/* Top Left Cluster */}
      <Mic className="absolute top-[8%] left-[5%] w-24 h-24 text-slate-900 animate-float-slow" />
      <AudioLines className="absolute top-[18%] left-[22%] w-16 h-16 text-blue-900 animate-float-medium" />
      <Music className="absolute top-[32%] left-[10%] w-20 h-20 text-indigo-900 animate-float-fast" />

      {/* Top Right Cluster */}
      <Headphones className="absolute top-[10%] right-[8%] w-28 h-28 text-slate-900 animate-float-medium" />
      <Radio className="absolute top-[25%] right-[25%] w-20 h-20 text-blue-900 animate-float-slow" />
      <Disc className="absolute top-[38%] right-[12%] w-16 h-16 text-purple-900 animate-float-fast" />

      {/* Mid Page Floating Icons */}
      <FileAudio className="absolute top-[50%] left-[8%] w-20 h-20 text-slate-900 animate-float-fast" />
      <Sliders className="absolute top-[58%] left-[30%] w-16 h-16 text-blue-900 animate-float-slow" />
      <Volume2 className="absolute top-[52%] right-[7%] w-24 h-24 text-slate-900 animate-float-slow" />
      <Sparkles className="absolute top-[62%] right-[28%] w-16 h-16 text-purple-900 animate-float-medium" />

      {/* Bottom Page Cluster */}
      <Mic className="absolute top-[75%] left-[15%] w-28 h-28 text-indigo-900 animate-float-medium" />
      <AudioLines className="absolute top-[85%] left-[35%] w-20 h-20 text-slate-900 animate-float-slow" />
      <Music className="absolute top-[78%] right-[18%] w-24 h-24 text-blue-900 animate-float-fast" />
      <Headphones className="absolute top-[88%] right-[6%] w-20 h-20 text-purple-900 animate-float-slow" />
    </div>
  );
}
