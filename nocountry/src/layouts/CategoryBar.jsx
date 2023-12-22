import { useGetData } from '../hooks/useGetData'
import { CategoryItem } from '../components/CategoryItem'
import { Link } from 'react-router-dom'

export function CategoryBar() {
  const categories = [
    'Frutos secos y cereales',
    'Hierbas y especias',
    'Proteicos',
    'Legumbres',
    'Infusiones',
    'Mascotas',
  ]

  return (
    <>
      <nav className='hideen md:flex h-16 w-full border-b border-gray-200 bg-white flex items-center p-10 justify-end gap-10'>
        <Link to='/products' className='hidden md:block font-rajdhani font-medium'>
          Todos los Productos
        </Link>
        {categories?.map(category => (
          <CategoryItem key={category} category={category}/>
        ))}
      </nav>
    </>
  )
}
