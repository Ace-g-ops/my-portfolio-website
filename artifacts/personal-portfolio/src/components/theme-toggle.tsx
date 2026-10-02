import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const label = `Switch to ${isDark ? 'light' : 'dark'} mode`;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-full border border-[hsl(var(--foreground)/.18)] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] transition-colors hover:bg-[hsl(var(--muted))]"
      aria-label={label}
      title={label}
      data-testid="button-theme-toggle"
    >
      {isDark ? <Sun size={19} aria-hidden="true" /> : <Moon size={19} aria-hidden="true" />}
    </button>
  );
}