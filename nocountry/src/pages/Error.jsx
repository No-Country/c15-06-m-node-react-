import { Link } from 'react-router-dom'

export function Error() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-4'>Error</h1>
      <p className='text-gray-600'>
        Lo sentimos, ha ocurrido un error inesperado.
      </p>

      <Link
        to='/'
        className='mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
        Volver al inicio
      </Link>
    </div>
  )
}
