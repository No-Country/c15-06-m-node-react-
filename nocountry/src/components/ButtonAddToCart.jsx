import { useAddProductCart } from '../hooks/useAddProductCart'
import { CartIcon } from '../assets/icons/Icons'

export function ButtonAddToCart({ product }) {
  function addToCart() {
    console.log('add to cart')
    const response = useAddProductCart({ product })
    console.log(response)
  }

  return (
    <button
      className='py-2 px-4 bg-palette-quaternary text-white rounded-lg hover:bg-palette-quinary  disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'
      onClick={addToCart}>
      Añadir al carrito
    </button>
  )
}
