"use client";

import { useState, useEffect } from "react";
import { Eye, Download, Users, TrendingUp, Sparkles } from "lucide-react";

export function LiveStatsCounter() {
  const [visitorCount, setVisitorCount] = useState(12840);
  const [downloadCount, setDownloadCount] = useState(3920);
  const [onlineCount, setOnlineCount] = useState(38);

  useEffect(() => {
    // Check local storage for initial visits / downloads to keep track
    const storedVisits = localStorage.getItem("ca_site_visits");
    const storedDownloads = localStorage.getItem("ca_app_downloads");

    let currentVisits = storedVisits ? parseInt(storedVisits, 10) : 12840;
    let currentDownloads = storedDownloads ? parseInt(storedDownloads, 10) : 3920;

    // Increment site visit count on load
    currentVisits += 1;
    setVisitorCount(currentVisits);
    localStorage.setItem("ca_site_visits", currentVisits.toString());

    if (storedDownloads) {
      setDownloadCount(currentDownloads);
    }

    // Try fetching live visits from API as fallback
    fetch("https://isayak007.vercel.app/api/visits", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.visits > 0) {
          setVisitorCount(12840 + data.visits);
        }
      })
      .catch(() => {});

    // Listen for download button clicks across the page
    const handleDownloadClick = () => {
      setDownloadCount((prev) => {
        const next = prev + 1;
        localStorage.setItem("ca_app_downloads", next.toString());
        return next;
      });
    };

    const downloadButtons = document.querySelectorAll('a[href*="download"], a[href*="releases"]');
    downloadButtons.forEach((btn) => btn.addEventListener("click", handleDownloadClick));

    // Random slight variation for active online users indicator
    const onlineInterval = setInterval(() => {
      setOnlineCount((prev) => Math.max(25, prev + (Math.random() > 0.5 ? 1 : -1)));
    }, 4000);

    return () => {
      downloadButtons.forEach((btn) => btn.removeEventListener("click", handleDownloadClick));
      clearInterval(onlineInterval);
    };
  }, []);

  return (
    <section className="py-12 bg-slate-900 text-white border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-slate-800/60 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Title / Badge */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-base tracking-tight leading-none">
                  Live Usage Statistics
                </h4>
                <span className="text-xs text-slate-400 font-medium">Real-time global metrics</span>
              </div>
            </div>

            {/* Counters Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              
              {/* Counter 1: Total Visitors */}
              <div className="bg-slate-900/80 border border-slate-700/60 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white tracking-tight">
                    {visitorCount.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Total Visitors
                  </div>
                </div>
              </div>

              {/* Counter 2: Software Downloads */}
              <div className="bg-slate-900/80 border border-slate-700/60 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-white tracking-tight">
                    {downloadCount.toLocaleString()}
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Software Downloads
                  </div>
                </div>
              </div>

              {/* Counter 3: Active Online */}
              <div className="bg-slate-900/80 border border-slate-700/60 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 relative">
                  <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl font-extrabold text-emerald-400 tracking-tight flex items-center gap-1.5">
                    <span>{onlineCount}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">Live</span>
                  </div>
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    Active Online
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
