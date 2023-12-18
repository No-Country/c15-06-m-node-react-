import Cookies from 'js-cookie'
import { Navigate } from 'react-router-dom'

export function isAuthenticated() {
  // Recuperar el valor de la cookie en React
  const token = Cookies.get()
  console.log(token)
  if (token) {
    return token
  }
  return false
}

export function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    console.log('not authenticated')
    return <Navigate to='/login' />
  }
  console.log('authenticated')
  return { children }
}
