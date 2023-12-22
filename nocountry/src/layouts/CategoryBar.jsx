import { useGetData } from '../hooks/useGetData'
import { CategoryItem } from '../components/CategoryItem'
import { Link } from 'react-router-dom'

import { useState } from 'react'

export function CategoryBar() {
  const categories = [
    'Frutos secos y cereales',
    'Hierbas y especias',
    'Proteicos',
    'Legumbres',
    'Infusiones',
    'Mascotas',
  ]

  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className='hidden md:flex h-16 w-full border-b border-gray-200 bg-white  items-center p-10 justify-end gap-10'>
        <Link
          to='/products'
          className='hidden md:block font-rajdhani font-medium'>
          Todos los Productos
        </Link>
        {categories?.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </nav>

      {/* Mobile Menu */}
      <nav className='md:hidden relative'>
        <button onClick={toggleMenu}>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {menuOpen && (
          <div className=' top-16 right-0 w-full bg-white z-10 flex flex-col gap-2 px-4 border-b-2 mb-2'>
            <Link
              to='/products'
              className='font-rajdhani font-medium hover:bg-palette-nonary hover:rounded-xl hover:bg-opacity-50 hover:p-2'>
              Todos los Productos
            </Link>
            {categories?.map(category => (
              <Link
                to={`/products/category/${category}`}
                key={category}
                className='  font-rajdhani font-medium hover:bg-palette-nonary hover:rounded-xl hover:bg-opacity-50 hover:p-2'>
                {category}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
