import { CartIcon } from '../assets/icons/Icons'

export function ProductCard({ product }) {
  return (
    <div className='w-80 h-96 bg-white shadow rounded'>
      <div className='h-1/2 w-full'>
        <img
          src={product.image}
          alt={product.title}
          className='w-full h-full object-cover'
        />
      </div>
      <div className='p-4 flex flex-col items-center h-1/2 justify-between'>
        <div>
          <h1 className='text-gray-800 text-center mt-1'>{product.title}</h1>
          <p className='text-center text-gray-800 mt-1'>${product.price}</p>
        </div>
        <button className='py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'>
          Añadir al carrito
          <CartIcon width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
