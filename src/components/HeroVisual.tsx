'use client'

import { useEffect, useState } from 'react'
import { BarChart3, TrendingUp, Database, Zap } from 'lucide-react'

export function HeroVisual() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full h-96 lg:h-[500px]">
      {/* Floating data cards */}
      <div className="absolute inset-0">
        {/* Main chart card */}
        <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-lg p-6 animate-pulse border border-neutral-100 w-48">
          <div className="flex items-center justify-between mb-4">
            <BarChart3 className="w-6 h-6 text-neutral-600" />
            <div className="text-xs text-neutral-500">Live Data</div>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-end h-12">
              <div className="w-6 bg-blue-200 rounded-t animate-pulse" style={{height: '30%'}}></div>
              <div className="w-6 bg-blue-300 rounded-t animate-pulse" style={{height: '60%'}}></div>
              <div className="w-6 bg-blue-400 rounded-t animate-pulse" style={{height: '45%'}}></div>
              <div className="w-6 bg-blue-500 rounded-t animate-pulse" style={{height: '80%'}}></div>
              <div className="w-6 bg-blue-600 rounded-t animate-pulse" style={{height: '70%'}}></div>
            </div>
          </div>
        </div>

        {/* Growth indicator */}
        <div className="absolute top-32 left-8 bg-green-50 rounded-xl shadow-md p-4 animate-bounce border border-green-100 w-36">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <div>
              <div className="text-lg font-bold text-green-700">+127%</div>
              <div className="text-xs text-green-600">Growth</div>
            </div>
          </div>
        </div>

        {/* Database connection */}
        <div className="absolute bottom-24 right-16 bg-neutral-900 rounded-xl shadow-lg p-4 text-white w-40">
          <div className="flex items-center space-x-2 mb-2">
            <Database className="w-5 h-5 text-blue-400" />
            <div className="text-sm font-medium">Connected</div>
          </div>
          <div className="text-xs text-neutral-400">
            <div className="flex justify-between">
              <span>Snowflake</span>
              <span className="text-green-400">●</span>
            </div>
            <div className="flex justify-between">
              <span>dbt Cloud</span>
              <span className="text-green-400">●</span>
            </div>
            <div className="flex justify-between">
              <span>Tableau</span>
              <span className="text-green-400">●</span>
            </div>
          </div>
        </div>

        {/* Speed indicator */}
        <div className="absolute bottom-8 left-12 bg-yellow-50 rounded-xl shadow-md p-4 border border-yellow-100 w-32">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-yellow-600" />
            <div>
              <div className="text-lg font-bold text-yellow-700">2.3s</div>
              <div className="text-xs text-yellow-600">Query Time</div>
            </div>
          </div>
        </div>

        {/* Connecting lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
          <path
            d="M100 150 Q200 100 300 180"
            stroke="#6366f1"
            strokeWidth="2"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
          <path
            d="M150 300 Q250 250 350 320"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
            strokeDasharray="3,3"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  )
}
