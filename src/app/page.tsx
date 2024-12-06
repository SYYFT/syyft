// File: src/app/page.tsx

import { type Metadata } from 'next'
import { ContactSection } from '../components/ContactSection'
import { Container } from '../components/Container'
import { FadeIn, FadeInStagger } from '../components/FadeIn'
import { List, ListItem } from '../components/List'
import { SectionIntro } from '../components/SectionIntro'
import { StylizedImage } from '../components/StylizedImage'
import { Testimonial } from '../components/Testimonial'
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
  Calendar
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

function RealWorldImpact() {
  const impactData = [
    {
      technology: 'Apache Spark',
      useCase: 'A local e-commerce shop used Spark to analyze customer data, boosting sales by 20% in three months through personalized email campaigns.',
      example: 'NASA JPL reduced data processing time from 4 hours to 5 minutes for analyzing telemetry data from space missions.',
      impact: 'Increases profitability through real-time data analysis. Boosts sales via personalized marketing, potentially increasing conversion rates by 10-30%.'
    },
    {
      technology: 'Snowflake',
      useCase: 'A growing accounting firm consolidated client data, saving hours each week and improving client satisfaction.',
      example: 'Capital One reduced query runtime from 20 minutes to 2 seconds after migrating to Snowflake\'s cloud data platform.',
      impact: 'Enhances profitability by reducing data costs by 20-40%. Increases sales through faster customer service, potentially boosting retention by 15-25%.'
    },
    {
      technology: 'AWS',
      useCase: 'A family-owned manufacturing business moved their systems to AWS. They cut IT costs by 30% and can now access their data securely from anywhere – super helpful for managing operations on the go!',
      example: 'Airbnb leveraged AWS to launch in 190 countries, supporting over 4 million listings as of 2023.',
      impact: 'Improves profitability through reduced IT infrastructure costs, often 20-30% savings. Increases sales by enabling rapid scaling and deployment of new services, potentially accelerating time-to-market by 30-50% for new products or features.'
    },
    {
      technology: 'Azure',
      useCase: 'A mid-sized dental practice used Azure to create a secure patient portal. Patients love the easy access to their records, and the practice reduced admin work by 25%, giving staff more time for patient care.',
      example: 'Scaling with the cloud, Procter & Gamble (P&G) reduces time-to-market with 35% faster product innovation.',
      impact: 'Boosts profitability by optimizing resource allocation and reducing operational costs, often by 15-25%. Increases sales through improved customer experiences and data-driven insights, potentially leading to a 10-20% increase in customer satisfaction and retention.'
    },
    {
      technology: 'Google Cloud',
      useCase: 'A local grocery chain used Google Cloud\'s AI to predict product demand. They reduced waste by 15% and always have popular items in stock – customers noticed and sales are up!',
      example: 'Carrefour increased sales by 60% with Google Cloud\'s AI-powered pricing optimization.',
      impact: 'Enhances profitability through AI-driven optimizations, potentially reducing operational costs by 10-20%. Increases sales by enabling precise demand forecasting and personalized marketing, often leading to a 5-15% boost in revenue.'
    },
    {
      technology: 'Kafka',
      useCase: 'A small logistics company used Kafka to stream real-time data from their delivery trucks. They optimized routes on the fly, saving 10% on fuel and completing more deliveries each day.',
      example: 'LinkedIn processes over 7 trillion messages per day using Kafka for their unified data pipeline.',
      impact: 'Improves profitability by enabling real-time data processing for immediate operational optimizations, often leading to 10-20% efficiency gains. Increases sales through improved service quality and responsiveness, potentially boosting customer satisfaction and repeat business by 15-25%.'
    },
    {
      technology: 'Airflow',
      useCase: 'A boutique marketing agency automated their reporting with Airflow. They now deliver client reports 50% faster and took on new clients without hiring more staff.',
      example: 'Astronomer reports that clients using Airflow have seen a 90% reduction in data pipeline errors.',
      impact: 'Enhances profitability by automating data workflows, reducing manual labor costs by 30-50%. Increases sales by improving service quality and capacity, allowing businesses to take on more clients or projects without proportional cost increases.'
    },
    {
      technology: 'dbt',
      useCase: 'A growing SaaS startup used dbt to clean up their messy data. Their team now spends 60% less time arguing about numbers and more time improving their product.',
      example: 'Netlify achieved 90% faster data transformations using dbt.',
      impact: 'Boosts profitability by streamlining data processes, potentially reducing data-related labor costs by 40-60%. Increases sales indirectly by enabling faster, more accurate business insights, leading to better product decisions and potentially 10-20% faster feature releases.'
    },
    {
      technology: 'Tableau',
      useCase: 'A local gym chain created easy-to-understand dashboards with Tableau. They spotted trends in member attendance and tailored their class schedule, increasing membership retention by 30%.',
      example: 'Lenovo reduced report creation time by 90% after implementing Tableau for sales analytics.',
      impact: 'Improves profitability through data-driven decision making, often leading to 15-25% cost savings in various operations. Increases sales by enabling clear visualization of sales trends and customer behaviors, potentially boosting targeted sales efforts by 20-30%.'
    },
    {
      technology: 'Power BI',
      useCase: 'A mid-sized auto parts supplier used Power BI to visualize their inventory. They identified slow-moving parts and optimized stock levels, freeing up cash that was tied up in excess inventory.',
      example: 'Ecolab improved field sales productivity by 4% using Power BI for data-driven insights.',
      impact: 'Enhances profitability by providing clear insights for inventory management and operational efficiencies, often leading to 10-20% reduction in carrying costs. Increases sales through better understanding of customer trends and product performance, potentially improving upselling and cross-selling by 15-25%.'
    }
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Real-World Impact"
        title="Transforming Businesses with Data Solutions"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Our technologies drive tangible results for businesses of all sizes.
          Here's how our solutions make a difference in the real world.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          {impactData.map((item, index) => (
            <FadeIn key={index}>
              <div className="mb-12 border-b border-neutral-200 pb-12 last:border-b-0 last:pb-0">
                <h3 className="font-display text-2xl font-semibold text-neutral-950 mb-4">{item.technology}</h3>
                <p className="text-neutral-600 mb-2"><strong>SME-Friendly Use Case:</strong> {item.useCase}</p>
                <p className="text-neutral-600 mb-2"><strong>Real-World Example:</strong> {item.example}</p>
                <p className="text-neutral-600"><strong>Business Impact:</strong> {item.impact}</p>
              </div>
            </FadeIn>
          ))}
        </FadeInStagger>
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
        <div className="flex flex-col md:flex-row items-start justify-between">
          <FadeIn className="max-w-3xl">
            <h1 className="hero-title font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
              Transforming Data to Help Increase Revenue and Reduce Costs.
            </h1>
            <p className="hero-description mt-6 text-xl text-neutral-600">
              At SYYFT, we harness the power of your data to drive efficiency and growth. 
              Our services are designed to unlock the full potential of your data, ensuring
              you can make informed decisions that boost revenue and cut costs.
            </p>
            <div className="mt-10">
              <Button href="https://calendly.com/syyft-co" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Schedule Now</span>
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
        client={{ name: 'David, CEO' }}
      >
        Syyft's expertise in data architecture and ETL processes has
        significantly improved our data flow and analytics capabilities. Their
        solutions are robust, scalable, and perfectly aligned with our business
        needs.
      </Testimonial>

      <Services />

      <RealWorldImpact />

      <AboutUs />

      <ContactSection />
    </>
  )
}