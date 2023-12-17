import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { usePostData } from '../hooks/usePostData'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { GoogleButton } from './GoogleButton'
import { UserLayout } from '../layouts/UserLayout'
import { useDispatch } from 'react-redux'
import { setUserData, setUserToken } from '../redux/userSlice'
import { isAuthenticated } from '../util/Auth'
import { ArrowLeftIcon } from '../assets/icons/Icons'

export function Login() {
  const dispatch = useDispatch()

  const [response, setResponse] = useState(null)
  const Navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  async function submit(data) {
    const { name, email, password } = data

    const serverResponse = await usePostData({
      data: {
        name,
        email,
        password,
      },
      url: '/login',
      options: { credentials: 'include' },
    })

    setResponse(serverResponse)

    if (isAuthenticated()) {
      dispatch(setUserData(serverResponse.user))
      Navigate('/')
    }
  }

  const emailValidation = {
    required: 'Campo requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email invalido',
    },
  }

  const passwordValidation = {
    required: 'Campo requerido',
  }

  return (
    <UserLayout>
      <div className='border rounded-l-[80px] p-4 flex flex-col  items-center h-full shadow-default pt-32 relative'>
        <Link
          to='/'
          className='text-xl font-bold absolute top-20 left-20 flex justify-center items-center gap-2'>
          <ArrowLeftIcon width={24} height={24} />
        </Link>

        <h2 className='text-4xl font-bold py-10'>Login</h2>

        <GoogleButton to={`${import.meta.env.VITE_BACKEND_URL}/auth/google`} />

        <p className='text-neutral-500 py-8 '>Inicia sesión con tu correo</p>
        {response && (
          <p className='text-red-500 py-2 text-lg'>{response.message}</p>
        )}
        <form
          onSubmit={handleSubmit(data => submit(data))}
          className='flex flex-col gap-4 justify-center items-center'>
          <div className='flex flex-col gap-4'>
            <label htmlFor='email' className='text-neutral-600 font-medium'>
              Email
            </label>
            <input
              {...register('email', emailValidation)}
              className='border-2 rounded-lg py-3 px-2 w-60'
              placeholder='Ej: nombre@email.com'
            />
            <p className='text-red-500'>{errors.email?.message}</p>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='password' className='text-neutral-600 font-medium'>
              Contraseña
            </label>
            <input
              {...register('password', passwordValidation)}
              className='border-2 rounded-lg py-3 px-2 w-60'
              type='password'
              autoComplete='on'
            />
            <p className='text-red-500'>{errors.password?.message}</p>
          </div>

          <Link to='/register' className='text-yellow-400 font-medium block'>
            Crear una cuenta
          </Link>

          <Link to='/' className='text-yellow-400 font-medium block'>
            ¿Olvidaste tu contraseña?
          </Link>
          <button
            type='submit'
            className='bg-yellow-400 rounded-lg text-center text-white font-medium self-center py-2 px-16'>
            Login
          </button>
        </form>
      </div>
    </UserLayout>
  )
}
