import Link from 'next/link';
import { Container } from '@/components/container';

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-8 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-5 text-sm text-secondary md:flex-row md:items-center md:justify-between 3xl:text-base">
        <p className="max-w-3xl">© {new Date().getFullYear()} VectorVue by NyxeraLabs. Commercial security assurance platform.</p>
        <div className="flex flex-wrap gap-5">
          <Link href="/security" className="hover:text-foreground">
            Security
          </Link>
          <Link href="/security-policy" className="hover:text-foreground">
            Security Policy
          </Link>
          <Link href="/contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
