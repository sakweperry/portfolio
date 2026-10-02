import { useState } from "react";
import { content } from "./content";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const links = ["Work", "About", "Blog", "Resume", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-accent-cyan">
          perry<span className="text-gray-500">.</span>dev
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-gray-300"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/5 bg-ink-900">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-sm text-gray-300 hover:bg-ink-700"
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section
    id="top"
    className="relative min-h-screen flex items-center grid-bg animate-grid-pan"
  >
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/60 to-ink-900 pointer-events-none" />

    <div className="relative max-w-6xl mx-auto px-6 py-24">
      <p className="font-mono text-sm text-accent-cyan mb-4">
        <span className="text-gray-500">$</span> whoami
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
        <span className="gradient-text">{content.name}</span>
      </h1>
      <p className="font-mono text-lg md:text-xl text-gray-300 mb-2">
        {content.title}
      </p>
      <p className="max-w-2xl text-gray-400 text-lg mb-10 leading-relaxed">
        {content.tagline}
      </p>

      <div className="flex flex-wrap gap-4">
        <a
          href="#work"
          className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-ink-900 font-semibold hover:opacity-90 transition"
        >
          View My Work
        </a>
        <a
          href="#resume"
          className="px-6 py-3 rounded-lg border border-white/10 text-gray-200 hover:border-accent-cyan/50 hover:text-white transition"
        >
          Download CV
        </a>
      </div>

      <div className="mt-16 flex gap-6 font-mono text-xs text-gray-500">
        <a
          href={content.links.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent-cyan"
        >
          github
        </a>
        <a
          href={content.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-accent-cyan"
        >
          linkedin
        </a>
        <a
          href={`mailto:${content.email}`}
          className="hover:text-accent-cyan"
        >
          email
        </a>
      </div>
    </div>
  </section>
);

const Section = ({ id, label, title, children }) => (
  <section id={id} className="py-24 border-t border-white/5">
    <div className="max-w-6xl mx-auto px-6">
      <p className="font-mono text-xs text-accent-cyan mb-2">{label}</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">{title}</h2>
      {children}
    </div>
  </section>
);

const Work = () => (
  <Section id="work" label="work" title="Featured Projects">
    <div className="space-y-8">
      {content.projects.map((p) => (
        <article
          key={p.id}
          className="group rounded-2xl border border-white/5 bg-ink-800/50 p-8 hover:border-accent-cyan/30 transition"
        >
          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="text-2xl font-bold text-white">{p.name}</h3>
            <span className="font-mono text-xs text-gray-500">{p.role}</span>
          </div>
          <p className="text-accent-cyan text-sm mb-6">{p.subtitle}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {p.stack.map((s) => (
              <span
                key={s}
                className="font-mono text-xs px-3 py-1 rounded-full bg-ink-700 text-gray-300"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-400 leading-relaxed">
            {p.problem && (
              <div>
                <p className="font-mono text-xs text-gray-500 mb-1">
                  problem
                </p>
                <p>{p.problem}</p>
              </div>
            )}
            <div className={p.problem ? "" : "md:col-span-2"}>
              <p className="font-mono text-xs text-gray-500 mb-1">
                what I built
              </p>
              <p>{p.solution}</p>
            </div>
            <div className={p.problem ? "md:col-span-2" : "md:col-span-2"}>
              <p className="font-mono text-xs text-gray-500 mb-1">
                 outcome
              </p>
              <p className="text-gray-300">{p.outcome}</p>
            </div>
          </div>

          {p.link && (
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 font-mono text-xs text-accent-cyan hover:text-accent-violet"
            >
              → view live
            </a>
          )}
        </article>
      ))}
    </div>
  </Section>
);

const About = () => (
  <Section id="about" label=" about" title="About Me">
    <div className="grid md:grid-cols-3 gap-12">
      <div className="md:col-span-2 space-y-4 text-gray-400 leading-relaxed whitespace-pre-line">
        {content.about}
      </div>

      <div>
        <p className="font-mono text-xs text-gray-500 mb-4"> skills</p>
        <div className="space-y-4">
          {Object.entries(content.skills).map(([cat, items]) => (
            <div key={cat}>
              <p className="text-xs text-accent-cyan font-mono mb-2">{cat}</p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-2 py-1 rounded bg-ink-700 text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

const Blog = () => (
  <Section id="blog" label="blog" title="Writing">
    <div className="grid md:grid-cols-3 gap-6">
      {content.blog.map((post) => (
        <article
          key={post.slug}
          className="rounded-2xl border border-white/5 bg-ink-800/50 p-6 hover:border-accent-violet/30 transition"
        >
          <p className="font-mono text-xs text-gray-500 mb-3">{post.date}</p>
          <h3 className="text-lg font-semibold text-white mb-3 leading-snug">
            {post.title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            {post.excerpt}
          </p>
        </article>
      ))}
    </div>
  </Section>
);

const Resume = () => (
  <Section id="resume" label="resume" title="Resume">
    <div className="rounded-2xl border border-white/5 bg-ink-800/50 p-8 flex flex-wrap items-center justify-between gap-6">
      <div>
        <p className="text-white font-semibold mb-1">
          Full-Stack Developer — CV
        </p>
        <p className="text-sm text-gray-400">
          One page. Java · Spring Boot · React · SQL.
        </p>
      </div>
      <a
        href="/resume.pdf"
        download
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-ink-900 font-semibold hover:opacity-90 transition"
      >
        Download PDF
      </a>
    </div>
  </Section>
);

const Contact = () => (
  <Section id="contact" label="contact" title="Let's Build Something">
    <p className="text-gray-400 mb-8 max-w-xl">
      I'm open to entry-level full-stack roles at startups. Reach out.
    </p>
    <div className="flex flex-wrap gap-4">
      <a
        href={`mailto:${content.email}`}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-violet text-ink-900 font-semibold hover:opacity-90 transition"
      >
        {content.email}
      </a>
      <a
        href={content.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="px-6 py-3 rounded-lg border border-white/10 text-gray-200 hover:border-accent-cyan/50 transition"
      >
        LinkedIn
      </a>
    </div>
  </Section>
);

const Footer = () => (
  <footer className="border-t border-white/5 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between gap-4 font-mono text-xs text-gray-500">
      <p>© {new Date().getFullYear()} {content.name}</p>
      <p>
        built with react · tailwind · deployed on vercel
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Work />
        <About />
        <Blog />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}