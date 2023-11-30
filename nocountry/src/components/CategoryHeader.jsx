export function CategoryHeader({ category }) {
  return (
    <div className='w-full flex justify-center md:justify-end items-center p-4 md:p-10 md:relative'>
      <h1 className='text-4xl font-bold md:absolute md:top-1/2 md:bottom-0 md:right-40'>
        {category}
      </h1>
    </div>
  )
}
