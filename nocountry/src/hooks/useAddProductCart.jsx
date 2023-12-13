export async function useAddProductCart({ product }) {
  const { name, price, imageUrl } = product
  console.log(name, price, imageUrl)
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/cartproduct`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  )
  const data = await response.json()
  console.log(data)
  return data
}
