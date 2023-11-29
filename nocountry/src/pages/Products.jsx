import { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'

export function Products() {
  const urlTest = 'https://fakestoreapi.com/products'

  const { data, error, loading } = useGetData(urlTest)

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <h1>Products</h1>
      <ul className='grid grid-cols-autoColums gap-8 px-40 py-10'>
        {data?.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  )
}
