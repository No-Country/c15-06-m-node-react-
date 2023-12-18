import { Main } from '../layouts/Main'
import { isAuthenticated } from '../util/Auth'

export function Home() {
  console.log(isAuthenticated())
  return (
    <section className='flex w-full min-h-screen'>
      <Main />
    </section>
  )
}
