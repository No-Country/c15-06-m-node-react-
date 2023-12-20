import { Link } from 'react-router-dom'
import HojasLat from '../imgs/hoja-planta.png'

export function UserLayout({ children }) {
  return (
    <main className='flex h-screen bg-palette-octonary bg-opacity-5'>
      <section className='w-1/2 pt-20 block'>
        <p className='text-5xl font-bold text-center bg-gradient-to-r from-palette-primary to-palette-senary text-transparent bg-clip-text font-rajdhani'>
          <Link to='/'>
            ECOVIDA.STORE
          </Link>
        </p>
        <img src={HojasLat} alt="Hojas de planta" className='ml-0' />
      </section>

      <section className='w-1/2 h-full bg-white'>
        {children}
      </section>
    </main>
  )
}
