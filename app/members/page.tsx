import Link from "next/link";

const members = [
  {
    tag: "unclutchable",
    role: "Founder · The Last Man Standing",
    emoji: "👑",
    desc: "Built this clan from nothing. Somehow always makes it to the final circle. Somehow never wins. Morale would collapse without him. So would the Discord server.",
    color: "#c9a84c",
  },
  {
    tag: "zendii_.",
    role: "The Strategist",
    emoji: "🗺️",
    desc: "Has a plan for every drop zone, every rotation, every engagement. Executes approximately zero of them. Very confident about it, though.",
    color: "#4a7c3f",
  },
  {
    tag: "mixander",
    role: "The Driver",
    emoji: "🚗",
    desc: "Will drive the squad anywhere — into buildings, off bridges, directly into the blue zone. Navigation is a suggestion. Momentum is a lifestyle.",
    color: "#5865F2",
  },
  {
    tag: "KurV",
    role: "The Loot Goblin",
    emoji: "🎒",
    desc: "Has 400 bandages, 200 energy drinks, and somehow zero ammo. Will spend 8 minutes looting a warehouse to die to a pan.",
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
