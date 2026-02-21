import Link from 'next/link';
import { Container } from '@/components/container';

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-[#0a1220] py-8 text-slate-200 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between 3xl:text-base">
        <div className="max-w-3xl">
          <p>© 2026 VectorVue by Nyxera Labs. All rights reserved.</p>
          <p className="mt-1">Security Validation Infrastructure Platform.</p>
        </div>
        <div className="flex flex-wrap gap-5">
          <Link href="/product" className="hover:text-white">
            Product
          </Link>
          <Link href="/use-cases" className="hover:text-white">
            Use Cases
          </Link>
          <Link href="/security" className="hover:text-white">
            Security
          </Link>
          <Link href="/security-policy" className="hover:text-white">
            Responsible Disclosure
          </Link>
          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </Container>
    </footer>
  );
}
