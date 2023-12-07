import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

export function UserLayout() {
  return (
    <main className='flex h-screen'>
      <section className='w-1/2 pt-20 flex justify-center '>
        <Link to='/' className='text-5xl font-bold text-center'>
          EcoVida Store
        </Link>
      </section>
      <section className='w-1/2 h-full'>
        <Outlet />
      </section>
    </main>
  )
}
