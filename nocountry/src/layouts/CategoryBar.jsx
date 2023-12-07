import { useGetData } from '../hooks/useGetData'
import { CategoryItem } from '../components/CategoryItem'
import { Link } from 'react-router-dom'

export function CategoryBar() {
  const { data, error, loading } = useGetData(
    'https://fakestoreapi.com/products/categories'
  )

  const categories = [
    'frutos secos',
    'hierbas y especias',
    'proteicos',
    'legumbres',
    'infusiones',
  ]

  return (
    <>
      <nav className='hideen md:flex h-16 w-full border-b border-gray-200 bg-white flex items-center p-10 justify-end gap-10'>
        <Link to='/products' className='hidden md:block'>
          Todos los Productos
        </Link>
        {categories?.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </nav>
    </>
  )
}
