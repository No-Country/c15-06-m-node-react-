import { Link } from 'react-router-dom'

export function ButtonLogin() {
  return (
    <Link
      to='/login'
      className='bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded'>
      Login
    </Link>
  )
}
