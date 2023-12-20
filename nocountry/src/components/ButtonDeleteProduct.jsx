export function ButtonDeleteProduct({ product }) {
  async function deleteProduct() {
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/cartproduct/${product._id}`,
      {
        method: 'DELETE',
        credentials: 'include',
      }
    )

    const data = await response.json()
    console.log(data)
  }

  return (
    <button onClick={deleteProduct} className='hover:text-red-500'>
      Eliminar
    </button>
  )
}
