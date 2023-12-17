import { Link } from 'react-router-dom'

export function UserLayout({ children }) {
  return (
    <main className='flex h-screen'>
      <section className='w-1/2 pt-20 flex justify-center '>
        <Link to='/' className='text-5xl font-bold text-center'>
          EcoVida Store
        </Link>
      </section>
      <section className='w-1/2 h-full'>{children}</section>
    </main>
  )
}
