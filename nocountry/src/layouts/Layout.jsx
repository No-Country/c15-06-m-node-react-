import { Header } from '../layouts/Header'
import { CategoryBar } from './CategoryBar'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <CategoryBar />
      <section className='relative'>
        <Outlet />
      </section>
    </>
  )
}
