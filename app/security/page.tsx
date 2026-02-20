import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security architecture and policy entry point for VectorVue.'
};

export default function SecurityPage() {
  return (
    <Container className="py-16 sm:py-20">
      <SectionTitle eyebrow="Security" title="Built for verifiable trust">
        VectorVue is a commercial product from NyxeraLabs focused on continuous control assurance with auditable evidence.
      </SectionTitle>
      <div className="mt-10 rounded-xl border border-border bg-muted/40 p-6">
        <p className="text-foreground/80">
          Need disclosure and reporting details? Review the full policy at{' '}
          <Link href="/security-policy" className="font-semibold text-primary underline hover:no-underline">
            /security-policy
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
