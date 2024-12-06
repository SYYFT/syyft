import { type Metadata } from 'next'

import { Blockquote } from '../../components/Blockquote'
import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn } from '../../components/FadeIn'
import { GridList, GridListItem } from '../../components/GridList'
import { GridPattern } from '../../components/GridPattern'
import { List, ListItem } from '../../components/List'
import { PageIntro } from '../../components/PageIntro'
import { SectionIntro } from '../../components/SectionIntro'
import { StylizedImage } from '../../components/StylizedImage'
import { TagList, TagListItem } from '../../components/TagList'
import imageLaptop from '../../images/laptop.jpg'
import imageMeeting from '../../images/meeting.jpg'
import imageWhiteboard from '../../images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We begin by thoroughly assessing our client&apos;s{' '}
          <strong className="font-semibold text-neutral-950">data landscape</strong> and
          business objectives, embedding ourselves in their operations to understand
          their unique data challenges and opportunities.
        </p>
        <p>
          Our team of data experts conducts comprehensive interviews with key stakeholders,
          analyzes current data flows, and evaluates the quality and accessibility of existing data.
          We perform a detailed audit of the client&apos;s{' '}
          <strong className="font-semibold text-neutral-950">data infrastructure</strong>{' '}
          and processes.
        </p>
        <p>
          Once the full assessment is complete, we deliver a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">report</strong> outlining
          our findings, recommendations, and a proposed roadmap for implementing an
          optimized data architecture and ETL solution.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Data flow analysis</TagListItem>
        <TagListItem>Infrastructure assessment</TagListItem>
        <TagListItem>Data quality evaluation</TagListItem>
        <TagListItem>Gap analysis</TagListItem>
        <TagListItem>Recommendations report</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Design" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on our discovery findings, we develop a comprehensive{' '}
          <strong className="font-semibold text-neutral-950">data architecture</strong>{' '}
          and ETL solution design. This blueprint outlines the entire data ecosystem,
          from ingestion to analytics, tailored to the client's specific needs.
        </p>
        <p>
          Our architects work closely with the client to ensure the design aligns
          with their business goals and scalability requirements. We consider factors
          such as data volume, velocity, and variety to create an{' '}
          <strong className="font-semibold text-neutral-950">optimal solution</strong>.
        </p>
        <p>
          The design phase includes selecting appropriate technologies, defining
          data models, and outlining ETL processes. We also incorporate best practices
          for data governance, security, and compliance to ensure a robust and
          future-proof solution.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Key design elements
      </h3>
      <List className="mt-8">
        <ListItem title="Data Flow Architecture">
          We design comprehensive data pipelines that efficiently move and transform data.
        </ListItem>
        <ListItem title="Technology Stack Selection">
          We choose the most suitable tools and platforms for the client's specific needs.
        </ListItem>
        <ListItem title="Data Modeling">
          We create optimized data models to support efficient querying and analysis.
        </ListItem>
      </List>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Implement" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          With the design approved, we move into the implementation phase. Our team of
          skilled developers and data engineers bring the{' '}
          <strong className="font-semibold text-neutral-950">architecture to life</strong>,
          setting up the infrastructure, building ETL pipelines, and configuring analytics tools.
        </p>
        <p>
          We follow agile methodologies, allowing for flexibility and continuous feedback.
          Regular <strong className="font-semibold text-neutral-950">progress updates</strong>{' '}
          ensure the client is always informed about the project's status and can provide input
          throughout the implementation process.
        </p>
        <p>
          Throughout implementation, we maintain a strong focus on{' '}
          <strong className="font-semibold text-neutral-950">data quality and security</strong>.
          Rigorous testing and validation processes are employed to ensure the reliability
          and accuracy of the data flows, as well as the overall system performance.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Infrastructure Setup">
          We deploy and configure the selected technologies, ensuring a robust and scalable foundation.
        </ListItem>
        <ListItem title="ETL Development">
          Our team builds and optimizes ETL processes to efficiently move and transform data.
        </ListItem>
        <ListItem title="Testing and Validation">
          Comprehensive testing ensures data integrity, system performance, and adherence to security standards.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      {/* ... (keep the existing structure) */}
      <SectionIntro
        eyebrow="Our values"
        title="Driving data excellence with integrity"
      >
        <p>
          At Syyft, we are committed to delivering exceptional data solutions while
          upholding the highest standards of professionalism and ethical conduct.
          Our values guide every aspect of our work, ensuring we consistently
          deliver value to our clients.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Expertise">
            We continuously enhance our skills to stay at the forefront of data technologies and best practices.
          </GridListItem>
          <GridListItem title="Integrity">
            We maintain the highest ethical standards in handling data, ensuring privacy, security, and compliance.
          </GridListItem>
          <GridListItem title="Innovation">
            We creatively solve complex data challenges, leveraging cutting-edge technologies and methodologies.
          </GridListItem>
          <GridListItem title="Collaboration">
            We work closely with our clients, fostering partnerships that lead to optimal, tailored solutions.
          </GridListItem>
          <GridListItem title="Reliability">
            Our solutions are built to be robust, scalable, and dependable, ensuring long-term value for our clients.
          </GridListItem>
          <GridListItem title="Transparency">
            We maintain open communication throughout the project, ensuring clarity and trust.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'At Syyft, we follow a comprehensive, client-centric approach to deliver robust data architecture and ETL solutions.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our process" title="How we work">
        <p>
          At Syyft, we follow a comprehensive, client-centric approach to deliver
          robust data architecture and ETL solutions. Our process ensures that we
          thoroughly understand each client's unique needs and deliver tailored,
          scalable solutions that drive business value through data.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
