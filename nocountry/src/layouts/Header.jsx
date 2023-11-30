import { Logo } from './Logo'
import { HeaderIcons } from './HeaderIcons'
import { SearchBar } from './SearchBar'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <>
      <header className='hidden  h-16 w-full border-b border-gray-200 bg-white md:flex items-center p-10 justify-between'>
        <Link to='/'>
          <Logo />
        </Link>
        <SearchBar />
        <HeaderIcons />
      </header>
    </>
  )
}
