import { Link } from 'react-router-dom'

export function CategoryItem({ category }) {
  const categoryUpperCase = category.charAt(0).toUpperCase() + category.slice(1)

  return (
    <>
      <Link
        to={`/products/category/${category}`}
        className=' hidden md:block font-rajdhani font-medium hover:bg-palette-nonary hover:rounded-xl hover:bg-opacity-50 hover:p-2'>
        {categoryUpperCase}
      </Link>
    </>
  )
}
