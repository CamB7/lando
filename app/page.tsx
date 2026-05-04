import Image from "next/image";

const GITHUB_REPO = "https://github.com/CamB7/lando";

const japanPhotos = [
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
    alt: "Fushimi Inari shrine torii gates in Kyoto",
  },
  {
    src: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80",
    alt: "Mount Fuji and cherry blossoms",
  },
  {
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80",
    alt: "Shibuya crossing in Tokyo at night",
  },
  {
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
    alt: "Traditional Japanese temple architecture",
  },
];

const features = [
  {
    title: "Trips in one timeline",
    body: "Lay out days, cities, and transport so the whole route reads like a story—not a spreadsheet.",
  },
  {
    title: "Saved places & maps",
    body: "Bookmark neighborhoods, cafés, and viewpoints with context so you remember why you saved them.",
  },
  {
    title: "Docs in one pocket",
    body: "Keep confirmation codes, addresses, and quick notes beside each stop—fewer screenshots, less chaos.",
  },
  {
    title: "Built for wandering",
    body: "A calm, dark UI that feels good on trains, in hostels, or under neon lights at midnight.",
  },
];

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
          <a href="#gallery" className="transition hover:text-orange-300">
            Gallery
          </a>
          <a href="#features" className="transition hover:text-orange-300">
            Features
          </a>
        </nav>
      </header>

      <main className="relative z-10 flex flex-1 flex-col px-6 pb-16 pt-6 sm:px-10">
        {/* Hero */}
        <section className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="mb-4 rounded-full border border-orange-500/25 bg-orange-500/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.2em] text-orange-300">
            Travel app
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl sm:leading-tight">
            Wander farther.{" "}
            <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
              Stress less.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
            Lando helps you plan routes, save spots, and keep tickets and notes
            in one calm place—so you spend less time juggling tabs and more time
            exploring.
          </p>
          <p className="mt-4 max-w-md text-sm text-zinc-500">
            Dreaming of Japan? Scroll for a taste of temples, peaks, and neon—then
            see how Lando keeps the trip organized.
          </p>
        </section>

        {/* Japan gallery */}
        <section
          id="gallery"
          className="mx-auto mt-16 w-full max-w-5xl scroll-mt-24"
        >
          <div className="mb-6 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">
                Moments from Japan
              </h2>
              <p className="text-sm text-zinc-500">
                Photos from photographers on Unsplash—inspiration for your next
                itinerary.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {japanPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 ring-1 ring-orange-500/10 transition hover:ring-orange-500/25"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-12 text-left text-xs text-zinc-300">
                  {photo.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto mt-20 w-full max-w-5xl scroll-mt-24"
        >
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">
              Everything you need on the road
            </h2>
            <p className="mt-2 text-sm text-zinc-500 sm:text-base">
              Pick what matters—Lando keeps it structured without killing the
              adventure.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <li
                key={f.title}
                className="rounded-2xl border border-white/10 bg-zinc-900/40 p-6 ring-1 ring-white/5 transition hover:border-orange-500/20 hover:ring-orange-500/15"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/15 text-sm font-bold text-orange-400">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {f.body}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Bottom CTA */}
        <section className="mx-auto mt-20 flex max-w-lg flex-col items-center text-center">
          <p className="text-sm text-zinc-500">
            Like what you see? Give the repo a star—we ship in public.
          </p>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_28px_-4px_rgba(249,115,22,0.55)] transition hover:bg-orange-400"
          >
            Star on Github -&gt;
          </a>
          <span className="mt-4 text-xs text-zinc-600">
            Free to fork · Built with Next.js
          </span>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-6 py-6 text-center text-xs text-zinc-600 sm:px-10">
        © {new Date().getFullYear()} Lando · Crafted for curious travelers
      </footer>
    </div>
  );
}
