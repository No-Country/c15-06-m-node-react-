import { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'

export function Products() {
  const URL = `${import.meta.env.VITE_BACKEND_URL}/product`

  const { data, error, loading } = useGetData(URL)

  return (
    <>
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <CategoryHeader category='Todos los Productos' />
      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-20 md:px-24 md:py-10'>
        {data?.products.map(product => (
          <li key={product._id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  )
}
