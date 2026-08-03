"use client";

import { useState } from "react";
import { Mail, Send, Loader2, CheckCircle2, Sparkles } from "lucide-react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://isayak007.vercel.app/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
        setErrorMsg("Failed to subscribe. Please try again.");
      }
    } catch (err) {
      console.error("Newsletter submission error:", err);
      setStatus("error");
      setErrorMsg("Network error. Please check your connection.");
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto shadow-md">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Stay Updated on New AI Releases
          </h2>

          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Subscribe to our official newsletter to get instant updates on new free desktop tools, model updates, and AI workflows from Sayak 007.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 pt-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                className="flex-1 px-5 py-4 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white shadow-sm text-sm font-medium"
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success" || !email}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-4 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 shrink-0 disabled:opacity-60 text-sm"
              >
                {status === "loading" ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </>
                )}
              </button>
            </div>

            {status === "success" && (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>You're in! Welcome email sent to your inbox.</span>
              </div>
            )}

            {status === "error" && (
              <p className="text-xs text-red-600 font-semibold">{errorMsg}</p>
            )}

            <p className="text-xs text-slate-400 font-medium">
              Zero spam. Unsubscribe anytime with 1-click.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}
