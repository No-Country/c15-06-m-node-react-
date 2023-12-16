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
        <SearchBar />
        {isAuthenticated() ? (
          <HeaderIcons />
        ) : (
          <div>
            <ButtonRegister />
            <ButtonLogin />
          </div>
        )}
      </header>
    </>
  )
}
