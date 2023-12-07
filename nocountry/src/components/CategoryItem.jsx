import { Link } from 'react-router-dom'

export function CategoryItem({ category }) {
  return (
    <>
      <Link
        to={`/products/category/${category}`}
        className='hover:underline hidden md:block'>
        {category}
      </Link>
    </>
  )
}
