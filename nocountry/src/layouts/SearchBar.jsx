import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../redux/SearchSlice'
import { SearchIcon } from '../assets/icons/Icons'
import { useGetData } from '../hooks/useGetData'
import { useProductSearch } from '../hooks/useSearchProduct'
import { setSearchData } from '../redux/SearchSlice'
import { useNavigate } from 'react-router-dom'

export function SearchBar({ ...props }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { searchTerm } = useSelector(state => state.search)

  const URL = '/product?limit=1000'
  const { data } = useGetData(URL)

  useEffect(() => {
    if (data) {
      dispatch(setSearchData(data.products))
    }
  }, [data])

  const handleChange = e => {
    dispatch(setSearchTerm(e.target.value))
  }

  function handleSubmit(e) {
    e.preventDefault()
    navigate(`/search`)
  }

  return (
    <>
      <form className='relative block w-4/12' onSubmit={handleSubmit}>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <SearchIcon fill='#000' width={20} height={20} />
        </span>
        <input
          className='placeholder:italic placeholder:text-slate-400 block bg-palette-nonary bg-opacity-30 w-9/12 rounded-3xl py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-palette-quaternary focus:ring-palette-quaternary focus:ring-1 sm:text-sm'
          placeholder='Buscar...'
          type='text'
          name='search'
          onChange={handleChange}
          value={searchTerm}
          {...props}
        />
      </form>
    </>
  )
}
