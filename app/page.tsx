import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@/components/container';
import { SectionTitle } from '@/components/section-title';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/80 bg-premium-canvas bg-vectorvue-hero-glow">
        <div className="pointer-events-none absolute -left-32 top-8 h-64 w-64 rounded-full bg-electric/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-8 top-0 h-72 w-72 rounded-full bg-primary/20 blur-3xl" aria-hidden="true" />
        <Container className="relative py-20 sm:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">Continuous Security Assurance</p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
                Stop Preparing for Audits. Start Passing Them Continuously.
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-secondary">
                VectorVue continuously verifies that your controls operate as designed and transforms operational activity into
                auditor-verifiable evidence. Your team stops scrambling for screenshots and starts showing provable control health
                in real time.
              </p>
              <p className="mt-4 text-sm font-medium text-secondary">Commercial product by NyxeraLabs.</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primaryHover">
                  Request Pilot
                </Link>
                <Link href="/product" className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-hover">
                  View Product
                </Link>
              </div>
            </div>
            <div className="surface-panel-elevated p-3">
              <Image
                src="/images/vectorvue-hero.png"
                alt="VectorVue control assurance workflow"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-xl"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-16 sm:py-20">
        <Container>
          <SectionTitle
            eyebrow="The Problem"
            title="Most audits still depend on interviews, spreadsheets, and screenshots"
          >
            Traditional audit preparation is periodic and manual. Evidence is collected under deadline pressure, often based on
            interviews and point-in-time screenshots that become stale quickly. That creates risk between assessments and drains
            security, engineering, and compliance teams.
          </SectionTitle>
        </Container>
      </section>

      <section className="border-b border-border/80 py-16 sm:py-20">
        <Container>
          <SectionTitle eyebrow="How It Works" title="From operational activity to trusted evidence">
            VectorVue captures security-relevant events and validates each control against objective checks, then preserves the
            resulting evidence with verification records for auditor review.
          </SectionTitle>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              'Operational Events',
              'Continuous Validation',
              'Evidence Generation',
              'Independent Verification'
            ].map((item, index) => (
              <div key={item} className="surface-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-16 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Business Value" title="Security outcomes that move revenue and reduce audit drag" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: 'Faster Enterprise Sales',
                text: 'Answer security reviews with current, defensible control evidence instead of ad hoc responses.'
              },
              {
                title: 'Continuous Readiness',
                text: 'Maintain audit posture every week, not just before a certification or customer renewal.'
              },
              {
                title: 'Auditor Verification',
                text: 'Provide verifiable records that support external assurance with less back-and-forth.'
              }
            ].map((value) => (
              <article key={value.title} className="surface-panel p-6">
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="mt-3 text-secondary">{value.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-16 sm:py-20">
        <Container>
          <SectionTitle eyebrow="Social Proof" title="Trusted by security leaders at high-growth and regulated organizations">
            Replace this placeholder with customer logos, deployment stats, and short security-team testimonials.
          </SectionTitle>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['Customer A', 'Customer B', 'Customer C', 'Customer D'].map((logo) => (
              <div key={logo} className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border bg-surface/75 text-sm text-secondary shadow-soft">
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="surface-panel-elevated p-8 text-center sm:p-12">
          <h2 className="text-3xl font-semibold tracking-tight">Ready to prove control effectiveness continuously?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary">
            Start a VectorVue pilot and align security, engineering, and compliance around evidence that stands up to scrutiny.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primaryHover">
            Request Pilot
          </Link>
        </Container>
      </section>
    </>
  );
}
