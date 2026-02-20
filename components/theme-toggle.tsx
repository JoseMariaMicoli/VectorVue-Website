'use client';

import { useTheme } from 'next-themes';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = typeof resolvedTheme !== 'undefined';

  if (!mounted) {
    return <div className="h-9 w-9 rounded-md border border-border bg-background" aria-hidden="true" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label="Toggle color mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-sm text-foreground transition-colors hover:bg-muted"
    >
      {isDark ? 'L' : 'D'}
    </button>
  );
}
