import Link from "next/link";
import Image from "next/image";

const stats = [
  { label: "Active Members", value: "4" },
  { label: "Chicken Dinners", value: "TBD" },
  { label: "Friendly Fires", value: "∞" },
  { label: "Excuses Made", value: "999+" },
];

const requirements = [
  {
    icon: "🎮",
    title: "Own PUBG",
    desc: "That's literally it. If you have the game you're already more qualified than half our roster.",
  },
  {
    icon: "🎙️",
    title: "Team Chat",
    desc: "You must be able to communicate. Screaming into the mic counts.",
  },
  {
    icon: "😤",
    title: "No Toxicity",
    desc: "Don't be a jerk. We'll trash talk each other plenty — outsiders stay classy.",
  },
  {
    icon: "🏃",
    title: "Show Up",
    desc: "Be active. A warm body in the lobby beats an empty seat every time.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(74,124,63,0.12) 0%, transparent 70%), #0a0a0a",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,transparent,transparent 40px,rgba(255,255,255,.3) 40px,rgba(255,255,255,.3) 41px),repeating-linear-gradient(90deg,transparent,transparent 40px,rgba(255,255,255,.3) 40px,rgba(255,255,255,.3) 41px)",
          }}
        />
        <div className="relative fade-in-up">
          <div className="flex justify-center mb-6">
            <Image
              src="/i95pubg.jpg"
              alt="I95 Clan Logo"
              width={180}
              height={180}
              className="rounded-2xl shadow-2xl shadow-black/60 ring-2 ring-[#c9a84c]/30"
              priority
              unoptimized
            />
          </div>
          <p className="text-[#c9a84c] text-sm font-bold tracking-[0.3em] uppercase mb-4">
            PlayerUnknown&apos;s Battlegrounds
          </p>
          <h1 className="text-7xl md:text-9xl font-black tracking-widest text-white mb-2">
            [I95]
          </h1>
          <p className="text-xl md:text-2xl text-white/50 font-light mb-2">
            We survive together. We die together.
          </p>
          <p className="text-base text-white/30 mb-10">
            And we absolutely blame each other in the post-game screen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://discord.gg/nZupsHQfRv"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#c9a84c] text-black font-bold rounded hover:bg-[#e0bc5a] transition-colors pulse-gold"
            >
              Join the Clan
            </a>
            <Link
              href="/members"
              className="px-8 py-4 border border-white/20 text-white font-medium rounded hover:bg-white/5 transition-colors"
            >
              Meet the Squad
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 text-xs animate-bounce">
          ↓ scroll
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-3xl font-black text-[#c9a84c]">{s.value}</p>
              <p className="text-xs text-white/40 uppercase tracking-widest mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-24 text-center">
        <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3">Who we are</p>
        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
          Not pros. Not toxic.<br />Definitely not quiet.
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
          I95 is a PUBG clan built on one thing: showing up. We&apos;re not here to stream,
          we&apos;re not here to go viral — we&apos;re here to land hot, argue about who took
          the good loot, and somehow make it to the final circle before throwing it all away.
        </p>
        <p className="text-white/30 text-sm mt-4 italic">
          &quot;100% of our members are confident in the lobby. 0% are clutch when it counts.&quot;
        </p>
      </section>

      {/* Requirements */}
      <section className="bg-white/[0.02] border-y border-white/10 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-[#c9a84c] text-xs font-bold tracking-[0.3em] uppercase mb-3 text-center">
            Requirements
          </p>
          <h2 className="text-3xl font-black text-white text-center mb-12">
            Think you have what it takes?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {requirements.map((r) => (
              <div
                key={r.title}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:-translate-y-1 hover:border-[#c9a84c]/40 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-bold text-white mb-2">{r.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-4 py-28 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
          Ready to die with us?
        </h2>
        <p className="text-white/40 mb-10 text-lg">
          Join our Discord. Introduce yourself. Try not to third-party us on day one.
        </p>
        <a
          href="https://discord.gg/nZupsHQfRv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 bg-[#5865F2] text-white font-bold text-lg rounded hover:bg-[#4752c4] transition-colors"
        >
          Join our Discord →
        </a>
      </section>
    </>
  );
}
