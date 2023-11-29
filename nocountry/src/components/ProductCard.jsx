export function ProductCard({ product }) {
  return (
    <article className='flex flex-col gap-4 p-4 border md:h-96 overflow-hidden justify-center items-center'>
      <div className='h-52 w-52 flex justify-center items-center'>
        <img
          src={product.image}
          alt={product.title}
          className='h-full w-full object-cover aspect-square'
        />
      </div>
      <div className='flex flex-col gap-5  '>
        <h2 className='text-2xl font-bold'>{product.title}</h2>
        <p className='text-gray-500'>{product.price}</p>
      </div>
    </article>
  )
}
