'use client'

import { useState } from 'react'
import { Container } from './Container'
import { FadeIn, FadeInStagger } from './FadeIn'
import { SectionIntro } from './SectionIntro'
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
  X
} from 'lucide-react'

export function RealWorldImpact() {
  const [selectedTech, setSelectedTech] = useState(null)
  const [hoveredTech, setHoveredTech] = useState<number | null>(null)

  const impactData = [
    {
      id: 'spark',
      technology: 'Apache Spark',
      icon: Zap,
      color: "bg-orange-50 border-orange-200 text-orange-600",
      iconBg: "bg-orange-500",
      useCase: 'A local e-commerce shop used Spark to analyze customer data, boosting sales by 20% in three months through personalized email campaigns.',
      example: 'NASA JPL reduced data processing time from 4 hours to 5 minutes for analyzing telemetry data from space missions.',
      impact: 'Increases profitability through real-time data analysis. Boosts sales via personalized marketing, potentially increasing conversion rates by 10-30%.'
    },
    {
      id: 'snowflake',
      technology: 'Snowflake',
      icon: Database,
      color: "bg-blue-50 border-blue-200 text-blue-600",
      iconBg: "bg-blue-500",
      useCase: 'A growing accounting firm consolidated client data, saving hours each week and improving client satisfaction.',
      example: 'Capital One reduced query runtime from 20 minutes to 2 seconds after migrating to Snowflake\'s cloud data platform.',
      impact: 'Enhances profitability by reducing data costs by 20-40%. Increases sales through faster customer service, potentially boosting retention by 15-25%.'
    },
    {
      id: 'aws',
      technology: 'AWS',
      icon: Layers,
      color: "bg-yellow-50 border-yellow-200 text-yellow-600",
      iconBg: "bg-yellow-500",
      useCase: 'A family-owned manufacturing business moved their systems to AWS. They cut IT costs by 30% and can now access their data securely from anywhere – super helpful for managing operations on the go!',
      example: 'Airbnb leveraged AWS to launch in 190 countries, supporting over 4 million listings as of 2023.',
      impact: 'Improves profitability through reduced IT infrastructure costs, often 20-30% savings. Increases sales by enabling rapid scaling and deployment of new services, potentially accelerating time-to-market by 30-50% for new products or features.'
    },
    // {
    //   id: 'azure',
    //   technology: 'Azure',
    //   icon: Server,
    //   useCase: 'A mid-sized dental practice used Azure to create a secure patient portal. Patients love the easy access to their records, and the practice reduced admin work by 25%, giving staff more time for patient care.',
    //   example: 'Scaling with the cloud, Procter & Gamble (P&G) reduces time-to-market with 35% faster product innovation.',
    //   impact: 'Boosts profitability by optimizing resource allocation and reducing operational costs, often by 15-25%. Increases sales through improved customer experiences and data-driven insights, potentially leading to a 10-20% increase in customer satisfaction and retention.'
    // },
    // {
    //   id: 'gcp',
    //   technology: 'Google Cloud',
    //   icon: Cloud,
    //   useCase: 'A local grocery chain used Google Cloud\'s AI to predict product demand. They reduced waste by 15% and always have popular items in stock – customers noticed and sales are up!',
    //   example: 'Carrefour increased sales by 60% with Google Cloud\'s AI-powered pricing optimization.',
    //   impact: 'Enhances profitability through AI-driven optimizations, potentially reducing operational costs by 10-20%. Increases sales by enabling precise demand forecasting and personalized marketing, often leading to a 5-15% boost in revenue.'
    // },
    // {
    //   id: 'kafka',
    //   technology: 'Kafka',
    //   icon: Activity,
    //   useCase: 'A small logistics company used Kafka to stream real-time data from their delivery trucks. They optimized routes on the fly, saving 10% on fuel and completing more deliveries each day.',
    //   example: 'LinkedIn processes over 7 trillion messages per day using Kafka for their unified data pipeline.',
    //   impact: 'Improves profitability by enabling real-time data processing for immediate operational optimizations, often leading to 10-20% efficiency gains. Increases sales through improved service quality and responsiveness, potentially boosting customer satisfaction and repeat business by 15-25%.'
    // },
    {
      id: 'airflow',
      technology: 'Airflow',
      icon: Workflow,
      color: "bg-green-50 border-green-200 text-green-600",
      iconBg: "bg-green-500",
      useCase: 'A boutique marketing agency automated their reporting with Airflow. They now deliver client reports 50% faster and took on new clients without hiring more staff.',
      example: 'Astronomer reports that clients using Airflow have seen a 90% reduction in data pipeline errors.',
      impact: 'Enhances profitability by automating data workflows, reducing manual labor costs by 30-50%. Increases sales by improving service quality and capacity, allowing businesses to take on more clients or projects without proportional cost increases.'
    },
    {
      id: 'dbt',
      technology: 'dbt',
      icon: GitBranch,
      color: "bg-purple-50 border-purple-200 text-purple-600",
      iconBg: "bg-purple-500",
      useCase: 'A growing SaaS startup used dbt to clean up their messy data. Their team now spends 60% less time arguing about numbers and more time improving their product.',
      example: 'Netlify achieved 90% faster data transformations using dbt.',
      impact: 'Boosts profitability by streamlining data processes, potentially reducing data-related labor costs by 40-60%. Increases sales indirectly by enabling faster, more accurate business insights, leading to better product decisions and potentially 10-20% faster feature releases.'
    },
    // {
    //   id: 'tableau',
    //   technology: 'Tableau',
    //   icon: BarChart2,
    //   useCase: 'A local gym chain created easy-to-understand dashboards with Tableau. They spotted trends in member attendance and tailored their class schedule, increasing membership retention by 30%.',
    //   example: 'Lenovo reduced report creation time by 90% after implementing Tableau for sales analytics.',
    //   impact: 'Improves profitability through data-driven decision making, often leading to 15-25% cost savings in various operations. Increases sales by enabling clear visualization of sales trends and customer behaviors, potentially boosting targeted sales efforts by 20-30%.'
    // },
    // {
    //   id: 'powerbi',
    //   technology: 'Power BI',
    //   icon: PieChart,
    //   useCase: 'A mid-sized auto parts supplier used Power BI to visualize their inventory. They identified slow-moving parts and optimized stock levels, freeing up cash that was tied up in excess inventory.',
    //   example: 'Ecolab improved field sales productivity by 4% using Power BI for data-driven insights.',
    //   impact: 'Enhances profitability by providing clear insights for inventory management and operational efficiencies, often leading to 10-20% reduction in carrying costs. Increases sales through better understanding of customer trends and product performance, potentially improving upselling and cross-selling by 15-25%.'
    // }
    
  ]

  return (
    <>
      <SectionIntro
        eyebrow="Real-World Impact"
        title="How Modern Data Tools Transform Small Organizations"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          These technologies drive tangible results for organizations of all sizes.
          See how Syyft specializes in making them work for small teams.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {impactData.map((item, index) => (
              <FadeIn key={item.id}>
                <button
                  onClick={() => setSelectedTech(item)}
                  onMouseEnter={() => setHoveredTech(index)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    hoveredTech === index 
                      ? `${item.color} transform scale-105 shadow-xl` 
                      : 'bg-white border-neutral-200 hover:border-neutral-300 hover:shadow-lg'
                  }`}
                >
                  <div className={`rounded-xl p-3 mb-3 transition-all duration-300 ${
                    hoveredTech === index 
                      ? `${item.iconBg} scale-110` 
                      : 'bg-neutral-950 group-hover:scale-110'
                  }`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <span className={`text-sm font-semibold text-center leading-tight transition-colors ${
                    hoveredTech === index ? '' : 'text-neutral-950'
                  }`}>
                    {item.technology}
                  </span>
                  
                  {hoveredTech === index && (
                    <div className="absolute -top-2 -right-2">
                      <div className="w-4 h-4 bg-current rounded-full opacity-75 animate-ping"></div>
                    </div>
                  )}
                </button>
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>

      {/* Popup Modal */}
      {selectedTech && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-white rounded-t-2xl border-b border-neutral-200 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-neutral-950 p-3">
                  <selectedTech.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-950">
                  {selectedTech.technology}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTech(null)}
                className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-neutral-500" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <h4 className="font-semibold text-lg text-neutral-950 mb-2">SME-Friendly Use Case</h4>
                <p className="text-neutral-600">{selectedTech.useCase}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neutral-950 mb-2">Real-World Example</h4>
                <p className="text-neutral-600">{selectedTech.example}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-neutral-950 mb-2">Business Impact</h4>
                <p className="text-neutral-600">{selectedTech.impact}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
