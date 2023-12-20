import { useEffect, useState } from 'react'

/**
 * A hook that fetches data from the specified URL.
 *
 * @param {string} url - The URL to fetch data from.
 * @param {any} change - A value that triggers a re-fetch when it changes.
 * @return {object} An object containing the fetched data, any errors that occurred, and a loading state.
 */
export function useGetData(url, change, options) {
  const [data, setData] = useState()
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)

  const Url = `${import.meta.env.VITE_BACKEND_URL}${url}`

  useEffect(() => {
    setLoading(true)
    fetch(Url, {
      method: 'GET',
      ...options,
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
