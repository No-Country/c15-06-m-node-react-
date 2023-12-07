import { CartIcon } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'

export function ProductCard({ product }) {
  return (
    <div className='w-80 h-96 bg-white rounded hover:shadow-default block'>
      <Link className=' ' to={`/product/${product._id}`}>
        <div className='h-1/2 w-full transition'>
          <img
            src={product.imageUrl[0]}
            alt={product.name}
            className='w-full h-full object-cover rounded-lg'
          />
        </div>
        {/* <div className='h-1/2 w-full hidden hover:block transition'>
        <img
          src={product.imageUrl[1]}
          alt={product.name}
          className='w-full h-full object-cover rounded-lg hidden hover:block'
        />
      </div> */}
        <div className='p-4 flex flex-col items-center  justify-between'>
          <div>
            <h1 className='text-gray-800 text-center mt-1 text-lg'>
              {product.name}
            </h1>
            <p className='text-center text-gray-800 mt-1 font-bold text-lg'>
              $ {product.price}
            </p>
          </div>
        </div>
      </Link>
      <div className='p-4'>
        <button className='py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'>
          Añadir al carrito
          <CartIcon width={24} height={24} />
        </button>
      </div>
    </div>
  )
}
