'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin } from 'lucide-react'

interface MapComponentProps {
  mapboxToken: string
  className?: string
}

export function MapComponent({ mapboxToken, className = '' }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<any>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (map.current) return // Initialize map only once
    
    // Dynamically import mapbox to avoid SSR issues
    const initMap = async () => {
      try {
        // Use Mapbox Static Images API as a fallback that works immediately
        const staticMapUrl = `https://api.mapbox.com/styles/v1/mapbox/light-v11/static/pin-s+171717(-87.6298,41.8781)/-87.6298,41.8781,10,0/400x300@2x?access_token=${mapboxToken}`
        
        if (mapContainer.current) {
          mapContainer.current.innerHTML = `
            <div class="relative w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200">
              <img 
                src="${staticMapUrl}" 
                alt="Chicago office location" 
                class="w-full h-full object-cover grayscale contrast-125"
                onload="this.parentElement.querySelector('.loading').style.display='none'"
                onerror="this.style.display='none'; this.parentElement.querySelector('.fallback').style.display='flex'"
              />
              <div class="loading absolute inset-0 flex items-center justify-center bg-neutral-100">
                <div class="animate-pulse flex items-center space-x-2 text-neutral-500">
                  <div class="w-4 h-4 bg-neutral-300 rounded-full"></div>
                  <span class="text-sm">Loading map...</span>
                </div>
              </div>
              <div class="fallback absolute inset-0 hidden items-center justify-center bg-gradient-to-br from-neutral-100 to-neutral-200 text-neutral-600">
                <div class="text-center">
                  <div class="w-12 h-12 bg-neutral-950 rounded-full mx-auto mb-3 flex items-center justify-center">
                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="text-sm font-medium">Chicago, IL</div>
                  <div class="text-xs text-neutral-500 mt-1">Our Office Location</div>
                </div>
              </div>
            </div>
          `
          setIsLoaded(true)
        }
      } catch (error) {
        console.error('Error loading map:', error)
        setHasError(true)
        // Pure CSS fallback
        if (mapContainer.current) {
          mapContainer.current.innerHTML = `
            <div class="w-full h-full bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center text-neutral-600">
              <div class="text-center">
                <div class="w-12 h-12 bg-neutral-950 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="text-sm font-medium">Chicago, IL</div>
                <div class="text-xs text-neutral-500 mt-1">Our Office Location</div>
              </div>
            </div>
          `
        }
      }
    }

    initMap()
  }, [mapboxToken])

  // Fallback component if everything fails
  if (hasError) {
    return (
      <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-neutral-600">
          <MapPin className="w-12 h-12 mx-auto mb-3 text-neutral-950" />
          <div className="text-sm font-medium">Chicago, IL</div>
          <div className="text-xs text-neutral-500 mt-1">Our Office Location</div>
        </div>
      </div>
    )
  }

  return (
    <div 
      ref={mapContainer} 
      className={`relative overflow-hidden rounded-2xl bg-neutral-100 ${className}`}
    />
  )
}
