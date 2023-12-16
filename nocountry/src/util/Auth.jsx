import Cookies from 'js-cookie'
import { Route, Navigate } from 'react-router-dom'

export function isAuthenticated() {
  const token = Cookies.get('token')
  console.log(token)
  return !!token
}

export function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to='/login' />
  }
  return { children }
}
