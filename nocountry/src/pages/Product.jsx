import { useParams } from 'react-router-dom'
import { useGetData } from '../hooks/useGetData'
import { Loading } from '../layouts/Loading'
import { ProductNotFound } from '../components/ProductNotFound'
import { Error } from './Error'
import { ProductDescription } from '../components/ProductDescription'
export function Product() {
  const { id } = useParams()

  const URL = `/product/${id}`
  const { data, error, loading } = useGetData(URL, id)

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {data ? <ProductDescription product={data} /> : <ProductNotFound />}
    </>
  )
}
