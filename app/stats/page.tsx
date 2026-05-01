const members = [
  { tag: "unclutchable", emoji: "👑" },
  { tag: "zendii_.", emoji: "🗺️" },
  { tag: "mixander", emoji: "🚗" },
  { tag: "KurV", emoji: "🎒" },
];

const trackers = [
  {
    name: "PUBG OP.GG",
    url: (tag: string) => `https://pubg.op.gg/user/${tag}`,
    desc: "K/D, win rate, damage per match",
    color: "#c9a84c",
  },
  {
    name: "Tracker.gg",
    url: (tag: string) => `https://tracker.gg/pubg/profile/steam/${tag}/overview`,
    desc: "Detailed seasonal stats",
    color: "#4a7c3f",
  },
  {
    name: "PUBG Lookup",
    url: (tag: string) => `https://pubglookup.com/players/steam/${tag}`,
    desc: "Match history & recent games",
    color: "#5865F2",
  },
];

export default function StatsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Performance</p>
        <h1 className="text-5xl font-black text-white mb-4">Squad Stats</h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          The numbers don&apos;t lie. Unfortunately.
        </p>
      </div>

      <div className="space-y-10">
        {members.map((m) => (
          <div key={m.tag} className="bg-white/[0.03] border border-white/10 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">{m.emoji}</span>
              <h2 className="text-2xl font-black text-white">{m.tag}</h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              {trackers.map((t) => (
                <a
                  key={t.name}
                  href={t.url(m.tag)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col gap-2 p-5 bg-white/[0.03] border border-white/10 rounded-lg hover:border-white/25 hover:-translate-y-0.5 transition-all duration-150"
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest"
                    style={{ color: t.color }}
                  >
                    {t.name}
                  </span>
                  <span className="text-white/40 text-sm">{t.desc}</span>
                  <span className="text-white/20 text-xs mt-auto group-hover:text-white/50 transition-colors">
                    View stats →
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-white/[0.02] border border-white/10 rounded-xl text-center">
        <p className="text-white/30 text-sm">
          💡 Live embedded stats coming soon. For now, click above to humble yourself.
        </p>
      </div>
    </div>
  );
}
