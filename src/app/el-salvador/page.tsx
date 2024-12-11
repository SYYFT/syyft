import { type Metadata } from 'next'
import { ContactSection } from '../../components/ContactSection'
import { Container } from '../../components/Container'
import { FadeIn, FadeInStagger } from '../../components/FadeIn'
import { List, ListItem } from '../../components/List'
import { SectionIntro } from '../../components/SectionIntro'
import { StylizedImage } from '../../components/StylizedImage'
import { Testimonial } from '../../components/Testimonial'
import { Users } from 'lucide-react'
import logoPhobiaDark from '../../images/clients/phobia/logo-dark.svg'
import imageLaptop from '../../images/laptop.jpg'
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
import { Button } from '../../components/Button'

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
    <div className="mt-24 rounded-4xl bg-neutral-50 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-black sm:text-left">
            Utilizamos tecnologías de vanguardia para ofrecer soluciones de datos potentes.
          </h2>
          <div className="h-px flex-auto bg-neutral-200" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5"
          >
            {technologies.map((tech) => (
              <li key={tech.name} className="flex flex-col items-center justify-center font-bold text-sm text-black">
                <FadeIn>
                  <div className="flex flex-col items-center">
                    <tech.icon className="h-8 w-8 text-black mb-2" />
                    <span className="text-sm text-black text-center">{tech.name}</span>
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
    { icon: Shield, title: 'Seguridad de Datos', description: 'Medidas de seguridad de nivel empresarial para proteger sus valiosos activos de datos.' },
    { icon: Cpu, title: 'Arquitectura Escalable', description: 'Soluciones flexibles que crecen con las necesidades de su negocio.' },
    { icon: TrendingUp, title: 'Análisis en Tiempo Real', description: 'Información instantánea para procesos de toma de decisiones más rápidos.' },
    { icon: Sliders, title: 'Integraciones Personalizadas', description: 'Conexiones sin problemas con sus herramientas y plataformas existentes.' },
  ]

  return (
    <>
      <SectionIntro
        title="Características Poderosas para Soluciones de Datos Modernas"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestras soluciones de arquitectura de datos y ETL vienen cargadas con características 
          de vanguardia diseñadas para maximizar el valor de sus datos.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FadeIn key={feature.title} className="flex">
              <div className="flex flex-col items-start">
                <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-50/10">
                  <feature.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-50">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-neutral-400">
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
        eyebrow="Servicios"
        title="Diseñamos e implementamos soluciones de datos de vanguardia adaptadas a sus necesidades."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestra experiencia abarca todo el ciclo de vida de los datos, desde la ingestión 
          hasta el análisis, asegurando que obtenga el máximo valor de sus activos de datos.
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
            <ListItem title="Diseño de Arquitectura de Datos">
              Creamos arquitecturas de datos robustas y escalables que se alinean con sus 
              objetivos de negocio y requisitos técnicos.
            </ListItem>
            <ListItem title="Desarrollo de Procesos ETL">
              Nuestro equipo construye pipelines ETL eficientes utilizando herramientas y 
              tecnologías de vanguardia para asegurar un flujo de datos suave en sus sistemas.
            </ListItem>
            <ListItem title="Data Warehousing">
              Implementamos soluciones modernas de almacenamiento de datos que permiten un 
              acceso rápido y confiable a los activos de datos de su organización.
            </ListItem>
            <ListItem title="Gobernanza y Calidad de Datos">
              Establecemos marcos integrales de gobernanza de datos y procesos de aseguramiento 
              de calidad para mantener la integridad de sus datos.
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
      useCase: 'Una tienda local de comercio electrónico utilizó Spark para analizar datos de clientes, aumentando las ventas en un 20% en tres meses a través de campañas de correo electrónico personalizadas.',
      example: 'NASA JPL redujo el tiempo de procesamiento de datos de 4 horas a 5 minutos para analizar datos de telemetría de misiones espaciales.',
      impact: 'Aumenta la rentabilidad a través del análisis de datos en tiempo real. Impulsa las ventas mediante marketing personalizado, potencialmente aumentando las tasas de conversión en un 10-30%.'
    },
    {
      technology: 'Snowflake',
      useCase: 'Una firma de contabilidad en crecimiento consolidó datos de clientes, ahorrando horas cada semana y mejorando la satisfacción del cliente.',
      example: 'Capital One redujo el tiempo de ejecución de consultas de 20 minutos a 2 segundos después de migrar a la plataforma de datos en la nube de Snowflake.',
      impact: 'Mejora la rentabilidad reduciendo los costos de datos en un 20-40%. Aumenta las ventas a través de un servicio al cliente más rápido, potencialmente aumentando la retención en un 15-25%.'
    },
    {
      technology: 'AWS',
      useCase: 'Un negocio familiar de fabricación trasladó sus sistemas a AWS. Redujeron los costos de TI en un 30% y ahora pueden acceder a sus datos de forma segura desde cualquier lugar, ¡súper útil para gestionar operaciones en movimiento!',
      example: 'Airbnb aprovechó AWS para lanzarse en 190 países, soportando más de 4 millones de listados hasta 2023.',
      impact: 'Mejora la rentabilidad a través de la reducción de costos de infraestructura de TI, a menudo con ahorros del 20-30%. Aumenta las ventas al permitir un escalado rápido y el despliegue de nuevos servicios, potencialmente acelerando el tiempo de comercialización en un 30-50% para nuevos productos o características.'
    },
    {
      technology: 'Azure',
      useCase: 'Una práctica dental de tamaño medio utilizó Azure para crear un portal seguro para pacientes. Los pacientes adoran el fácil acceso a sus registros, y la práctica redujo el trabajo administrativo en un 25%, dando al personal más tiempo para la atención al paciente.',
      example: 'Escalando con la nube, Procter & Gamble (P&G) reduce el tiempo de comercialización con una innovación de productos un 35% más rápida.',
      impact: 'Impulsa la rentabilidad optimizando la asignación de recursos y reduciendo los costos operativos, a menudo en un 15-25%. Aumenta las ventas a través de mejores experiencias de cliente e insights basados en datos, potencialmente llevando a un aumento del 10-20% en la satisfacción y retención del cliente.'
    },
    {
      technology: 'Google Cloud',
      useCase: 'Una cadena local de supermercados utilizó la IA de Google Cloud para predecir la demanda de productos. Redujeron el desperdicio en un 15% y siempre tienen artículos populares en stock, ¡los clientes lo notaron y las ventas han aumentado!',
      example: 'Carrefour aumentó las ventas en un 60% con la optimización de precios impulsada por IA de Google Cloud.',
      impact: 'Mejora la rentabilidad a través de optimizaciones impulsadas por IA, potencialmente reduciendo los costos operativos en un 10-20%. Aumenta las ventas al permitir una previsión precisa de la demanda y marketing personalizado, a menudo llevando a un impulso del 5-15% en los ingresos.'
    },
    {
      technology: 'Kafka',
      useCase: 'Una pequeña empresa de logística utilizó Kafka para transmitir datos en tiempo real de sus camiones de reparto. Optimizaron rutas sobre la marcha, ahorrando un 10% en combustible y completando más entregas cada día.',
      example: 'LinkedIn procesa más de 7 billones de mensajes por día usando Kafka para su pipeline de datos unificado.',
      impact: 'Mejora la rentabilidad al permitir el procesamiento de datos en tiempo real para optimizaciones operativas inmediatas, a menudo llevando a ganancias de eficiencia del 10-20%. Aumenta las ventas a través de una mejor calidad de servicio y capacidad de respuesta, potencialmente impulsando la satisfacción del cliente y el negocio repetido en un 15-25%.'
    },
    {
      technology: 'Airflow',
      useCase: 'Una agencia de marketing boutique automatizó sus informes con Airflow. Ahora entregan informes de clientes un 50% más rápido y aceptaron nuevos clientes sin contratar más personal.',
      example: 'Astronomer informa que los clientes que usan Airflow han visto una reducción del 90% en errores de pipelines de datos.',
      impact: 'Mejora la rentabilidad automatizando flujos de trabajo de datos, reduciendo los costos de mano de obra manual en un 30-50%. Aumenta las ventas mejorando la calidad del servicio y la capacidad, permitiendo a las empresas aceptar más clientes o proyectos sin aumentos proporcionales de costos.'
    },
    {
      technology: 'dbt',
      useCase: 'Una startup SaaS en crecimiento utilizó dbt para limpiar sus datos desordenados. Su equipo ahora pasa un 60% menos de tiempo discutiendo sobre números y más tiempo mejorando su producto.',
      example: 'Netlify logró transformaciones de datos un 90% más rápidas usando dbt.',
      impact: 'Impulsa la rentabilidad optimizando procesos de datos, potencialmente reduciendo los costos laborales relacionados con datos en un 40-60%. Aumenta las ventas indirectamente al permitir insights de negocio más rápidos y precisos, llevando a mejores decisiones de producto y potencialmente a lanzamientos de características un 10-20% más rápidos.'
    },
    {
      technology: 'Tableau',
      useCase: 'Una cadena local de gimnasios creó paneles fáciles de entender con Tableau. Detectaron tendencias en la asistencia de miembros y adaptaron su horario de clases, aumentando la retención de membresías en un 30%.',
      example: 'Lenovo redujo el tiempo de creación de informes en un 90% después de implementar Tableau para análisis de ventas.',
      impact: 'Mejora la rentabilidad a través de la toma de decisiones basada en datos, a menudo llevando a ahorros de costos del 15-25% en varias operaciones. Aumenta las ventas al permitir una visualización clara de tendencias de ventas y comportamientos de clientes, potencialmente impulsando los esfuerzos de ventas dirigidos en un 20-30%.'
    },
    {
      technology: 'Power BI',
      useCase: 'Un proveedor de autopartes de tamaño medio utilizó Power BI para visualizar su inventario. Identificaron piezas de movimiento lento y optimizaron los niveles de stock, liberando efectivo que estaba atado en exceso de inventario.',
      example: 'Ecolab mejoró la productividad de ventas en campo en un 4% usando Power BI para obtener insights basados en datos.',
      impact: 'Mejora la rentabilidad proporcionando insights claros para la gestión de inventario y eficiencias operativas, a menudo llevando a una reducción del 10-20% en costos de mantenimiento. Aumenta las ventas a través de una mejor comprensión de las tendencias de los clientes y el rendimiento de los productos, potencialmente mejorando las ventas cruzadas y adicionales en un 15-25%.'
    }
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Impacto en el Mundo Real"
        title="Transformando Negocios con Soluciones de Datos"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Nuestras tecnologías impulsan resultados tangibles para negocios de todos los tamaños.
          Así es como nuestras soluciones hacen la diferencia en el mundo real.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          {impactData.map((item, index) => (
            <FadeIn key={index}>
              <div className="mb-12 border-b border-neutral-800 pb-12 last:border-b-0 last:pb-0">
                <h3 className="font-display text-2xl font-semibold text-neutral-50 mb-4">{item.technology}</h3>
                <p className="text-neutral-400 mb-2"><strong>Caso de Uso Amigable para PyMEs:</strong> {item.useCase}</p>
                <p className="text-neutral-400 mb-2"><strong>Ejemplo del Mundo Real:</strong> {item.example}</p>
                <p className="text-neutral-400"><strong>Impacto en el Negocio:</strong> {item.impact}</p>
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
      role: 'Arquitecto de Datos',
      bio: 'Francis aporta una amplia experiencia en el diseño e implementación de arquitecturas de datos robustas para diversas industrias.',
    },
    {
      name: 'Diana Valladares',
      role: 'Arquitecta de Datos / Científica de Datos',
      bio: 'Diana combina su experiencia en arquitectura de datos con habilidades avanzadas en ciencia de datos para ofrecer soluciones de datos integrales.',
    },
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Sobre Nosotros"
        title="Conoce al Equipo Syyft"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Somos un equipo pequeño pero poderoso de expertos en datos apasionados por
          transformar negocios a través de soluciones de datos inteligentes.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {team.map((member) => (
            <FadeIn key={member.name} className="flex">
              <div className="flex flex-col items-start">
                <div className="rounded-2xl bg-neutral-50 p-4 ring-1 ring-neutral-50/10">
                  <Users className="h-8 w-8 text-black" />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold text-neutral-50">
                  {member.name}
                </h3>
                <p className="mt-1 text-base font-semibold text-neutral-300">
                  {member.role}
                </p>
                <p className="mt-2 text-base text-neutral-400">
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
    'Syyft: Construyendo arquitecturas de datos modernas y soluciones ETL para empresas con visión de futuro.',
}

export default async function Home() {
  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <FadeIn className="max-w-3xl">
            <h1 className="hero-title font-display text-5xl font-medium tracking-tight text-neutral-50 [text-wrap:balance] sm:text-7xl">
              Transformando Datos para Ayudar a Aumentar los Ingresos y Reducir los Costos.
            </h1>
            <p className="hero-description mt-6 text-xl text-neutral-400">
              En SYYFT, aprovechamos el poder de sus datos para impulsar la eficiencia y el crecimiento. 
              Nuestros servicios están diseñados para desbloquear todo el potencial de sus datos, asegurando
              que pueda tomar decisiones informadas que impulsen los ingresos y reduzcan los costos.
            </p>
            <div className="mt-10">
              <Button href="https://calendly.com/syyft-co" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Agendar Ahora</span>
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
        La experiencia de Syyft en arquitectura de datos y procesos ETL ha
        mejorado significativamente nuestro flujo de datos y capacidades analíticas. Sus
        soluciones son robustas, escalables y perfectamente alineadas con nuestras necesidades de negocio.
      </Testimonial>

      <Services />

      <RealWorldImpact />

      <AboutUs />

      <ContactSection />
    </>
  )
}
