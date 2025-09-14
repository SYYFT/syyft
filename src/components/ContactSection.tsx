import { Button } from '../components/Button'
import { Container } from '../components/Container'
import { FadeIn } from '../components/FadeIn'
import { Offices } from '../components/Offices'
import { MapComponent } from '../components/MapComponent'

export function ContactSection() {
  // You'll need to replace this with your actual Mapbox token
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN || 'pk.eyJ1Ijoic3l5ZnQiLCJhIjoiY21mYWR5YjZ1MWppcTJpb21jN2ZqN2I1bCJ9.EZkcmQRub7n35cNJmdQ2Pw'

  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                Tell us about your project
              </h2>
              <div className="mt-6 flex">
                <Button href="/contact" invert>
                  Lets Chat
                </Button>
              </div>
              <div className="mt-10 border-t border-white/10 pt-10">
                <h3 className="font-display text-base font-semibold text-white">
                  Our offices
                </h3>
                <Offices
                  invert
                  className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
                />
              </div>
            </div>
            
            <div className="lg:mt-0 mt-10">
              <MapComponent 
                mapboxToken={MAPBOX_TOKEN}
                className="w-full h-64 lg:h-80"
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
