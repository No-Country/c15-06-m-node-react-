import { Header } from '../layouts/Header'
import { CategoryBar } from './CategoryBar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import cookies from 'js-cookie'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Layout() {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()

  useEffect(() => {
    const cookie = cookies.get()

    if (cookie.token) {
    }
  }, [])

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
