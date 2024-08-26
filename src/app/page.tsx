// File: src/app/page.tsx

import { type Metadata } from 'next'
  
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import { Users } from 'lucide-react'
import logoPhobiaDark from '@/images/clients/phobia/logo-dark.svg'
import imageLaptop from '@/images/laptop.jpg'
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
  Sliders
} from 'lucide-react'

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
            We leverage cutting-edge technologies to deliver powerful data solutions.
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
        title="Powerful Features for Modern Data Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our data architecture and ETL solutions come packed with cutting-edge features
          designed to maximize the value of your data.
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
        title="We design and implement cutting-edge data solutions tailored to your needs."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our expertise spans the entire data lifecycle, from ingestion to
          analysis, ensuring you get the most value from your data assets.
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
            <ListItem title="Data Architecture Design">
              We create robust, scalable data architectures that align with your
              business goals and technical requirements.
            </ListItem>
            <ListItem title="ETL Process Development">
              Our team builds efficient ETL pipelines using cutting-edge tools
              and technologies to ensure smooth data flow across your systems.
            </ListItem>
            <ListItem title="Data Warehousing">
              We implement modern data warehousing solutions that enable fast,
              reliable access to your organizations data assets.
            </ListItem>
            <ListItem title="Data Governance and Quality">
              We establish comprehensive data governance frameworks and quality
              assurance processes to maintain the integrity of your data.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

function AboutUs() {
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

  return (
    <>
      <SectionIntro
        eyebrow="About Us"
        title="Meet the Syyft Team"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We're a small but mighty team of data experts passionate about
          transforming businesses through intelligent data solutions.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <FadeIn key={member.name} className="flex">
              <div className="flex flex-col items-start">
                <div className="rounded-2xl bg-neutral-950 p-4 ring-1 ring-neutral-950/10">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-950">
                  {member.name}
                </h3>
                <p className="mt-1 text-base font-semibold text-neutral-700">
                  {member.role}
                </p>
                <p className="mt-2 text-base text-neutral-600">
                  {member.bio}
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
    'Syyft: Building modern data architectures and ETL solutions for forward-thinking businesses.',
}

export default async function Home() {
  return (
    <>

      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="hero-title font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Transforming Data to Help Increase Revenue and Reduce Costs.
          </h1>
          <p className="hero-description mt-6 text-xl text-neutral-600">
          At SYYFT, we harness the power of your data to drive efficiency and growth. 
          Our services are designed to unlock the full potential of your data, ensuring
          you can make informed decisions that boost revenue and cut costs.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <KeyFeatures />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Amazon', logo: logoPhobiaDark }}
      >
        Syyft's expertise in data architecture and ETL processes has
        significantly improved our data flow and analytics capabilities. Their
        solutions are robust, scalable, and perfectly aligned with our business
        needs.
      </Testimonial>

      <Services />

      <AboutUs />

      <ContactSection />
    </>
  )
}