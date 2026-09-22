import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import {
  ArrowDownRight,
  ArrowUpRight,
  Dribbble,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  MoveRight,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    reveals.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="page-shell min-h-[100dvh]" data-testid="page-portfolio">
      <header className="site-header" data-testid="site-header">
        <div className="section-wrap flex items-center justify-between py-6">
          <a
            href="#top"
            className="focus-ring text-lg font-extrabold tracking-[-0.08em]"
            data-testid="link-home"
            onClick={closeMenu}
          >
            MV<span className="text-[hsl(var(--primary))]">.</span>
          </a>
          <nav
            className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[4.7rem] flex-col gap-5 rounded-2xl border border-[hsl(var(--foreground)/.14)] bg-[hsl(var(--card)/.98)] p-6 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Main navigation"
            data-testid="nav-main"
          >
            <a href="#work" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-work" onClick={closeMenu}>Work</a>
            <a href="#about" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-about" onClick={closeMenu}>About</a>
            <a href="#capabilities" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-capabilities" onClick={closeMenu}>Capabilities</a>
            <a href="#contact" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--background))] transition-transform hover:-translate-y-0.5" data-testid="link-contact" onClick={closeMenu}>
              Let's talk <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </nav>
          <button
            type="button"
            className="focus-ring rounded-full border border-[hsl(var(--foreground)/.18)] p-2 md:hidden"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            data-testid="button-mobile-menu"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[43rem] items-center overflow-hidden pb-20 pt-36 md:min-h-[49rem] md:pb-28 md:pt-44" data-testid="section-hero">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="section-wrap relative grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <p className="hero-reveal eyebrow mb-7 flex items-center gap-3 text-[hsl(var(--primary))]" data-testid="text-hero-kicker">
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                Independent creative director / New York + everywhere
              </p>
              <h1 className="hero-reveal hero-reveal-delay-1 max-w-5xl text-[clamp(3.7rem,10vw,9rem)] font-extrabold leading-[.87] tracking-[-.095em]" data-testid="text-hero-title">
                Make the <span className="serif text-[hsl(var(--primary))]">good</span><br />
                stuff <span className="serif italic">matter.</span>
              </h1>
              <div className="hero-reveal hero-reveal-delay-2 mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end">
                <p className="max-w-sm text-base leading-7 text-[hsl(var(--muted-foreground))]" data-testid="text-hero-intro">
                  I help ambitious people turn fuzzy ideas into clear, memorable brands and digital experiences.
                </p>
                <a href="#work" className="focus-ring group inline-flex w-fit items-center gap-3 border-b border-[hsl(var(--foreground))] pb-2 text-sm font-bold" data-testid="link-hero-work">
                  See selected work <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </div>
            <div className="hero-reveal hero-reveal-delay-3 relative hidden h-56 lg:block" aria-hidden="true">
              <div className="hero-orb absolute right-8 top-3 h-44 w-44 rounded-full border border-[hsl(var(--foreground)/.35)] bg-[hsl(var(--accent))] shadow-[1.5rem_1.3rem_0_hsl(var(--primary))]">
                <div className="absolute inset-5 rounded-full border border-[hsl(var(--foreground)/.4)]" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono text-[.58rem] font-bold uppercase tracking-[.24em]">make / repeat</span>
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[hsl(var(--foreground)/.16)] py-4" aria-label="Areas of practice" data-testid="marquee-practice">
          <div className="marquee-track">
            {['Brand worlds', 'Digital products', 'Campaigns', 'Creative direction', 'Brand worlds', 'Digital products', 'Campaigns', 'Creative direction'].map((item, index) => (
              <span className="marquee-item whitespace-nowrap font-mono text-[.65rem] font-medium uppercase tracking-[.16em]" key={`${item}-${index}`} data-testid={`text-practice-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="work" className="section-wrap py-28 md:py-40" data-testid="section-work">
          <div className="reveal mb-14 flex items-end justify-between gap-6 md:mb-20">
            <div>
              <p className="eyebrow mb-4 text-[hsl(var(--primary))]" data-testid="text-work-kicker">01 / Selected work</p>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-[.95] tracking-[-.065em] md:text-6xl" data-testid="text-work-heading">
                A few things I’m proud to have <span className="serif italic font-normal">made.</span>
              </h2>
            </div>
            <p className="hidden max-w-[13rem] text-right text-sm leading-6 text-[hsl(var(--muted-foreground))] md:block" data-testid="text-work-note">
              Small roster.<br />Big attention to detail.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.18fr_.82fr]">
            <article className="project-card reveal" data-testid="card-project-field">
              <div className="project-visual project-visual-coral">
                <span className="absolute left-6 top-6 z-10 eyebrow text-[#f7f3eb]">01 — Brand + digital</span>
                <div className="project-ui-window">
                  <div className="window-topbar"><span className="window-dot" /><span className="window-dot" /><span className="window-dot" /></div>
                  <div className="project-coral-art" />
                </div>
                <span className="absolute bottom-6 right-6 z-10 font-mono text-xs text-[#f7f3eb]">FIELD GUIDE / 2024</span>
              </div>
              <div className="p-7 md:p-9">
                <div className="mb-7 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-3xl font-extrabold tracking-[-.06em]" data-testid="title-project-field">Field Notes</h3>
                    <p className="mt-2 text-sm text-[hsl(var(--muted-foreground))]" data-testid="text-project-field-description">A new identity for curious people and the places they go.</p>
                  </div>
                  <span className="rounded-full bg-[hsl(var(--muted))] px-3 py-1 font-mono text-[.6rem] uppercase tracking-[.12em]" data-testid="status-project-field">Live</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex gap-2">
                    {['Strategy', 'Identity', 'Web'].map((tag) => <span className="rounded-full border border-[hsl(var(--foreground)/.15)] px-3 py-1.5 font-mono text-[.58rem] uppercase tracking-[.1em]" key={tag} data-testid={`tag-field-${tag.toLowerCase()}`}>{tag}</span>)}
                  </div>
                  <a href="#contact" className="focus-ring group inline-flex items-center gap-2 text-sm font-bold" data-testid="link-project-field">
                    Read the story <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </div>
            </article>

            <article className="project-card reveal reveal-delay-1" data-testid="card-project-still">
              <div className="project-visual project-visual-ink">
                <span className="absolute left-6 top-6 z-10 eyebrow text-[#f1ede3]">02 — Campaign</span>
                <div className="project-ink-poster">
                  <div className="poster-mark">STILL<br />MOVING</div>
                  <span className="poster-title">Take<br />your<br />time.</span>
                  <span className="font-mono text-[.57rem] uppercase tracking-[.15em]">A film series for the in-between</span>
                </div>
                <span className="absolute bottom-6 right-6 z-10 font-mono text-xs text-[#f1ede3]">STILL MOVING / 2023</span>
              </div>
              <div className="p-7 md:p-9">
                <p className="eyebrow mb-5 text-[hsl(var(--primary))]">Culture / Editorial</p>
                <h3 className="text-3xl font-extrabold tracking-[-.06em]" data-testid="title-project-still">Still Moving</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]" data-testid="text-project-still-description">A campaign about finding momentum without rushing the moment.</p>
                <a href="#contact" className="focus-ring group mt-8 inline-flex items-center gap-2 text-sm font-bold" data-testid="link-project-still">
                  Explore project <MoveRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          </div>

          <article className="project-card reveal mt-8 grid lg:grid-cols-[.8fr_1.2fr]" data-testid="card-project-morrow">
            <div className="project-visual project-visual-lime min-h-[20rem] lg:min-h-[25rem]">
              <span className="absolute left-6 top-6 z-10 eyebrow">03 — Product direction</span>
              <div className="project-lime-art"><span className="project-lime-word">morrow</span></div>
            </div>
            <div className="flex flex-col justify-between p-7 md:p-10">
              <div>
                <p className="eyebrow mb-5 text-[hsl(var(--primary))]">Wellbeing / Digital product</p>
                <h3 className="max-w-md text-4xl font-extrabold leading-[.92] tracking-[-.07em] md:text-6xl" data-testid="title-project-morrow">A softer way to plan what’s next.</h3>
                <p className="mt-6 max-w-md text-sm leading-7 text-[hsl(var(--muted-foreground))]" data-testid="text-project-morrow-description">Naming, voice, and an intuitive ritual for a new kind of daily planner.</p>
              </div>
              <a href="#contact" className="focus-ring group mt-10 inline-flex w-fit items-center gap-2 border-b border-[hsl(var(--foreground))] pb-2 text-sm font-bold" data-testid="link-project-morrow">
                See the thinking <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </article>
        </section>

        <section id="about" className="bg-[hsl(var(--secondary))] py-28 text-[hsl(var(--secondary-foreground))] md:py-40" data-testid="section-about">
          <div className="section-wrap grid gap-14 lg:grid-cols-[.74fr_1.26fr]">
            <div className="reveal">
              <p className="eyebrow mb-6 text-[hsl(var(--accent))]" data-testid="text-about-kicker">02 / A little context</p>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[hsl(var(--accent))]" />
                <span className="font-mono text-[.66rem] uppercase tracking-[.14em] text-[hsl(var(--secondary-foreground)/.6)]">Mara Velez, creative director</span>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <h2 className="max-w-4xl text-4xl font-extrabold leading-[.97] tracking-[-.065em] md:text-7xl" data-testid="text-about-heading">
                I’m interested in the space between <span className="serif italic font-normal text-[hsl(var(--accent))]">a sharp idea</span> and a feeling you can’t quite name.
              </h2>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-[hsl(var(--secondary-foreground)/.66)]" data-testid="text-about-story">
                For the last decade, I’ve partnered with founders, editors, and teams who care about doing work with a pulse. My role is to find the honest signal, give it a distinct shape, and help it travel — from first sketch to final launch.
              </p>
              <a href="#contact" className="focus-ring group mt-10 inline-flex items-center gap-3 border-b border-[hsl(var(--accent)/.65)] pb-2 text-sm font-bold text-[hsl(var(--accent))]" data-testid="link-about-contact">
                Start a conversation <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>
        </section>

        <section id="capabilities" className="section-wrap py-28 md:py-40" data-testid="section-capabilities">
          <div className="reveal grid gap-12 lg:grid-cols-[.66fr_1.34fr]">
            <div>
              <p className="eyebrow mb-5 text-[hsl(var(--primary))]" data-testid="text-capabilities-kicker">03 / How I can help</p>
              <h2 className="max-w-xs text-4xl font-extrabold leading-[.94] tracking-[-.06em] md:text-6xl" data-testid="text-capabilities-heading">The right kind of <span className="serif italic font-normal">help.</span></h2>
            </div>
            <div>
              {[
                ['01', 'Brand strategy', 'The clear point of view underneath everything. Positioning, naming, narrative, and a plan for making it matter.'],
                ['02', 'Identity systems', 'A visual and verbal language with enough range to grow, and enough character to be remembered.'],
                ['03', 'Digital direction', 'Useful, expressive experiences that turn an audience into participants — not just visitors.'],
                ['04', 'Creative partnership', 'A senior brain in the room when you need one. Calm when it’s messy, opinionated when it counts.'],
              ].map(([number, title, description], index) => (
                <div className={`capability-row reveal reveal-delay-${Math.min(index + 1, 3)} grid gap-3 py-6 md:grid-cols-[3rem_1fr_1fr] md:items-start md:gap-8`} key={number} data-testid={`row-capability-${number}`}>
                  <span className="font-mono text-xs text-[hsl(var(--primary))]" data-testid={`number-capability-${number}`}>{number}</span>
                  <h3 className="text-xl font-bold tracking-[-.03em]" data-testid={`title-capability-${number}`}>{title}</h3>
                  <p className="max-w-sm text-sm leading-6 text-[hsl(var(--muted-foreground))]" data-testid={`text-capability-${number}`}>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap pb-10 pt-4 md:pb-16" data-testid="section-contact">
          <div className="contact-panel reveal px-7 py-14 md:px-16 md:py-20">
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow mb-7 text-[hsl(var(--accent))]" data-testid="text-contact-kicker">04 / Your turn</p>
              <h2 className="text-5xl font-extrabold leading-[.9] tracking-[-.08em] md:text-8xl" data-testid="text-contact-heading">
                Have a good<br /><span className="serif italic font-normal text-[hsl(var(--accent))]">one?</span> Let’s talk.
              </h2>
              <p className="mt-8 max-w-md text-base leading-7 text-[hsl(var(--secondary-foreground)/.68)]" data-testid="text-contact-description">
                Tell me what you’re making, what’s stuck, or what you can’t stop thinking about. I’m usually at my best somewhere in the middle of a good question.
              </p>
              <a href="mailto:hello@maravelez.studio" className="contact-link focus-ring mt-10 inline-flex items-center gap-3 border-b border-[hsl(var(--secondary-foreground)/.5)] pb-2 text-lg font-bold" data-testid="link-email">
                <Mail size={19} /> hello@maravelez.studio
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between" data-testid="site-footer">
        <div>
          <p className="text-sm font-extrabold tracking-[-.05em]" data-testid="text-footer-name">Mara Velez<span className="text-[hsl(var(--primary))]">.</span></p>
          <p className="mt-1 font-mono text-[.62rem] uppercase tracking-[.13em] text-[hsl(var(--muted-foreground))]" data-testid="text-footer-location">Independent creative director / NYC</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="focus-ring text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" aria-label="LinkedIn" data-testid="link-linkedin"><Linkedin size={17} /></a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="focus-ring text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" aria-label="Dribbble" data-testid="link-dribbble"><Dribbble size={17} /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="focus-ring text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" aria-label="Instagram" data-testid="link-instagram"><Instagram size={17} /></a>
          <a href="#top" className="focus-ring ml-4 inline-flex items-center gap-2 font-mono text-[.62rem] uppercase tracking-[.1em]" data-testid="link-back-to-top">Back to top <ArrowUpRight size={14} /></a>
        </div>
        <p className="font-mono text-[.6rem] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]" data-testid="text-footer-copyright">© 2025 / Make good things.</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
