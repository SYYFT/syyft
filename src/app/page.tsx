// File: src/app/page.tsx

import { type Metadata } from 'next'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { Testimonial } from '../components/Testimonial'
import { RealWorldImpact } from '../components/RealWorldImpact'
import { Users } from 'lucide-react'
import imageLaptop from '../images/laptop.jpg'
import { 
  Server, 
  Cloud, 
  Database, 
  BarChart2, 
  PieChart,
  Activity,
  GitBranch,
  Workflow,
  Layers,
  Zap,
  Shield,
  Cpu,
  TrendingUp,
  Sliders,
  Calendar,
  X
} from 'lucide-react'
import { Button } from '../components/Button'

const technologies = [
  { name: 'Apache Spark', icon: Zap },
  { name: 'Snowflake', icon: Database },
  { name: 'AWS', icon: Layers },
  { name: 'Azure', icon: Server },
  { name: 'Google Cloud', icon: Cloud },
  { name: 'Kafka', icon: Activity },
  { name: 'Airflow', icon: Workflow },
  { name: 'dbt', icon: GitBranch },
  { name: 'Tableau', icon: BarChart2 },
  { name: 'Power BI', icon: PieChart },
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Syyft specializes in modern data tools that are practical and accessible for small teams.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {technologies.map((tech) => (
              <li key={tech.name} className="flex flex-col items-center justify-center font-bold text-sm text-white">
                <FadeIn>
                  <div className="flex flex-col items-center">
                    <tech.icon className="h-8 w-8 text-white mb-2" />
                    <span className="text-sm text-white text-center">{tech.name}</span>
                  </div>
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function KeyFeatures() {
  const features = [
    { icon: Shield, title: 'Data Security', description: 'Enterprise-grade security measures to protect your valuable data assets.' },
    { icon: Cpu, title: 'Scalable Architecture', description: 'Flexible solutions that grow with your business needs.' },
    { icon: TrendingUp, title: 'Real-time Analytics', description: 'Instant insights for faster decision-making processes.' },
    { icon: Sliders, title: 'Custom Integrations', description: 'Seamless connections with your existing tools and platforms.' },
  ]

  return (
    <>
      <SectionIntro
        title="Our Approach to Data Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Syyft focuses on practical, accessible solutions that give small teams the power 
          of modern data tools without the complexity or cost of enterprise systems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FadeIn key={feature.title} className="flex">
              <div className="flex flex-col items-start">
                <div className="rounded-2xl bg-neutral-950 p-4 ring-1 ring-neutral-950/10">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="Syyft provides project-based consulting focused on practical data solutions."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our expertise spans strategy, implementation, and training — helping you 
          adopt modern data practices without the complexity or cost of enterprise systems.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Data Advisory & Adoption">
              Strategy sessions, literacy coaching, and cost breakdowns for teams 
              new to data. Syyft translates technical concepts into plain, understandable language.
            </ListItem>
            <ListItem title="Snowflake & Airflow Pipelines">
              Building lean, reliable ETL workflows with clear logging and documentation. 
              Focus on practical solutions that your team can maintain.
            </ListItem>
            <ListItem title="Internal Tools & Automations">
              Lightweight apps and automations that reduce manual work and streamline 
              operations. No bloated systems — only what you need.
            </ListItem>
            <ListItem title="POC & MVP Support">
              Turning ambiguous ideas into scoped, testable prototypes that de-risk 
              investment. Perfect for founders exploring new concepts.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}



function AboutMe() {
  const values = [
    {
      title: 'Clarity',
      description: 'Syyft translates complex technical concepts into plain language that anyone can understand.',
      icon: Shield,
    },
    {
      title: 'Practicality', 
      description: 'Syyft builds only what you need — no bloated systems or over-engineered solutions.',
      icon: Cpu,
    },
    {
      title: 'Integrity',
      description: 'Transparent timelines, scope, and costs. No surprises, no hidden complexity.',
      icon: TrendingUp,
    },
    {
      title: 'Enablement',
      description: 'Syyft leaves clients confident and independent, not dependent on ongoing support.',
      icon: Sliders,
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="About"
        title="From Passion Project to Helping Small Teams"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Syyft started as a passion project by its founder — a way to learn how to code and 
          explore data tools. But as friends, colleagues, and small organizations began asking 
          for help with their data challenges, it evolved into something bigger. Now we specialize 
          in making data practical and accessible for small teams, nonprofits, and founders who 
          want smart solutions without the complexity.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <FadeIn key={value.title} className="flex">
              <div className="flex flex-col items-start">
                <div className="rounded-2xl bg-neutral-950 p-4 ring-1 ring-neutral-950/10">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                  {value.title}
                </h3>
                <p className="mt-2 text-base text-neutral-600">
                  {value.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Data consultant helping small organizations and founders adopt modern data tools. Small teams. Smart data.',
}

export default async function Home() {
  return (
    <>

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <FadeIn className="max-w-3xl">
            <h1 className="hero-title font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Small teams. Smart data.
            </h1>
            <p className="hero-description mt-6 text-xl text-neutral-600">
              Syyft helps small organizations and founders adopt modern data tools without the complexity 
              or cost of enterprise-scale systems. Data shouldn't feel overwhelming — it should be 
              practical, clear, and empowering.
            </p>
            <div className="mt-10">
              <Button href="#contact" className="scroll-smooth">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Free Consultation</span>
                </span>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>

      <Clients />

      <KeyFeatures />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Chris, MyDailyDeals LLC' }}
      >
        Working with this Diana transformed how we handle our data. What seemed 
        overwhelming became manageable, and the solutions were perfectly sized for our 
        small team. The clear explanations and practical approach made all the difference.
      </Testimonial>

      <Services />

      <RealWorldImpact />

      <AboutMe />

      <ContactSection />
    </>
  )
}