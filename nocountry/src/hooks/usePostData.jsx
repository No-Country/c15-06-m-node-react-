/**
 * Sends a POST request to the specified URL with the given data and options.
 *
 * @param {Object} options - The options for the POST request.
 * @param {Object} options.data - The data to be sent in the request body.
 * @param {string} options.url - The URL to send the request to.
 * @param {Object} options.options - Additional options for the request.
 * @return {Promise} A Promise that resolves to the server response data.
 */
export async function usePostData({ data, url, options }) {
  const Url = `${import.meta.env.VITE_BACKEND_URL}${url}`
  const defaultOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  const response = await fetch(Url, { ...defaultOptions, ...options })

  const serverData = await response.json()
  return serverData
}
