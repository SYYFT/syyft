'use client'

import { useEffect, useState } from 'react'
import { 
  Award, 
  BarChart3, 
  Building2, 
  Target, 
  Users,
  Database,
  ArrowUpRight,
  Star
} from 'lucide-react'

export function AboutVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-96 lg:h-[500px]">
      {/* Professional achievement cards */}
      <div className="absolute inset-0">
        {/* Top row - Expertise and Tech Stack */}
        {/* Expertise card */}
        <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100 w-48 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center justify-between mb-4">
            <Award className="w-6 h-6 text-blue-600" />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          <div className="text-lg font-bold text-neutral-900">5+ Years</div>
          <div className="text-sm text-neutral-600">Data Architecture</div>
          {/* <div className="text-xs text-neutral-500 mt-2">Data Infraestructure</div> */}
        </div>

        {/* Data visualization chart */}
        <div className="absolute top-8 left-8 bg-white rounded-xl shadow-lg p-4 border border-neutral-100 w-36 transform hover:scale-105 transition-transform duration-300">
          <BarChart3 className="w-6 h-6 text-neutral-600 mb-3" />
          <div className="flex justify-between items-end h-10 mb-2">
            <div className="w-3 bg-blue-300 rounded-t" style={{height: '40%'}}></div>
            <div className="w-3 bg-blue-400 rounded-t" style={{height: '70%'}}></div>
            <div className="w-3 bg-blue-500 rounded-t" style={{height: '55%'}}></div>
            <div className="w-3 bg-blue-600 rounded-t" style={{height: '90%'}}></div>
            <div className="w-3 bg-blue-700 rounded-t" style={{height: '80%'}}></div>
          </div>
          <div className="text-xs text-neutral-500 text-center font-medium">Data Visualization</div>
        </div>

        {/* Bottom row - Performance and Tech Stack */}
        {/* Technology stack */}
        <div className="absolute bottom-8 right-8 bg-neutral-900 rounded-xl shadow-xl p-6 text-white w-56 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center space-x-2 mb-4">
            <Database className="w-6 h-6 text-blue-400" />
            <div className="text-sm font-medium">Tech Stack</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Snowflake</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>dbt</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Airflow</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span>Power BI</span>
            </div>
          </div>
        </div>

        {/* Performance indicator */}
        <div className="absolute bottom-8 left-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-lg p-5 border border-purple-200 w-40 transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center space-x-2 mb-3">
            <Target className="w-6 h-6 text-purple-600" />
            <ArrowUpRight className="w-5 h-5 text-purple-500" />
          </div>
          <div className="text-sm font-bold text-purple-800">ROI Focus</div>
          <div className="text-xs text-purple-600 mt-1">Measurable impact</div>
          <div className="text-xs text-purple-500">Data-driven results</div>
        </div>

        {/* Connecting professional lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
          <path
            d="M180 80 Q280 60 380 100"
            stroke="#3b82f6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,4"
          />
          <path
            d="M180 320 Q280 300 380 340"
            stroke="#8b5cf6"
            strokeWidth="2"
            fill="none"
            strokeDasharray="6,6"
          />
          <path
            d="M200 120 Q250 200 200 280"
            stroke="#10b981"
            strokeWidth="1.5"
            fill="none"
            strokeDasharray="4,8"
          />
        </svg>

        {/* Professional background elements */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-16 right-16 w-32 h-32 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 left-16 w-28 h-28 bg-purple-200 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-green-200 rounded-full blur-xl"></div>
        </div>
      </div>
    </div>
  )
}
