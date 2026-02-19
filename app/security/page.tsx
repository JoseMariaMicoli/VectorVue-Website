import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Security',
  description: 'VectorVue architecture principles: minimal data collection, cryptographic integrity, and tenant isolation.'
};

export default function SecurityPage() {
  const principles = [
    {
      title: 'No Sensitive Data Storage',
      text: 'VectorVue is designed to avoid retaining sensitive customer content. Evidence artifacts focus on control outcomes and verification metadata.'
    },
    {
      title: 'Cryptographic Integrity',
      text: 'Evidence records include integrity protections to detect tampering and support trusted, repeatable verification workflows.'
    },
    {
      title: 'Tenant Isolation',
      text: 'Logical separation and strict access boundaries ensure each organization can operate independently with controlled visibility.'
    }
  ];

  return (
    <Container className="py-16 sm:py-20">
      <SectionTitle eyebrow="Security Architecture" title="Designed for assurance, built with restraint">
        The platform is engineered to minimize risk exposure while preserving proof quality for auditors, customers, and internal governance.
      </SectionTitle>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {principles.map((principle) => (
          <article key={principle.title} className="rounded-xl border border-border p-7">
            <h3 className="text-xl font-semibold">{principle.title}</h3>
            <p className="mt-3 text-foreground/70">{principle.text}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
