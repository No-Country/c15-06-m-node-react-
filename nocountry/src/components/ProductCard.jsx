import { CartIcon } from '../assets/icons/Icons'
import { Link } from 'react-router-dom'
import { useAddProductCart } from '../hooks/useAddProductCart'
import { ButtonAddToCart } from './ButtonAddToCart'

export function ProductCard({ product }) {
  return (
    <div className='w-80 h-96 bg-white rounded-3xl hover:shadow-default block group'>
      <Link className='' to={`/product/${product._id}`}>
        <div className='h-1/2 w-full group-hover:hidden transition-all'>
          <img
            src={product.imageUrl[0]}
            alt={product.name}
            className='w-full h-full object-cover rounded-2xl aspect-square'
          />
        </div>
        <div className='w-full h-1/2 group-hover:block hidden transition-all'>
          <img
            src={product.imageUrl[1]}
            alt={product.name}
            className='w-full h-full object-cover rounded-2xl aspect-square'
          />
        </div>
        <div className='p-4 flex flex-col items-center  justify-between'>
          <div>
            <h1 className='text-gray-800 text-center mt-1 text-2xl font-rajdhani font-semibold'>
              {product.name}
            </h1>
            <p className='text-center text-gray-800 font-bold text-xl font-rajdhani mt-10'>
              $ {product.price}
            </p>
          </div>
        </div>
      </Link>
      {/* <div className='p-4'>
        <ButtonAddToCart product={product} />
      </div> */}
    </div>
  )
}
