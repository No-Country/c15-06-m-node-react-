import { Link } from 'react-router-dom'

export function ButtonRegister() {
  return (
    <Link
      to='/register'
      className='border-yellow-500 hover:text-yellow-600 text-yellow-500 font-bold py-2 px-4 rounded'>
      Crear Cuenta
    </Link>
  )
}
