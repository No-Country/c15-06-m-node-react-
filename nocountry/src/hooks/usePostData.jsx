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
