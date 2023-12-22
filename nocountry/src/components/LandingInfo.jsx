
import { LandingButton } from "./LandingButton"

export function LandingInfo() {
  return (
    <div className='flex justify-center mt-10 mx-20'>
      <div className='mt-16'>
        <h1 className='text-5xl font-rajdhani font-bold w-[400px]'>
          EcoVida Store: Tu Destino Sostenible.
        </h1>
        <p className='text-2xl font-semibold mt-10'>
          Sumérgete en un mundo de productos cuidadosamente seleccionados para
          tu bienestar y el del planeta. Siente la diferencia de una elección
          consciente.
        </p>
        <div className='flex justify-center mt-20'><LandingButton></LandingButton></div>
      </div>
      <div>
        <div className='w-[560px] h-[640px]'>
          <img
            className='w-full h-full object-cover rounded-xl shadow-lg ml-10'
            src='https://i.pinimg.com/1200x/e7/86/00/e786005372ca39b000d27d8091483d32.jpg'
            alt='Vida sustentable'
          />
        </div>
      </div>
    </div>
  )
}
