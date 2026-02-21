import { ReactNode } from 'react';

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-4xl">
      {eyebrow ? <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl 3xl:text-5xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-secondary sm:text-lg sm:leading-8 3xl:text-xl">{children}</p> : null}
    </div>
  );
}
