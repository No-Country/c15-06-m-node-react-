import { useSelector } from 'react-redux'
import { ProductCard } from '../components/ProductCard'
import { useProductSearch } from '../hooks/useSearchProduct'
import { useEffect, useState } from 'react'

export function ResultSearch() {
  const [data, setData] = useState([])
  const { searchData, searchTerm } = useSelector(state => state.search)

  useEffect(() => {
    const filteredData = useProductSearch(searchData, searchTerm)
    setData(filteredData)
  }, [searchData, searchTerm])

  return (
    <ul className='grid grid-cols-autoColums justify-center items-center px-10 gap-20 md:px-60 md:py-5'>
      {data?.map(product => (
        <li key={product._id}>
          <ProductCard product={product} key={product._id} />
        </li>
      ))}
    </ul>
  )
}
