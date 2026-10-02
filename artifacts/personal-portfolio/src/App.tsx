import { useEffect, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { projects } from '@/data/projects';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Mail,
  Menu,
  Terminal,
  X,
} from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

const profile = {
  displayName: 'Victor Ajibua',
  monogram: 'VA',
  role: 'Software engineer',
  contact: 'Victorajibua14@gmail.com',
  github: 'https://github.com/Ace-g-ops',
};

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
            {profile.monogram}
            <span className="text-[hsl(var(--primary))]">.</span>
          </a>
          <nav
            className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute left-4 right-4 top-[4.7rem] flex-col gap-5 rounded-2xl border border-[hsl(var(--foreground)/.14)] bg-[hsl(var(--card)/.98)] p-6 shadow-xl md:static md:ml-auto md:mr-6 md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            aria-label="Main navigation"
            data-testid="nav-main"
          >
            <a href="#work" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-work" onClick={closeMenu}>Projects</a>
            <a href="#about" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-about" onClick={closeMenu}>About</a>
            <a href="#capabilities" className="focus-ring eyebrow text-[hsl(var(--foreground))] transition-colors hover:text-[hsl(var(--primary))]" data-testid="link-capabilities" onClick={closeMenu}>What I do</a>
            <a href="#contact" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full bg-[hsl(var(--foreground))] px-4 py-2.5 text-xs font-bold text-[hsl(var(--background))] transition-transform hover:-translate-y-0.5" data-testid="link-contact" onClick={closeMenu}>
              Let&apos;s talk <ArrowUpRight size={14} strokeWidth={2.5} />
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
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
        </div>
      </header>

      <main id="top">
        <section className="relative flex min-h-[43rem] items-center overflow-hidden pb-20 pt-36 md:min-h-[49rem] md:pb-28 md:pt-44" data-testid="section-hero">
          <div className="hero-grid absolute inset-0" aria-hidden="true" />
          <div className="section-wrap relative grid items-end gap-14 lg:grid-cols-[1.3fr_.7fr]">
            <div>
              <p className="hero-reveal eyebrow mb-7 flex items-center gap-3 text-[hsl(var(--primary))]" data-testid="text-hero-kicker">
                <span className="inline-block h-2 w-2 rounded-full bg-[hsl(var(--primary))]" />
                Software engineer / building from anywhere
              </p>
              <h1 className="hero-reveal hero-reveal-delay-1 max-w-5xl text-[clamp(3.7rem,10vw,9rem)] font-extrabold leading-[.87] tracking-[-.095em]" data-testid="text-hero-title">
                I build <span className="serif text-[hsl(var(--primary))]">useful</span><br />
                things that <span className="serif italic">last.</span>
              </h1>
              <div className="hero-reveal hero-reveal-delay-2 mt-9 flex max-w-xl flex-col gap-7 sm:flex-row sm:items-end">
                <p className="max-w-sm text-base leading-7 text-[hsl(var(--muted-foreground))]" data-testid="text-hero-intro">
                  I design, ship, and improve software for people who care about how a product works — not just how it looks.
                </p>
                <a href="#work" className="focus-ring group inline-flex w-fit items-center gap-3 border-b border-[hsl(var(--foreground))] pb-2 text-sm font-bold" data-testid="link-hero-work">
                  See selected projects <ArrowDownRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </a>
              </div>
            </div>
            <div className="hero-reveal hero-reveal-delay-3 relative hidden h-56 lg:block" aria-hidden="true">
              <div className="hero-orb absolute right-8 top-3 h-44 w-44 rounded-full border border-[hsl(var(--foreground)/.35)] bg-[hsl(var(--accent))] shadow-[1.5rem_1.3rem_0_hsl(var(--primary))]">
                <div className="absolute inset-5 rounded-full border border-[hsl(var(--foreground)/.4)]" />
                <Terminal className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" size={40} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </section>

        <div className="overflow-hidden border-y border-[hsl(var(--foreground)/.16)] py-4" aria-label="Areas of engineering practice" data-testid="marquee-practice">
          <div className="marquee-track">
            {['Product engineering', 'Backend systems', 'TypeScript', 'Technical problem solving', 'Product engineering', 'Backend systems', 'TypeScript', 'Technical problem solving'].map((item, index) => (
              <span className="marquee-item whitespace-nowrap font-mono text-[.65rem] font-medium uppercase tracking-[.16em]" key={`${item}-${index}`} data-testid={`text-practice-${index}`}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <section id="work" className="section-wrap py-28 md:py-40" data-testid="section-work">
          <div className="reveal mb-14 flex items-end justify-between gap-6 md:mb-20">
            <div>
              <p className="eyebrow mb-4 text-[hsl(var(--primary))]" data-testid="text-work-kicker">01 / Selected projects</p>
              <h2 className="max-w-2xl text-4xl font-extrabold leading-[.95] tracking-[-.065em] md:text-6xl" data-testid="text-work-heading">
                A selection of <span className="serif italic font-normal">my work.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2" data-testid="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card reveal ${index % 2 === 1 ? 'reveal-delay-1' : ''}`}
                data-testid={`card-project-${project.id}`}
                key={project.id}
              >
                <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-screenshot-link focus-ring block" aria-label={`Visit ${project.name}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image}`}
                    alt={project.imageAlt}
                    width={1024}
                    height={460}
                    loading="lazy"
                    decoding="async"
                    className="project-screenshot"
                    data-testid={`image-${project.id}`}
                  />
                </a>
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold tracking-[-.04em]" data-testid={`title-${project.id}`}>{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[hsl(var(--muted-foreground))]" data-testid={`description-${project.id}`}>{project.description}</p>
                  <p className="eyebrow mt-6 mb-3">Tech stack</p>
                  <ul className="flex flex-wrap gap-2" aria-label={`${project.name} tech stack`} data-testid={`stack-${project.id}`}>
                    {project.stack.map((technology) => (
                      <li key={technology} className="rounded-full border border-[hsl(var(--foreground)/.15)] px-3 py-1.5 font-mono text-xs">{technology}</li>
                    ))}
                  </ul>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="focus-ring mt-6 inline-flex items-center gap-2 border-b border-[hsl(var(--foreground)/.3)] pb-1 text-sm font-bold" data-testid={`link-${project.id}`}>
                    Visit project <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="bg-[hsl(var(--secondary))] py-28 text-[hsl(var(--secondary-foreground))] md:py-40" data-testid="section-about">
          <div className="section-wrap grid gap-14 lg:grid-cols-[.74fr_1.26fr]">
            <div className="reveal">
              <p className="eyebrow mb-6 text-[hsl(var(--accent))]" data-testid="text-about-kicker">02 / A little context</p>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[hsl(var(--accent))]" />
                <span className="font-mono text-[.66rem] uppercase tracking-[.14em] text-[hsl(var(--secondary-foreground)/.6)]">{profile.displayName}, software engineer</span>
              </div>
            </div>
            <div className="reveal reveal-delay-1">
              <h2 className="max-w-4xl text-4xl font-extrabold leading-[.97] tracking-[-.065em] md:text-7xl" data-testid="text-about-heading">
                I care about the space between <span className="serif italic font-normal text-[hsl(var(--accent))]">a good idea</span> and a product people can rely on.
              </h2>
              <p className="mt-10 max-w-2xl text-lg leading-8 text-[hsl(var(--secondary-foreground)/.66)]" data-testid="text-about-story">
                I like turning ambiguous problems into clear systems. That might mean shaping a calm interface, designing an API that can evolve, or tracing a hard bug until the whole team understands what happened. I&apos;m at my best close to the product and close to the people using it.
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
              <p className="eyebrow mb-5 text-[hsl(var(--primary))]" data-testid="text-capabilities-kicker">03 / What I work on</p>
              <h2 className="max-w-xs text-4xl font-extrabold leading-[.94] tracking-[-.06em] md:text-6xl" data-testid="text-capabilities-heading">Good engineering is <span className="serif italic font-normal">care.</span></h2>
            </div>
            <div>
              {[
                ['01', 'Product engineering', 'End-to-end features that connect a clear user need to reliable, maintainable software.'],
                ['02', 'Frontend systems', 'Accessible interfaces with thoughtful states, strong performance, and a visual language that holds together.'],
                ['03', 'Backend foundations', 'Typed APIs, data models, integrations, and services that make the next change easier than the last.'],
                ['04', 'Technical partnership', 'A calm, curious collaborator for architecture decisions, debugging, and the messy middle of shipping.'],
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
                Have a hard<br /><span className="serif italic font-normal text-[hsl(var(--accent))]">problem?</span> Let&apos;s talk.
              </h2>
              <p className="mt-8 max-w-md text-base leading-7 text-[hsl(var(--secondary-foreground)/.68)]" data-testid="text-contact-description">
                Tell me what you&apos;re building, what&apos;s stuck, or what you want to make more reliable. I&apos;m usually at my best somewhere in the middle of a good question.
              </p>
              <a href={`mailto:${profile.contact}`} className="contact-link focus-ring mt-10 inline-flex items-center gap-3 border-b border-[hsl(var(--secondary-foreground)/.5)] pb-2 text-lg font-bold" data-testid="link-email">
                <Mail size={19} /> {profile.contact}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="section-wrap flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between" data-testid="site-footer">
        <div>
          <p className="text-sm font-extrabold tracking-[-.05em]" data-testid="text-footer-name">{profile.displayName}<span className="text-[hsl(var(--primary))]">.</span></p>
          <p className="mt-1 font-mono text-[.62rem] uppercase tracking-[.13em] text-[hsl(var(--muted-foreground))]" data-testid="text-footer-location">{profile.role}</p>
        </div>
        <div className="flex items-center gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 text-sm text-[hsl(var(--muted-foreground))] transition-colors hover:text-[hsl(var(--foreground))]" aria-label="Victor Ajibua on GitHub" data-testid="link-github"><Github size={17} /> GitHub</a>
          <a href="#top" className="focus-ring ml-4 inline-flex items-center gap-2 font-mono text-[.62rem] uppercase tracking-[.1em]" data-testid="link-back-to-top">Back to top <ArrowUpRight size={14} /></a>
        </div>
        <p className="font-mono text-[.6rem] uppercase tracking-[.12em] text-[hsl(var(--muted-foreground))]" data-testid="text-footer-copyright">© 2025</p>
      </footer>
    </div>
  );
}

function Router() {
  return (
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