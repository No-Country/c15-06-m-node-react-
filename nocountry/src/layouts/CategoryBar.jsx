import { useGetData } from '../hooks/useGetData'
import { CategoryItem } from '../components/CategoryItem'
import { Link } from 'react-router-dom'

export function CategoryBar() {
  const { data, error, loading } = useGetData(
    'https://fakestoreapi.com/products/categories'
  )

  return (
    <>
      <nav className='h-16 w-full border-b border-gray-200 bg-white flex items-center p-10 justify-evenly'>
        <Link to='/products'>Todos los Productos</Link>
        {data?.map(category => (
          <CategoryItem key={category} category={category} />
        ))}
      </nav>
    </>
  )
}
