export const validations = {
  email: {
    required: 'Campo requerido',
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Email invalido',
    },
  },

  password: {
    required: 'Campo requerido',
    pattern: {
      value: /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/,
      message: 'Mínimo 8 caracteres, una letra y un número',
    },
  },
}
