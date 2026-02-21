import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Product',
  description:
    'VectorVue by Nyxera Labs converts operational telemetry into structured, auditor-verifiable assurance evidence for continuous control effectiveness.'
};

export default function ProductPage() {
  const capabilities = [
    {
      title: 'Timeline Evidence',
      description:
        'Track control validation as a chronological record aligned to security objectives.'
    },
    {
      title: 'Control Effectiveness',
      description: 'Measure whether controls function over time - not just whether they exist.'
    },
    {
      title: 'Exportable Proof',
      description: 'Generate structured evidence artifacts for customer reviews and audits.'
    },
    {
      title: 'Continuous Compliance',
      description: 'Map validated controls to compliance objectives and maintain readiness across audit cycles.'
    }
  ];

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <div className="grid items-start gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_460px] 3xl:grid-cols-[minmax(0,1fr)_560px]">
        <SectionTitle eyebrow="Product" title="VectorVue — Security Validation Infrastructure">
          VectorVue converts operational telemetry into structured, auditor-verifiable assurance evidence so security and
          compliance teams can demonstrate control effectiveness continuously.
        </SectionTitle>
        <div className="surface-panel-elevated p-3">
          <Image
            src="/images/vectorvue-hero.png"
            alt="VectorVue evidence timeline"
            width={1536}
            height={1024}
            className="h-auto w-full rounded-xl"
          />
        </div>
      </div>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
        {capabilities.map((capability) => (
          <article key={capability.title} className="surface-panel p-7">
            <h3 className="text-lg font-semibold sm:text-xl">{capability.title}</h3>
            <p className="mt-3 text-secondary">{capability.description}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
