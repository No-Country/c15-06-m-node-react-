import { CartItem } from '../components/CartItem'
import { useState } from 'react'
import { useGetData } from '../hooks/useGetData'
import { ButtonPay } from '../components/ButtonPay'
import { Loading as LoadingComponent } from '../layouts/Loading'

export function CartPage() {
  const [update, setUpdate] = useState(false)

  const URL = '/cart'
  const { data, error, loading } = useGetData(URL, update, {
    credentials: 'include',
  })

  console.log(data)

  const totalPrice = data?.productCart
    .reduce((acc, product) => acc + product.price, 0)
    .toFixed(2)

  return (
    <>
      {loading && <LoadingComponent />}
      {data === null ? (
        <div className='flex flex-col gap-4 p-4 px-96'>
          <p className='text-3xl font-bold'>No hay productos en el carrito</p>
        </div>
      ) : (
        <main className='flex flex-col gap-4 p-4 md:px-96'>
          <div>
            <p className='text-3xl font-bold'>Carrito</p>
          </div>

          {error && <p>{error}</p>}

          {data?.productCart.map(product => (
            <CartItem
              key={product._id}
              product={product}
              setUpdate={setUpdate}
            />
          ))}

          <div className='flex justify-end pr-10'>
            <p className='text-2xl mr-4'>Subtotal: </p>
            <p className='text-2xl font-bold'>${totalPrice}</p>
          </div>

          <div className='flex justify-center items-center'>
            <ButtonPay />
          </div>
        </main>
      )}
    </>
  )
}
