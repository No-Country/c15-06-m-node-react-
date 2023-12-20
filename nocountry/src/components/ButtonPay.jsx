import { useState } from 'react'
import { Link } from 'react-router-dom'

export function ButtonPay() {
  const [redirectUrl, setRedirectUrl] = useState(null)

  async function handlePay() {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/create-order`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      }
    )

    const data = await response.json()

    setRedirectUrl(data.session.url)
  }

  if (redirectUrl) {
    window.location.href = redirectUrl
  }

  return (
    <Link
      to={'/checkout'}
      className='py-2 px-4 bg-palette-quaternary text-white rounded-lg hover:bg-palette-quinary disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'>
      Comprar
    </Link>
  )
}
