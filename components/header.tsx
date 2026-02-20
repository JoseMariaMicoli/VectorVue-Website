import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/site';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-foreground">
          <div className="relative h-10 w-36">
            <Image src="/branding/vectorvue-logo.png" alt="VectorVue logo" fill className="object-contain" priority />
          </div>
          <span className="font-brand hidden text-sm text-foreground lg:inline">VectorVue</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-foreground/80 transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Request Pilot
          </Link>
        </div>
      </Container>
    </header>
  );
}
