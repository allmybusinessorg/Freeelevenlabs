import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackgroundAudioIcons } from "@/components/BackgroundAudioIcons";
import { ArrowRight, Sparkles, BookOpen, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog & Tutorials | Creative Audio AI - Free ElevenLabs Alternative",
  description: "Read the latest tutorials, comparisons, and technical guides on AI voice cloning, text-to-speech, and OpenBMB VoxCPM2 model architecture.",
};

const blogs = [
  {
    slug: "free-elevenlabs-alternative",
    category: "Software Comparison",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-100",
    readTime: "8 min read",
    title: "The Best Free ElevenLabs Alternative in 2026: 100% Offline AI Voice Cloning for PC",
    excerpt: "Discover why content creators and developers are switching from monthly ElevenLabs character quotas to local offline voice cloning powered by OpenBMB VoxCPM2.",
    date: "August 2026"
  },
  {
    slug: "how-to-clone-voice-free-windows",
    category: "Tutorial & Guide",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-100",
    readTime: "6 min read",
    title: "How to Clone Any Voice for Free on Windows: Complete Zero-Shot AI Tutorial",
    excerpt: "Learn how to duplicate any voice in under 3 seconds using a short reference audio clip with Creative Audio AI on Windows 10 & 11.",
    date: "August 2026"
  },
  {
    slug: "voxcpm2-architecture-explained",
    category: "AI Engineering",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    readTime: "7 min read",
    title: "VoxCPM2 Architecture Explained: Tokenizer-Free Continuous Speech Synthesis",
    excerpt: "An in-depth technical analysis of OpenBMB's 2B parameter continuous acoustic representation model and why it outperforms traditional audio tokenizers.",
    date: "August 2026"
  }
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col relative">
      <BackgroundAudioIcons />
      <Header />

      <section className="pt-36 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full text-blue-700 text-xs font-semibold">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>Guides, Tutorials & Comparisons</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight">
              Creative Audio AI Blog
            </h1>
            <p className="text-slate-600 text-lg">
              In-depth articles on local voice cloning, speech synthesis research, and alternative software guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((b, i) => (
              <a
                key={i}
                href={`/blog/${b.slug}`}
                className="group flex flex-col bg-white border border-slate-200/80 rounded-3xl p-8 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between gap-2 mb-6">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full border uppercase tracking-wider ${b.badgeColor}`}>
                    {b.category}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{b.readTime}</span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">
                  {b.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">
                  {b.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs font-semibold text-blue-600 pt-4 border-t border-slate-100">
                  <span>Read Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
