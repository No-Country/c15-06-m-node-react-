import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'
import { useDispatch } from 'react-redux'
import { setClear } from '../redux/SearchSlice'
import { useState } from 'react'
import { Pagination } from '../components/Pagination'
import { useEffect } from 'react'

export function Products() {
  const [actualPage, setActualPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const dispatch = useDispatch()

  const endPoint = `/product`
  const URL = `${endPoint}?page=${actualPage}`
  const { data, error, loading } = useGetData(URL, actualPage)

  useEffect(() => {
    if (data) {
      setTotalPages(data.totalPages)
    }
  }, [data])

  useEffect(() => {
    dispatch(setClear())
  }, [])

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <CategoryHeader category='Todos los Productos' />

      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-20 md:px-60 md:py-5'>
        {data?.products.map(product => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <Pagination
        actualPage={actualPage}
        setActualPage={setActualPage}
        totalPages={totalPages}
      />
    </>
  )
}
