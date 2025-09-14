import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn, FadeInStagger } from '../../components/FadeIn'
import { GridList, GridListItem } from '../../components/GridList'
import { PageIntro } from '../../components/PageIntro'
import { SectionIntro } from '../../components/SectionIntro'
import { StatList, StatListItem } from '../../components/StatList'
import { AboutVisual } from '../../components/AboutVisual'
import { loadArticles } from '../../lib/mdx'
import { Users, ExternalLink, Github, Linkedin } from 'lucide-react'
import depaulLogo from '../../images/depaul univesity.png'

function Values() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Core values"
        title="Excellence through innovation and expertise"
        invert
      >
        <p>
          Our commitment to continuous improvement and client success drives every solution we deliver.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Technical Excellence" invert>
            We maintain cutting-edge expertise through continuous learning and adoption of 
            emerging technologies, ensuring clients receive innovative and effective solutions.
          </GridListItem>
          <GridListItem title="Strategic Leadership" invert>
            Our leadership experience enables us to translate complex technical concepts 
            into clear business value, empowering organizations to make informed decisions.
          </GridListItem>
          <GridListItem title="Proven Results" invert>
            Five years of progressive experience delivering successful data solutions 
            across diverse industries and organizational scales.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  // {
  //   name: 'Francis Osei Boafo',
  //   role: 'Data Architect',
  //   bio: 'Francis brings extensive experience in designing and implementing robust data architectures for diverse industries.',
  // },
  {
    name: 'Diana Valladares',
    role: 'Data Architect / Data Scientist',
    bio: 'Diana combines her expertise in data architecture with advanced data science skills to deliver comprehensive data solutions.',
    github: 'https://github.com/dee-ah-nuh', // Replace with your actual GitHub username
    linkedin: 'https://www.linkedin.com/in/diana-valladares/',
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        <FadeIn>
          <h2 className="font-display text-2xl font-semibold text-neutral-950">
            Our Team
          </h2>
        </FadeIn>
        <FadeInStagger>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
            {team.map((person) => (
              <FadeIn key={person.name}>
                <div className="flex flex-col gap-4 rounded-3xl bg-neutral-950 p-8 text-white">
                  <Users className="h-8 w-8" />
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-lg font-semibold">
                        {person.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        {person.github && (
                          <a
                            href={person.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors"
                            aria-label={`${person.name}'s GitHub profile`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        {person.linkedin && (
                          <a
                            href={person.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-neutral-400 hover:text-white transition-colors"
                            aria-label={`${person.name}'s LinkedIn profile`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-neutral-300">{person.role}</p>
                  </div>
                  <p className="text-sm">{person.bio}</p>
                </div>
              </FadeIn>
            ))}
            
            {/* Currently Working On Card */}
            <FadeIn>
              <div className="flex flex-col gap-4 rounded-3xl bg-blue-950 p-8 text-white">
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 bg-white rounded-lg flex items-center justify-center p-1">
                    <Image 
                      src={depaulLogo} 
                      alt="DePaul University Logo" 
                      className="object-contain"
                      fill
                    />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">
                      Currently Working On
                    </h3>
                    <p className="text-sm text-blue-200">Active Project</p>
                  </div>
                </div>
                <div>
                  <a 
                    href="https://resources.depaul.edu/steans-center-community-based-service-learning/egan-uecp/our-work/Pages/MVI.aspx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 hover:text-blue-200 transition-colors"
                  >
                    <h4 className="font-semibold text-white mb-2 group-hover:text-blue-200">
                      MVI DePaul University
                    </h4>
                    <ExternalLink className="h-4 w-4 text-blue-300 group-hover:text-blue-200" />
                  </a>
                  <p className="text-sm text-blue-100 mt-2">
                    Contributing to data solutions and research initiatives 
                    at MVI. Data Visibility Initiative to bring Technology to 17+ different faith-based communities.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </FadeInStagger>
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'About Syyft',
  description:
    'Syyft delivers expert data architecture and analytics solutions for small to medium organizations. Five years of proven expertise in leadership and innovation.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <FadeIn className="max-w-2xl">
            <div className="text-base font-semibold text-neutral-950">About Syyft</div>
            <h1 className="mt-6 font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
              Expertise built through continuous learning and proven results
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              Syyft specializes in delivering practical data solutions for small to medium organizations, 
              combining technical excellence with clear, actionable insights.
            </p>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
              <p className="text-neutral-600">
                Founded on a commitment to continuous learning and innovation, Syyft has developed 
                comprehensive expertise in data architecture and analytics over five years of 
                dedicated practice. Through progressive leadership roles and hands-on experience, 
                we have cultivated deep knowledge in modern data technologies and methodologies.
              </p>
              <p className="text-neutral-600">
                Our approach emerged from recognizing the growing demand for accessible data solutions 
                among small and medium organizations. Syyft bridges the gap between complex enterprise 
                systems and practical business needs, delivering tailored solutions that drive 
                measurable results. We are committed to empowering organizations with the tools 
                and knowledge needed to leverage data effectively.
              </p>
            </div>
          </FadeIn>
          
          <div className="flex-1 lg:max-w-lg">
            <FadeIn>
              <AboutVisual />
            </FadeIn>
          </div>
        </div>
      </Container>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="5+" label="Years of expertise" />
          <StatListItem value="Multiple" label="Leadership roles" />
          <StatListItem value="Proven" label="Track record of success" />
        </StatList>
      </Container>

      <Values />

      <Team />

      <ContactSection />
    </>
  )
}