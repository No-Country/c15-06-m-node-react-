import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'
import { useSelector } from 'react-redux'
import { useProductSearch } from '../hooks/useSearchProduct'
import { useEffect, useState } from 'react'

export function Products() {
  const [searchData, setSearchData] = useState([])
  const { searchTerm } = useSelector(state => state.search)

  const URL = `/product`
  const { data, error, loading } = useGetData(URL)

  useEffect(() => {
    if (data) {
      setSearchData(data.products)
    }
  }, [data])

  const filteredData = useProductSearch(searchData, searchTerm)

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <CategoryHeader category='Todos los Productos' />

      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-20 md:px-24 md:py-10'>
        {filteredData.map(product => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  )
}
