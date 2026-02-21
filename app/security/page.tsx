import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';
import { EMAIL_CONFIG, getFormAction } from '@/src/config/email';

export const metadata: Metadata = {
  title: 'Security',
  description: 'Security architecture and policy entry point for VectorVue.'
};

export default function SecurityPage() {
  const securityEmail = EMAIL_CONFIG.vectorvue.security;
  const ccEmail = EMAIL_CONFIG.vectorvue.cc;
  const disclosureAction = getFormAction(securityEmail);

  return (
    <Container className="py-12 sm:py-16 lg:py-20 3xl:py-24">
      <SectionTitle eyebrow="Security" title="Built for verifiable trust">
        VectorVue is a commercial product from NyxeraLabs focused on continuous control assurance with auditable evidence.
      </SectionTitle>
      <div className="surface-panel mt-10 p-6">
        <p className="text-secondary">
          Need disclosure and reporting details? Review the full policy at{' '}
          <Link href="/security-policy" className="font-semibold text-primary underline hover:no-underline">
            /security-policy
          </Link>
          .
        </p>
      </div>
      <section className="surface-panel mt-8 p-6 sm:p-8">
        <h3 className="text-lg font-semibold">Security Contact Form</h3>
        <p className="mt-2 text-sm text-secondary">
          Reports are sent to {securityEmail} with CC to {ccEmail}.
        </p>
        <form className="mt-5 space-y-5" aria-label="Security disclosure form" action={disclosureAction} method="post">
          <input type="hidden" name="_subject" value="VectorVue Security Disclosure" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_cc" value={ccEmail} />
          <div>
            <label htmlFor="reporter-email" className="mb-2 block text-sm font-medium">
              Your email
            </label>
            <input
              id="reporter-email"
              name="_replyto"
              type="email"
              required
              className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
            />
          </div>
          <div>
            <label htmlFor="summary" className="mb-2 block text-sm font-medium">
              Vulnerability summary
            </label>
            <textarea
              id="summary"
              name="summary"
              rows={5}
              required
              className="w-full rounded-md border border-border bg-surfaceElevated px-3 py-2.5 outline-none ring-primary/30 transition focus:ring"
            />
          </div>
          <button type="submit" className="inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primaryHover">
            Submit Security Report
          </button>
        </form>
      </section>
    </Container>
  );
}
