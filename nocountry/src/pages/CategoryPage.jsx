import { useState, useEffect } from 'react'
import { useGetData } from '../hooks/useGetData'
import { ProductCard } from '../components/ProductCard'
import { useParams } from 'react-router-dom'
import { CategoryHeader } from '../components/CategoryHeader'
import { Loading } from '../layouts/Loading'

export function CategoryPage() {
  const { category } = useParams()
  const urlTest = `https://fakestoreapi.com/products/category/${category}`

  const { data, error, loading } = useGetData(urlTest, category)

  return (
    <>
      <CategoryHeader category={category} />
      {loading && <Loading />}
      {error && <p>{error}</p>}
      <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-5 md:gap-20 md:px-24 md:py-10'>
        {data?.map(product => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </>
  )
}
