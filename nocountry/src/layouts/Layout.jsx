import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <main className='min-h-full w-full'>
      <Outlet />
    </main>
  )
}
