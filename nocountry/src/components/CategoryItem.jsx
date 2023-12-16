import { Link } from 'react-router-dom'

export function CategoryItem({ category }) {
  const categoryUpperCase = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <>
      <Link
        to={`/products/category/${category}`}
        className='hover:underline hidden md:block'>
        {categoryUpperCase}
      </Link>
    </>
  )
}
