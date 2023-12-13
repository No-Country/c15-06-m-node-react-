import { Header } from '../layouts/Header'
import { CategoryBar } from './CategoryBar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export function Layout() {
  const location = useLocation()
  const path = location.pathname

  return (
    <>
      <div
        className={path === '/login' || path === '/register' ? 'hidden' : ''}>
        <Header />
        <CategoryBar />
      </div>
      <section className='relative'>
        <Outlet />
      </section>
    </>
  )
}
