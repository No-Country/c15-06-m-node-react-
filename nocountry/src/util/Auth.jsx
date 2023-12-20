import Cookies from 'js-cookie'
import { useNavigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export function isAuthenticated() {
  // Cambiar a cookie
  const token = Cookies.get('token')

  // return !!token
  return useSelector(state => state.user.userAuth)
}

export function ProtectedRoute({ children }) {
  const navigate = useNavigate()

  if (!isAuthenticated()) {
    navigate('/login')
  }

  return children
}
