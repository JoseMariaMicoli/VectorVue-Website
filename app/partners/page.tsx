import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Partners',
  description: 'Partner with VectorVue by Nyxera Labs to deliver Security Validation Infrastructure outcomes.'
};

export default function PartnersPage() {
  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <SectionTitle eyebrow="Partners" title="Partnerships for Security Validation Infrastructure">
        VectorVue by Nyxera Labs works with security consultancies, infrastructure providers, and channel partners to support
        structured control validation and assurance delivery.
      </SectionTitle>

      <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3">
        {[
          {
            title: 'Advisory Partners',
            text: 'Embed continuous control validation evidence into customer assurance programs.'
          },
          {
            title: 'Technology Partners',
            text: 'Integrate operational telemetry and verification records across shared infrastructure environments.'
          },
          {
            title: 'Channel Partners',
            text: 'Deliver scoped pilot programs and enterprise rollout support with consistent assurance outcomes.'
          }
        ].map((partner) => (
          <article key={partner.title} className="surface-panel p-7">
            <h3 className="text-lg font-semibold sm:text-xl">{partner.title}</h3>
            <p className="mt-3 text-secondary">{partner.text}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
