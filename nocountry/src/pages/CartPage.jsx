import { CartItem } from '../components/CartItem'

const products = [
  {
    id: 1,
    name: 'Avena',
    imageUrl: 'https://via.placeholder.com/150',
    price: 10,
  },
  {
    id: 2,
    name: 'Product 2',
    imageUrl: 'https://via.placeholder.com/150',
    price: 20,
  },
  {
    id: 3,
    name: 'Product 3',
    imageUrl: 'https://via.placeholder.com/150',
    price: 30,
  },
]

export function CartPage() {
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0)
  console.log('cart')
  return (
    <main className='flex flex-col gap-4 p-4 px-96'>
      <div>
        <p className='text-3xl font-bold'>Carrito</p>
      </div>
      {products.map(product => (
        <CartItem key={product.id} product={product} />
      ))}

      <div className='flex justify-end pr-10'>
        <p className='text-2xl mr-4'>Subtotal: </p>
        <p className='text-2xl font-bold'>${totalPrice}</p>
      </div>
    </main>
  )
}
