export function ProductDescription({ product }) {
  return (
    <>
      <article className='hidden md:flex gap-4 p-10 h-[80vh] '>
        <section className='w-1/2 px-16'>
          <img
            src={product.imageUrl[0]}
            alt=''
            className='hover:hidden md:w-full md:h-full object-cover rounded-lg'
          />
          <img
            src={product.imageUrl[1]}
            alt=''
            className='hover:block hidden md:w-full md:h-full object-cover rounded-lg'
          />
        </section>
        <section className='w-1/2 flex flex-col gap-10'>
          <h1 className='text-4xl font-medium md:self-end md:mr-20 self-center'>
            {product.name}
          </h1>
          <p>{product.description}</p>
          <p className='text-3xl'>${product.price}</p>
        </section>
      </article>

      <article className='md:hidden gap-4 p-4 flex flex-col '>
        <p className='text-2xl  font-medium'>{product.name}</p>
        <img
          src={product.imageUrl[0]}
          alt={`Imagen de ${product.name}`}
          className='w-80 self-center  h-80 hover:hidden'
        />
        <img
          src={product.imageUrl[1]}
          alt={`Imagen de ${product.name}`}
          className='w-full hidden hover:block'
        />
        <p className='text-2xl'>${product.price}</p>
        <p>{product.description}</p>
      </article>
    </>
  )
}
