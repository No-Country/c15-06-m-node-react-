/**
 * Generates a function comment for the given function body in a markdown code block with the correct language syntax.
 *
 * @param {object} product - The product object.
 * @param {string} product.name - The name of the product.
 * @param {number} product.price - The price of the product.
 * @param {string} product.imageUrl - The URL of the product image.
 * @return {Promise<object>} A Promise that resolves to the response data.
 */
export async function useAddProductCart({ product }) {
  const { name, price, imageUrl } = product
  const image = imageUrl[0]

  const response = await fetch(
    `${import.meta.env.VITE_BACKEND_URL}/cartproduct`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, price, image }),
      credentials: 'include',
    }
  )
  const data = await response.json()
  console.log(data)
  return data
}
