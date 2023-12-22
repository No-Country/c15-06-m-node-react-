import { Logo } from './Logo'
import { HeaderIcons } from './HeaderIcons'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../util/Auth'
import { ButtonLogin } from '../components/ButtonLogin'
import { ButtonRegister } from '../components/ButtonRegister'

export function Header() {
  return (
    <>
      <header className='hidden  h-16 w-full border-b border-gray-200 bg-white md:flex items-center p-10 justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <div className='md:w-4/12 '>
          <SearchBar />
        </div>
        {isAuthenticated() ? (
          <HeaderIcons />
        ) : (
          <div>
            <ButtonRegister />
            <ButtonLogin />
          </div>
        )}
      </header>

      <header className='flex flex-col  w-full border-b border-gray-200 bg-white md:hidden items-center p-30 relative justify-center gap-2'>
        <Link to='/'>
          <Logo />
        </Link>

        <div className='w-full flex px-4 justify-between'>
          <SearchBar />
          {isAuthenticated() ? (
            <HeaderIcons />
          ) : (
            <div>
              <ButtonRegister />
              <ButtonLogin />
            </div>
          )}
        </div>
      </header>
    </>
  )
}
