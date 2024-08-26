import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import { loadArticles } from '@/lib/mdx'
import { Users } from 'lucide-react'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our values"
        title="Driving innovation through data excellence"
        invert
      >
        <p>
          We are guided by a set of core values that shape our approach to data solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Expertise" invert>
            We continuously enhance our skills to stay at the forefront of data technology.
          </GridListItem>
          <GridListItem title="Innovation" invert>
            We push boundaries to deliver cutting-edge solutions that drive business growth.
          </GridListItem>
          <GridListItem title="Client-Centric" invert>
            We prioritize our clients' needs, ensuring tailored solutions that exceed expectations.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    name: 'Francis Osei Boafo',
    role: 'Data Architect',
    bio: 'Francis brings extensive experience in designing and implementing robust data architectures for diverse industries.',
  },
  {
    name: 'Diana Valladares',
    role: 'Data Architect / Data Scientist',
    bio: 'Diana combines her expertise in data architecture with advanced data science skills to deliver comprehensive data solutions.',
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        <FadeInStagger>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Our Team
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {team.map((person) => (
              <FadeIn key={person.name}>
                <div className="flex flex-col gap-4 rounded-3xl bg-neutral-950 p-8 text-white">
                  <Users className="h-8 w-8" />
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      {person.name}
                    </h3>
                    <p className="text-sm text-neutral-300">{person.role}</p>
                  </div>
                  <p className="text-sm">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Syyft',
  description:
    'We are Syyft, a data architecture and ETL solutions provider dedicated to empowering businesses through intelligent data solutions.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <PageIntro eyebrow="About Syyft" title="Empowering businesses through data">
        <p>
          We are dedicated to transforming businesses through intelligent data solutions,
          putting our clients at the center of everything we do.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Syyft was founded by data experts who recognized the need for specialized,
            efficient data architecture and ETL solutions. We're committed to helping
            businesses harness the power of their data to drive growth and innovation.
          </p>
          <p>
            At Syyft, we combine technical expertise with a deep understanding of
            business needs. Our solutions are tailored to each client, ensuring
            that we deliver not just data systems, but true business value.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="6+" label="Years of expertise" />
          <StatListItem value="10+" label="Successful projects" />
          <StatListItem value="5+" label="Satisfied clients" />
        </StatList>
      </Container>

      <Values />

      <Team />

      <ContactSection />
    </>
  )
}