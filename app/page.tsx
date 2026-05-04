const GITHUB_REPO = "https://github.com/CamB7/lando";

export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(249,115,22,0.25),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:48px_48px]"
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/15 text-lg font-semibold text-orange-400 ring-1 ring-orange-500/30">
            L
          </span>
          <span className="text-sm font-medium tracking-wide text-zinc-300">
            Lando
          </span>
        </div>
        <nav className="hidden gap-6 text-sm text-zinc-400 sm:flex">
          <span className="cursor-default">Trips</span>
          <span className="cursor-default">Places</span>
          <span className="cursor-default">Guides</span>
        </nav>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-10 sm:px-10">
        <p className="mb-4 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
          Travel app
        </p>
        <h1 className="max-w-2xl text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl sm:leading-tight">
          Wander farther.{" "}
          <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            Stress less.
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-center text-base leading-relaxed text-zinc-400 sm:text-lg">
          Lando helps you plan routes, save spots, and keep tickets and notes in
          one calm place—so you spend less time juggling tabs and more time
          exploring.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-[0_0_24px_-4px_rgba(249,115,22,0.65)] transition hover:bg-orange-400"
          >
            Star on Github -&gt;
          </a>
          <span className="text-sm text-zinc-500">
            Free to fork · Built with Next.js
          </span>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-6 py-6 text-center text-xs text-zinc-600 sm:px-10">
        © {new Date().getFullYear()} Lando · Crafted for curious travelers
      </footer>
    </div>
  );
}
