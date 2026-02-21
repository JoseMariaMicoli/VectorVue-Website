import type { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Product',
  description: 'VectorVue product overview: timeline evidence, control effectiveness, exportable proof, and continuous compliance.'
};

export default function ProductPage() {
  const capabilities = [
    {
      title: 'Timeline Evidence',
      description:
        'Track control activity as a chronological record, so teams and auditors can see exactly when controls were tested and what changed.'
    },
    {
      title: 'Control Effectiveness',
      description:
        'Measure whether controls are functioning over time, not just configured once. Surface drift and broken assumptions quickly.'
    },
    {
      title: 'Exportable Proof',
      description:
        'Package evidence and verification artifacts into exportable reports for customer security reviews and formal audits.'
    },
    {
      title: 'Continuous Compliance',
      description:
        'Map validated controls to compliance objectives and maintain readiness between audit cycles across frameworks.'
    }
  ];

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <div className="grid items-start gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_460px] 3xl:grid-cols-[minmax(0,1fr)_560px]">
        <SectionTitle eyebrow="Product" title="A system of record for provable security controls">
          VectorVue converts operational telemetry into trusted assurance evidence so security and compliance teams can demonstrate
          control performance continuously.
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
