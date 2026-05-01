const placeholderMatches = [
  {
    id: 1,
    name: "I95 Internal Cup #1",
    date: "TBD",
    status: "upcoming",
    format: "Squad · TPP · Erangel",
    participants: ["K1nG_DZ", "KurrV", "Mixander", "Zendii_", "cea5ef1re"],
    winner: null,
  },
];

export default function TournamentsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Compete</p>
        <h1 className="text-5xl font-black text-white mb-4">Tournaments</h1>
        <p className="text-white/40 text-lg max-w-xl mx-auto">
          Internal scrims, squad wars, and the eternal question: who&apos;s actually the best?
        </p>
      </div>

      {/* Upcoming */}
      <div className="mb-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
          Upcoming
        </h2>
        {placeholderMatches.filter((m) => m.status === "upcoming").map((match) => (
          <div
            key={match.id}
            className="bg-white/[0.03] border border-[#c9a84c]/30 rounded-xl p-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c] bg-[#c9a84c]/10 px-3 py-1 rounded-full">
                  Upcoming
                </span>
                <h3 className="text-2xl font-black text-white mt-3">{match.name}</h3>
                <p className="text-white/40 text-sm mt-1">{match.format}</p>
              </div>
              <div className="text-right">
                <p className="text-white/30 text-xs uppercase tracking-widest">Date</p>
                <p className="text-white font-bold text-xl">{match.date}</p>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-3">Participants</p>
              <div className="flex flex-wrap gap-3">
                {match.participants.map((p) => (
                  <span
                    key={p}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white/60 font-medium"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Past results placeholder */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-6">
          Past Results
        </h2>
        <div className="bg-white/[0.02] border border-white/10 rounded-xl p-12 text-center">
          <p className="text-4xl mb-4">🏆</p>
          <p className="text-white/40 text-sm">No results yet.</p>
          <p className="text-white/20 text-xs mt-2">
            Probably because nobody can agree on a time to play.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <p className="text-white/30 text-sm mb-4">Want to set up a match or tournament?</p>
        <a
          href="https://discord.gg/nZupsHQfRv"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e0bc5a] transition-colors"
        >
          Coordinate in Discord
        </a>
      </div>
    </div>
  );
}
