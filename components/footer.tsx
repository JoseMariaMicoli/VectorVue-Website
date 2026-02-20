import Link from 'next/link';
import { Container } from '@/components/container';

export function Footer() {
  return (
    <footer className="border-t border-border/80 py-10">
      <Container className="flex flex-col gap-5 text-sm text-foreground/70 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} VectorVue by NyxeraLabs. Commercial security assurance platform.</p>
        <div className="flex gap-5">
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
