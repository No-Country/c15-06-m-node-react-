import { useAddProductCart } from '../hooks/useAddProductCart'
import { CartIcon } from '../assets/icons/Icons'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export function ButtonAddToCart({ product }) {
  const dispatch = useDispatch()
  function addProduct() {
    const response = useAddProductCart({ product })
  }

  return (
    <button
      className='py-2 px-4 bg-palette-quaternary text-white rounded-lg hover:bg-palette-quinary  disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'
      onClick={addProduct}>
      Añadir al carrito
    </button>
  )
}
