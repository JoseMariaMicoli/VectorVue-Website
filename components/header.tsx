import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/site';
import { Container } from '@/components/container';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/95 shadow-soft backdrop-blur">
      <Container className="flex min-h-16 items-center justify-between gap-3 py-3 lg:min-h-20">
        <Link href="/" className="flex min-w-0 items-center gap-1 text-foreground sm:gap-2">
          <div className="relative h-10 w-10 shrink-0 sm:h-12 sm:w-12">
            <Image src="/VectorVueLogo-transp.png" alt="VectorVue logo" fill className="object-contain" priority />
          </div>
          <span className="font-brand truncate pl-1 text-sm font-extrabold leading-none text-foreground sm:text-base lg:pl-2">VectorVue</span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
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
            className="hidden rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primaryHover lg:inline-flex"
          >
            Request Pilot
          </Link>
          <details className="group relative lg:hidden">
            <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center rounded-md border border-border bg-surface px-3 text-sm text-foreground transition-colors hover:bg-hover">
              Menu
            </summary>
            <div className="absolute right-0 top-11 w-56 rounded-lg border border-border bg-surfaceElevated p-2 shadow-layered">
              <nav className="flex flex-col">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-md px-3 py-2 text-sm text-secondary transition-colors hover:bg-hover hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}
