import { ChevronLeftIcon, ChevronRightIcon } from '../assets/icons/Icons'

export function Pagination({ actualPage, totalPages, setActualPage }) {
  function handlePreviousPage() {
    if (actualPage > 1) {
      setActualPage(actualPage - 1)
    }
  }

  function handleNextPage() {
    if (actualPage < totalPages) {
      setActualPage(actualPage + 1)
    }
  }

  return (
    <div className='w-full flex justify-center items-center pb-10'>
      <button
        className='px-4 py-2 text-blue-600 flex gap-2 justify-center items-center'
        disabled={actualPage === 1}
        onClick={() => handlePreviousPage()}>
        <ChevronLeftIcon />
        Anterior
      </button>
      <p>
        {actualPage} de {totalPages}
      </p>
      <button
        className='px-4 py-2 text-blue-600 flex gap-2 justify-center items-center'
        disabled={actualPage === totalPages}
        onClick={() => handleNextPage()}>
        Siguiente
        <ChevronRightIcon />
      </button>
    </div>
  )
}
