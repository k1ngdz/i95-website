import Link from "next/link";

const members = [
  {
    tag: "K1nG_DZ",
    role: "Founder · The Navigator",
    emoji: "👑",
    desc: "Always has a route to the final circle — usually straight through an enemy squad. Spends the whole match preaching patience and avoidance, then calls a rotation that drops the entire team into a hot zone. Gets us to the last circle more than anyone. Gets us killed there too.",
    color: "#c9a84c",
  },
  {
    tag: "Zendii_",
    role: "Founder · The Medic",
    emoji: "🗺️",
    desc: "The only one who actually carries a medkit. Will heal you — eventually. Usually after you've already died, or mid-gunfight when you needed a revive ten seconds ago. Fully committed to keeping the squad alive, just never quite on time.",
    color: "#4a7c3f",
  },
  {
    tag: "Mixander",
    role: "Founder · The Last One Standing",
    emoji: "🚗",
    desc: "Never dies in the fight because he's never actually in it. By the time he shows up, the gunfight is over, the zone has moved, and somehow he's still alive. Consistently last standing. Consistently late.",
    color: "#5865F2",
  },
  {
    tag: "KurrV",
    role: "Founder · The Loot Goblin",
    emoji: "🎒",
    desc: "Somehow first on site every time there's a level 3 vest nearby. Mid-firefight? Doesn't matter — there's a crate 200 meters away and he's already sprinting. Always has every attachment except the ones you need. The squad is getting third-partied and he's inspecting a suppressor.",
    color: "#e05c5c",
  },
];

export default function MembersPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">The Roster</p>
        <h1 className="text-5xl font-black text-white mb-4">Meet the Squad</h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Four players. One dream. Zero wins. Infinite excuses.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {members.map((m) => (
          <div
            key={m.tag}
            className="group bg-white/[0.03] border border-white/10 rounded-xl p-8 hover:-translate-y-1 transition-all duration-200 hover:border-white/20"
            style={{ borderTopColor: m.color, borderTopWidth: 3 }}
          >
            <div className="flex items-start gap-4">
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl flex-shrink-0"
                style={{ background: `${m.color}22` }}
              >
                {m.emoji}
              </div>
              <div>
                <h2 className="text-xl font-black text-white">{m.tag}</h2>
                <p className="text-xs font-semibold uppercase tracking-widest mt-1" style={{ color: m.color }}>
                  {m.role}
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mt-5">{m.desc}</p>
            <a
              href={`https://pubg.op.gg/user/${m.tag}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-5 text-xs font-medium text-white/30 hover:text-white transition-colors"
            >
              View PUBG Stats →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/30 text-sm mb-6">Think you belong here?</p>
        <a
          href="https://discord.gg/nZupsHQfRv"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e0bc5a] transition-colors"
        >
          Apply via Discord
        </a>
      </div>
    </div>
  );
}
