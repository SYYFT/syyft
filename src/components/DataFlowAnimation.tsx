// File: src/components/DataFlowAnimation.tsx

'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function DataFlowAnimation() {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(prev => !prev);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <style jsx>{`
        @keyframes dataFlow {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(300px, 0) scale(2) rotate(0deg); }
          50% { transform: translate(300px, 100px) scale(2) rotate(270deg); }
          75% { transform: translate(0, 100px) scale(1) rotate(270deg); }
          100% { transform: translate(0, 0) scale(1) rotate(0deg); }
        }

        .data-flow {
          transition: all 5s ease-in-out;
        }

        .data-flow.animate {
          animation: dataFlow 5s infinite;
        }
      `}</style>
      <FadeIn>
        <h2 className="font-display text-4xl font-semibold text-neutral-950 sm:text-5xl">
          Data Flow Visualization
        </h2>
        <p className="mt-6 text-xl text-neutral-600">
          See how we streamline your data processes.
        </p>
      </FadeIn>
      <div className="mt-10 h-64 bg-neutral-100 rounded-lg flex items-center justify-center">
        <div className={`w-16 h-16 bg-blue-500 rounded-full data-flow ${isAnimating ? 'animate' : ''}`} />
      </div>
    </Container>
  )
}