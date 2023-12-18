export async function useIncrementAmountProduct({ productId, amount }) {
  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/cartproduct/${productId}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    }
  )
  const data = await response.json()
  return data
}
