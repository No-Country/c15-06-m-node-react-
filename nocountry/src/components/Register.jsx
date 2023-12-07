import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { usePostData } from '../hooks/usePostData'
import { Navigate } from 'react-router-dom'
import { useState } from 'react'

export function Register() {
  const [response, setResponse] = useState(null)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  async function submit(data) {
    const serverResponse = await usePostData({
      data,
      url: '/register',
      options: {},
    })
    setResponse(serverResponse)
    console.log(response)
    if (!response.message) {
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
    pattern: {
      value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
      message: 'Mínimo 8 caracteres, una letra y un número',
    },
  }

  return (
    <div className='border rounded-l-[80px] p-4 flex flex-col  items-center h-full shadow-default pt-32'>
      <h2 className='text-4xl font-bold py-10'>Crear cuenta</h2>

      {response && (
        <p className='text-red-500 py-2 text-lg'>{response.error}</p>
      )}
      <form
        onSubmit={handleSubmit(data => submit(data))}
        className='flex flex-col gap-2 justify-center items-center'>
        <div className='flex gap-4'>
          <input
            {...register('name', { required: true })}
            className='border-2 rounded-lg py-3 px-2 w-60'
            placeholder='Nombre'
          />

          <input
            {...register('lastName', { required: true })}
            className='border-2 rounded-lg py-3 px-2 w-60'
            placeholder='Apellido'
          />
        </div>
        <p>{errors.name?.message}</p>
        <p>{errors.lastName?.message}</p>
        <div className='flex flex-col gap-2'>
          <input
            {...register('email', emailValidation)}
            className='border-2 rounded-lg py-3 px-2 w-[496px]'
            placeholder='Email'
          />
          <p className='text-red-500'>{errors.email?.message}</p>
        </div>
        <div className='flex flex-col gap-2'>
          <input
            {...register('password', passwordValidation)}
            className='border-2 rounded-lg py-3 px-2 w-[496px]'
            type='password'
            placeholder='Contraseña'
            autoComplete='on'
          />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>

        <div className='flex flex-col gap-2'>
          <input
            {...register('confirmPassword', {
              validate: value =>
                value === watch('password') || 'Las contraseñas no coinciden',
              required: true,
            })}
            className='border-2 rounded-lg py-3 px-2 w-[496px]'
            type='password'
            placeholder='Confirmar contraseña'
            autoComplete='on'
          />
          <p className='text-red-500'>{errors.confirmPassword?.message}</p>
        </div>

        <Link
          to='/register'
          className='text-neutral-400 font-medium block py-2'>
          ¿Ya tienes una cuenta?{'  '}
          <span className='text-yellow-400'>Inicia sesión</span>
        </Link>

        <button
          type='submit'
          className='bg-yellow-400 rounded-lg text-center text-white font-medium self-center py-2 px-16'>
          Crear cuenta
        </button>
      </form>
    </div>
  )
}
