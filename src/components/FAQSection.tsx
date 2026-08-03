"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is Luxe Audio really 100% free with no hidden subscriptions?",
      a: "Yes! Luxe Audio is completely free and open-source. There are zero monthly character limits, zero API subscriptions, and no paywalls. You download the app and model once and run it unlimited times locally on your PC."
    },
    {
      q: "What are the system requirements for Windows?",
      a: "Luxe Audio runs on Windows 10 and Windows 11 (64-bit required). For optimal 1-to-3 second voice synthesis, an NVIDIA GeForce RTX or GTX GPU with CUDA support is recommended. It can also run on CPU."
    },
    {
      q: "Is my voice data private and secure?",
      a: "100% private. Luxe Audio runs completely offline on your own machine. Your uploaded reference voice clips, text scripts, and generated audio files never touch any external cloud server."
    },
    {
      q: "How does Luxe Audio compare to ElevenLabs?",
      a: "While ElevenLabs is a cloud-based paid subscription service, Luxe Audio is a 100% free local desktop app. It utilizes OpenBMB's cutting-edge VoxCPM2 2B parameter model to deliver 48kHz studio-quality zero-shot voice cloning with zero recurring fees."
    },
    {
      q: "Who developed Luxe Audio and the underlying engine?",
      a: "The underlying VoxCPM & VoxCPM2 AI model architecture and weights were created and open-sourced by OpenBMB (Open Model Initiative for Big Models). The Luxe Audio desktop app and UI were engineered by Sayak 007 (@we.arecc)."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-base">
            Everything you need to know about Luxe Audio and the VoxCPM AI engine.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-lg hover:text-blue-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
