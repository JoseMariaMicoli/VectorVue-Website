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
        <Container className="relative py-14 sm:py-20 lg:py-24 3xl:py-28">
          <div className="grid items-center gap-8 lg:gap-10 xl:grid-cols-[minmax(0,1fr)_460px] 3xl:grid-cols-[minmax(0,1fr)_560px]">
            <div className="max-w-4xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm">
                Security Validation Infrastructure
              </p>
              <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl 3xl:text-7xl">
                Continuous Security Validation Infrastructure
              </h1>
              <p className="mt-4 text-lg font-medium leading-7 text-foreground/90 sm:text-xl sm:leading-8">
                Stop Preparing for Audits. Start Proving Control Effectiveness Continuously.
              </p>
              <p className="mt-5 max-w-3xl text-base leading-7 text-secondary sm:mt-6 sm:text-lg sm:leading-8 3xl:text-xl">
                VectorVue continuously validates that security controls operate as designed and transforms operational activity
                into structured, auditor-verifiable evidence.
              </p>
              <div className="mt-5 space-y-2 text-base text-secondary sm:text-lg">
                <p>No more scrambling for screenshots.</p>
                <p>No more point-in-time narratives.</p>
                <p>Only measurable, continuously validated control health.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
                <Link href="/contact" className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primaryHover">
                  Request Pilot
                </Link>
                <Link href="/product" className="rounded-md border border-border px-6 py-3 text-sm font-medium hover:bg-hover">
                  View Platform
                </Link>
              </div>
              <p className="mt-4 text-sm font-medium text-secondary">VectorVue by Nyxera Labs.</p>
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

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="The Problem" title="Audits Are Still Built on Snapshots">
            Most security audits still depend on interviews, spreadsheets, static documentation, and point-in-time screenshots.
          </SectionTitle>
          <div className="max-w-3xl space-y-4 text-secondary">
            <p>
              Evidence is collected under deadline pressure and becomes outdated quickly. Between assessments, control drift goes
              unnoticed.
            </p>
            <p>This creates:</p>
            <ul className="space-y-2">
              <li>Revenue friction</li>
              <li>Compliance fatigue</li>
              <li>Operational blind spots</li>
            </ul>
            <p>Security teams end up preparing for audits instead of engineering assurance.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="How It Works" title="From Operational Activity to Verifiable Assurance">
            VectorVue transforms live operational signals into structured validation records aligned to security controls.
          </SectionTitle>
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Operational Signals',
                text: 'Security-relevant events are captured from real infrastructure activity.'
              },
              {
                title: 'Continuous Validation',
                text: 'Each control is validated against objective, repeatable checks.'
              },
              {
                title: 'Structured Evidence',
                text: 'Validation outputs are preserved as structured evidence artifacts.'
              },
              {
                title: 'Independent Verification',
                text: 'Records include verification metadata designed to support audit review and external assurance workflows.'
              }
            ].map((item, index) => (
              <div key={item.title} className="surface-panel p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm text-secondary">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-secondary">
            This turns daily operations into continuous validation infrastructure.
          </p>
        </Container>
      </section>

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="Core Capabilities" title="Validation Infrastructure Capabilities" />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Control Effectiveness Validation',
                text: 'Continuously test whether controls operate as intended - not just whether they exist.'
              },
              {
                title: 'Evidence Preservation',
                text: 'Maintain structured validation artifacts with traceable verification history.'
              },
              {
                title: 'Assurance Portals',
                text: 'Provide stakeholders and auditors with defensible, review-ready control views.'
              },
              {
                title: 'Multi-Environment Support',
                text: 'Designed for modern infrastructure and distributed systems.'
              }
            ].map((capability) => (
              <article key={capability.title} className="surface-panel p-6">
                <h3 className="text-lg font-semibold">{capability.title}</h3>
                <p className="mt-3 text-secondary">{capability.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="Business Impact" title="Security Outcomes That Reduce Audit Drag and Accelerate Revenue" />
          <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: 'Faster Enterprise Sales',
                text: 'Answer security questionnaires with current, defensible control validation evidence.'
              },
              {
                title: 'Continuous Audit Readiness',
                text: 'Maintain assurance posture year-round.'
              },
              {
                title: 'Reduced Compliance Overhead',
                text: 'Lower coordination burden across security, engineering, and compliance teams.'
              },
              {
                title: 'Increased Control Confidence',
                text: 'Identify control drift before it becomes an audit finding.'
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

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="Built by Security Engineers" title="Built by Security Engineers">
            VectorVue was designed by offensive security and infrastructure engineers who believe:
          </SectionTitle>
          <div className="max-w-3xl space-y-2 text-secondary">
            <p>Validation should be measurable.</p>
            <p>Evidence should be structured.</p>
            <p>Assurance should be continuous.</p>
          </div>
        </Container>
      </section>

      <section className="border-b border-border/80 py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container>
          <SectionTitle eyebrow="Social Proof" title="Trusted by security leaders at high-growth and regulated organizations." />
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {['Enterprise SaaS', 'Fintech', 'Cloud Infrastructure', 'Regulated Tech'].map((logo) => (
              <div key={logo} className="flex h-20 items-center justify-center rounded-lg border border-dashed border-border bg-surface/75 text-sm text-secondary shadow-soft">
                {logo}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 3xl:py-24">
        <Container className="surface-panel-elevated p-6 text-center sm:p-10 lg:p-12 3xl:p-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl 3xl:text-4xl">
            Ready to Prove Control Effectiveness Continuously?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-secondary">
            Start a VectorVue pilot and align security, engineering, and compliance around structured, defensible assurance.
          </p>
          <Link href="/contact" className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-primaryHover">
            Request Pilot
          </Link>
        </Container>
      </section>
    </>
  );
}
