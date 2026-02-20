import type { Metadata } from 'next';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export const metadata: Metadata = {
  title: 'Request Pilot',
  description: 'Contact VectorVue to request a pilot and discuss your upcoming audit or security review needs.'
};

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-2">
        <section>
          <SectionTitle eyebrow="Contact" title="Request a VectorVue Pilot">
            Tell us about your timeline and primary assurance concerns. We will follow up with a scoped pilot plan for your team.
          </SectionTitle>
          <div className="mt-8 rounded-xl border border-border p-6 text-sm text-foreground/70">
            <p className="font-medium text-foreground">Who this is for</p>
            <p className="mt-2">CISOs, Security Engineering leaders, CTOs, and Compliance teams preparing for customer or regulatory scrutiny.</p>
          </div>
        </section>

        <section className="rounded-xl border border-border p-6 sm:p-8">
          <form
            className="space-y-5"
            aria-label="Pilot request form"
            action="mailto:founder@nyxera.cloud"
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block text-sm font-medium">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="audit-date" className="mb-2 block text-sm font-medium">
                Upcoming audit/review date
              </label>
              <input
                id="audit-date"
                name="auditDate"
                type="date"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <div>
              <label htmlFor="concern" className="mb-2 block text-sm font-medium">
                Primary concern
              </label>
              <textarea
                id="concern"
                name="primaryConcern"
                rows={4}
                placeholder="Example: proving control effectiveness between SOC 2 reviews"
                className="w-full rounded-md border border-border bg-background px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
              />
            </div>

            <button type="submit" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:opacity-90">
              Submit Pilot Request
            </button>
          </form>
          <p className="mt-4 text-sm text-foreground/70">
            Prefer direct email?{' '}
            <a className="underline hover:no-underline" href="mailto:founder@nyxera.cloud">
              founder@nyxera.cloud
            </a>
          </p>
        </section>
      </div>
    </Container>
  );
}
