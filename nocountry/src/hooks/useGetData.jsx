import { useEffect, useState } from 'react'

export function useGetData(url, change) {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const Url = `${import.meta.env.VITE_BACKEND_URL}${url}`

  useEffect(() => {
    setLoading(true)
    fetch(Url, {
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
