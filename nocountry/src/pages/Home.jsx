import { Main } from '../layouts/Main'
import { isAuthenticated } from '../util/Auth'

export function Home() {
  return (
    <section className='flex w-full min-h-screen'>
      <Main />
    </section>
  )
}
