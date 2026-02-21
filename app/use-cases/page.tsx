import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Use Cases',
  description: 'How SaaS vendors, regulated organizations, and security assessment teams use VectorVue.'
};

export default function UseCasesPage() {
  const cases = [
    {
      title: 'SaaS Vendors',
      points: [
        'Accelerate security questionnaires with current evidence.',
        'Reduce sales-cycle friction for enterprise buyers.',
        'Support SOC 2 and customer audits with less manual effort.'
      ]
    },
    {
      title: 'Regulated Companies',
      points: [
        'Maintain continuous readiness across internal and external controls.',
        'Show control history and verification for regulated processes.',
        'Improve audit consistency across distributed teams.'
      ]
    },
    {
      title: 'Red Teams / Pentest Providers',
      points: [
        'Deliver clients evidence-backed remediation validation.',
        'Track post-engagement control improvements over time.',
        'Differentiate with verifiable follow-through, not static reports.'
      ]
    }
  ];

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <SectionTitle eyebrow="Use Cases" title="Built for teams who need defensible security evidence" />

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((entry) => (
          <section key={entry.title} className="surface-panel p-7">
            <h3 className="text-lg font-semibold sm:text-xl">{entry.title}</h3>
            <ul className="mt-4 space-y-3 text-secondary">
              {entry.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  );
}
