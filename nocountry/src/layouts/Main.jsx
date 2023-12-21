import { CardCarousel } from "../components/CardCarousel"
import { LandingInfo } from "../components/LandingInfo"
import { LandingBoton } from "../components/LandingButton"
import { OngAnimal } from "../components/OngAnimal"
import { OngSilvestre } from "../components/OngSilvestre"
import { OngAlimentos } from "../components/OngAlimentos"

export function Main() {
  return (
    <main className='w-full p-4'>
      <LandingInfo />
      <LandingBoton />
      <div className="mt-48"><CardCarousel /></div>
      <OngAnimal />
      <OngSilvestre />
      <OngAlimentos />
    </main>
  )
}
