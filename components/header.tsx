import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { navItems } from '@/lib/site';
import { Container } from '@/components/container';

const ThemeToggle = dynamic(() => import('@/components/theme-toggle').then((mod) => mod.ThemeToggle), {
  ssr: false
});

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-soft backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-0 text-foreground">
          <div className="relative h-12 w-12">
            <Image src="/VectorVueLogo-transp.png" alt="VectorVue logo" fill className="object-contain" priority />
          </div>
          <span className="font-brand hidden pl-2 text-base font-extrabold leading-none text-foreground lg:inline">VectorVue</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-secondary transition-colors hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primaryHover md:inline-flex"
          >
            Request Pilot
          </Link>
        </div>
      </Container>
    </header>
  );
}
