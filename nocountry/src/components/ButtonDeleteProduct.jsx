export function ButtonDeleteProduct({ product, setUpdate }) {
  async function deleteProduct() {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/cartproduct/${product._id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    const data = await response.json()

    setUpdate(prev => !prev)
  }

  return (
    <button onClick={deleteProduct} className='hover:text-red-500'>
      Eliminar
    </button>
  )
}
