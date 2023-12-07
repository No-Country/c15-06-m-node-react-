import { useAuth0 } from '@auth0/auth0-react'
import { GoogleIcon } from '../assets/icons/Icons'

export function LoginButton() {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className='flex gap-2 border-2 rounded-lg justify-center items-center p-3 text-lg'
      onClick={() => loginWithRedirect()}>
      <GoogleIcon /> Continua con Google
    </button>
  )
}

export function RegisterButton() {
  return (
    <button
      className='flex gap-2 border-2 rounded-lg justify-center items-center p-3 text-lg'
      onClick={() => loginWithRedirect()}>
      <GoogleIcon /> Continua con Google
    </button>
  )
}
