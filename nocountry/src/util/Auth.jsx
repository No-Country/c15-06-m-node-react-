import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'

export function isAuthenticated() {
  // Recuperar el valor de la cookie en React
  const token = Cookies.get('token')
  console.log(token)
  return !!token
}

export function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  if (!isAuthenticated()) {
    console.log('not authenticated')
    navigate('/login')
  }
  console.log('authenticated')
  return { children }
}
