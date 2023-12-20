import { ButtonDeleteProduct } from './ButtonDeleteProduct'

export function CartItem({ product, setUpdate }) {
  return (
    <article className='flex gap-4 w-full justify-between items-center '>
      <div className='flex justify-center items-center gap-10'>
        {/* <img
          src={product.imageUrl[0]}
          alt={product.name}
          className='w-24 h-24'
        /> */}
        <div>
          <h3 className='text-xl'>{product.name}</h3>
          <div className='flex gap-4 mt-4'>
            <p>Cantidad: {product.amount}</p>
            <ButtonDeleteProduct product={product} setUpdate={setUpdate} />
          </div>
        </div>
      </div>
      <div className='text-2xl font-bold pr-10'>${product.price}</div>
    </article>
  )
}
