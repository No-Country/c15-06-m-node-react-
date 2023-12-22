import { useAddProductCart } from '../hooks/useAddProductCart'
import { CartIcon } from '../assets/icons/Icons'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'

export function ButtonAddToCart({ product }) {
  const dispatch = useDispatch()

  const image = product.imageUrl[0]

  async function addProduct() {
    const response = await useAddProductCart({ product, image })

    const notify = () => {
      toast(response.mensaje, {
        position: 'bottom-right',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
    notify()
  }

  return (
    <>
      <button
        className='py-2 px-4 bg-palette-quaternary text-white rounded-lg hover:bg-palette-quinary  disabled:opacity-50 mt-4 w-full flex items-center justify-center gap-2'
        onClick={addProduct}>
        Añadir al carrito
      </button>
      <ToastContainer
        position='bottom-right'
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </>
  )
}
