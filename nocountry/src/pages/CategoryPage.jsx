import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'
import { ProductNotFound } from '../components/ProductNotFound'

export function CategoryPage() {
  const { category } = useParams()
  const categoryFormat = category.replace(/\s/g, '')
  const URL = `${
    import.meta.env.VITE_BACKEND_URL
  }/product/category/${categoryFormat}`

  const { data, error, loading } = useGetData(URL, category)

  return (
    <>
      <CategoryHeader category={category} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-5 md:gap-20 md:px-24 md:py-10'>
        {data &&
          data?.map(product => (
            <li key={product._id}>
              <ProductCard product={product} key={product._id} />
            </li>
          ))}
      </ul>
    </>
  )
}
