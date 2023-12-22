import { useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export function CheckoutPage() {
  const [update, setUpdate] = useState(false)
  const [redirectUrl, setRedirectUrl] = useState(null)

  const URL = '/cart'
  const { data, error, loading } = useGetData(URL, update, {
    credentials: 'include',
  })

  const totalPrice = data?.productCart
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2)

  useEffect(() => {
    function handlePayment() {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/create-order`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
        .then(response => response.json())
        .then(data => setRedirectUrl(data.session.url))
    }
    handlePayment()
  }, [update])

  return (
    <main className='flex flex-col gap-4 p-4 px-96'>
      <div>
        <p className='text-3xl font-bold'>Esta seguro que desea comprar?</p>
      </div>

      {error && <p>{error}</p>}

      {data?.productCart.map(product => (
        <article className='flex gap-4 w-full justify-between items-center '>
          <div className='flex justify-center items-center gap-10'>
            <img
              src={product.imageUrl}
              alt={product.name}
              className='w-24 h-24'
            />
            <div>
              <h3 className='text-xl'>{product.name}</h3>
              <div className='flex gap-4 mt-4'>
                <p>Cantidad: {product.amount}</p>
              </div>
            </div>
          </div>
          <div className='text-2xl font-bold pr-10'>${product.price}</div>
        </article>
      ))}

      <div className='flex justify-end pr-10'>
        <p className='text-xl mr-4'>Subtotal: </p>
        <p className='text-xl font-bold'>${totalPrice}</p>
      </div>

      <div className='flex justify-end pr-10'>
        <p className='text-2xl mr-4'>Total: </p>
        <p className='text-2xl font-bold'>${totalPrice}</p>
      </div>

      <div className='flex justify-center items-center gap-20'>
        <Link
          to='/cart'
          className='py-2 px-4 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'>
          Cancelar
        </Link>
        <a
          href={redirectUrl}
          referrerPolicy='no-referrer'
          target='_blank'
          className='py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'>
          Aceptar
        </a>
      </div>
    </main>
  )
}
