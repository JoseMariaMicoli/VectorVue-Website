import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { siteConfig } from '@/lib/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/70 bg-[#0a1220] py-8 text-slate-200 sm:py-10 3xl:py-12">
      <Container className="flex flex-col gap-5 text-sm text-slate-300 md:flex-row md:items-center md:justify-between 3xl:text-base">
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src="/branding/nyxera-logo.png" alt="NyxeraLabs logo" fill className="object-contain" />
            </div>
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">NyxeraLabs</span>
          </div>
          <p>VectorVue by NyxeraLabs — All Rights Reserved © {year}</p>
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
          <a href={siteConfig.githubUrl} className="hover:text-white">
            GitHub
          </a>
          <a href="https://nyxera.cloud" className="hover:text-white">
            NyxeraLabs
          </a>
          <a href="https://spectrastrike.nyxera.cloud" className="hover:text-white">
            SpectraStrike
          </a>
        </div>
      </Container>
    </footer>
  );
}
