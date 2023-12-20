import { CartItem } from '../components/CartItem'
import { useEffect, useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import { Loading } from '../layouts/Loading'

export function CartPage() {
  const [update, setUpdate] = useState(false)

  const URL = '/cart'
  const { data, error, loading } = useGetData(URL, update, {
    credentials: 'include',
  })

  const totalPrice = data?.productCart
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2)

  return (
    <main className='flex flex-col gap-4 p-4 px-96'>
      <div>
        <p className='text-3xl font-bold'>Carrito</p>
      </div>

      {error && <p>{error}</p>}

      {data?.productCart.map(product => (
        <CartItem key={product._id} product={product} setUpdate={setUpdate} />
      ))}

      <div className='flex justify-end pr-10'>
        <p className='text-2xl mr-4'>Subtotal: </p>
        <p className='text-2xl font-bold'>${totalPrice}</p>
      </div>
    </main>
  )
}
