import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Use Cases',
  description:
    'How VectorVue by Nyxera Labs supports SaaS vendors, regulated organizations, and security providers with continuous control validation.'
};

export default function UseCasesPage() {
  const cases = [
    {
      title: 'SaaS Vendors',
      points: [
        'Provide current control validation evidence for enterprise security reviews.',
        'Reduce sales-cycle delays caused by fragmented assurance responses.',
        'Keep assurance posture current between customer audit checkpoints.'
      ]
    },
    {
      title: 'Regulated Organizations',
      points: [
        'Maintain structured evidence aligned to regulated control objectives.',
        'Track control effectiveness over time with verification context.',
        'Coordinate security, engineering, and compliance workflows from one assurance baseline.'
      ]
    },
    {
      title: 'Red Teams / Security Providers',
      points: [
        'Validate remediation outcomes with measurable control checks.',
        'Preserve post-engagement evidence as traceable assurance records.',
        'Deliver defensible follow-through beyond one-time assessment reports.'
      ]
    }
  ];

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <SectionTitle eyebrow="Use Cases" title="Assurance Infrastructure for Distinct Security Operating Models" />

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cases.map((entry) => (
          <section key={entry.title} className="surface-panel p-7">
            <h3 className="text-lg font-semibold sm:text-xl">{entry.title}</h3>
            <div className="mt-4 space-y-3 text-secondary">
              {entry.points.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </Container>
  );
}
