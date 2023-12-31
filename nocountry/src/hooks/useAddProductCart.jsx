/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {object} product - The product object.
 * @param {string} product.name - The name of the product.
 * @param {number} product.price - The price of the product.
 * @param {string} product.imageUrl - The URL of the product image.
 * @return {Promise<object>} A Promise that resolves to the response data.
 */
export async function useAddProductCart({ product, image }) {
  const { name, price } = product
  const imageUrl = image

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/cartproduct`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, imageUrl }),
      credentials: 'include',
    }
  )
  const data = await response.json()
  console.log({ name, price, imageUrl })
  console.log(data)
  return data
}
