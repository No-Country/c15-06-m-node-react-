import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'
import { deleteSpaces } from '../util/Utilities'

export function CategoryPage() {
  const { category } = useParams()

  const URL = `/product?category=${category}`

  const { data, error, loading } = useGetData(URL, category)

  return (
    <>
      <CategoryHeader category={category} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-5 md:gap-20 md:px-24 md:py-10'>
        {data &&
          data?.products.map(product => (
            <li key={product._id}>
              <ProductCard product={product} key={product._id} />
            </li>
          ))}
      </ul>
    </>
  )
}
