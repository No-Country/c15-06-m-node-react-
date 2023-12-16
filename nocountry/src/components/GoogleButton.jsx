import { GoogleIcon } from '../assets/icons/Icons'

export function GoogleButton({ to }) {
  return (
    <a
      href={to}
      className='flex gap-2 border-2 rounded-lg justify-center items-center p-3 text-lg'>
      <GoogleIcon /> Continúa con Google
    </a>
  )
}
