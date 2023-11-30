import { SearchIcon } from '../assets/icons/Icons'

export function SearchBar({ ...props }) {
  return (
    <>
      <label className='relative block w-4/12'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <SearchIcon fill='#000' width={20} height={20} />
        </span>
        <input
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm '
          placeholder='Buscar...'
          type='text'
          name='search'
          {...props}
        />
      </label>
    </>
  )
}
