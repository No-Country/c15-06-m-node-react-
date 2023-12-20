import { CardCarousel } from "../components/CardCarousel"
import { LandingInfo } from "../components/LandingInfo"
import { LandingBoton } from "../components/LandingButton"

export function Main() {
  return (
    <main className='w-full p-4'>
      <LandingInfo />
      <LandingBoton />
      <div className="mt-48"><CardCarousel /></div>
    </main>
  )
}
