import { ReactNode } from 'react';

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-lg leading-8 text-secondary">{children}</p> : null}
    </div>
  );
}
