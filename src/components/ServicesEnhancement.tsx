'use client'

import { useState } from 'react'
import { 
  Brain, 
  Database, 
  Cog, 
  Rocket
} from 'lucide-react'

export function ServicesEnhancement() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: Brain,
      title: "Data Advisory",
      color: "bg-blue-50 border-blue-200 text-blue-600",
      stats: "90% faster onboarding"
    },
    {
      icon: Database,
      title: "Pipeline Building",
      color: "bg-green-50 border-green-200 text-green-600",
      stats: "99.9% uptime"
    },
    {
      icon: Cog,
      title: "Internal Tools",
      color: "bg-purple-50 border-purple-200 text-purple-600",
      stats: "50% time saved"
    },
    {
      icon: Rocket,
      title: "POC Development",
      color: "bg-orange-50 border-orange-200 text-orange-600",
      stats: "2-week delivery"
    }
  ]

  return (
    <div className="mt-12 space-y-12">
      {/* Service Icons Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <div
              key={index}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                hoveredService === index 
                  ? `${service.color} transform scale-105 shadow-lg` 
                  : 'bg-neutral-50 border-neutral-200 hover:border-neutral-300'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
            >
              <Icon className={`w-8 h-8 mb-3 transition-colors ${
                hoveredService === index ? '' : 'text-neutral-600'
              }`} />
              <h3 className="font-semibold text-sm mb-1">{service.title}</h3>
              <p className="text-xs text-neutral-500">{service.stats}</p>
              
              {hoveredService === index && (
                <div className="absolute -top-2 -right-2">
                  <div className="w-4 h-4 bg-current rounded-full opacity-75 animate-ping"></div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-neutral-900">48hrs</div>
          <div className="text-sm text-neutral-600">Avg Response</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-neutral-900">95%</div>
          <div className="text-sm text-neutral-600">Success Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-neutral-900">$5K+</div>
          <div className="text-sm text-neutral-600">Cost Savings</div>
        </div>
      </div>
    </div>
  )
}
