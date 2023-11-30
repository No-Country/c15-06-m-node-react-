import { Link } from 'react-router-dom'

export function CategoryItem({ category }) {
  return (
    <>
      <Link
        to={`/category/${category}`}
        className='hover:underline hidden md:block'>
        {category}
      </Link>
    </>
  )
}
