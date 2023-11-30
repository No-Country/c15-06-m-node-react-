import { useEffect, useState } from 'react'

export function useGetData(url, change) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const urlTest = 'https://fakestoreapi.com/products'

  useEffect(() => {
    setLoading(true)
    fetch(url, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(err => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [change])

  return { data, error, loading }
}
