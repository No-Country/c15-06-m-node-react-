import { useState } from 'react'

export function IncrementAmount() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div className='flex gap-4 bg-palette-quaternary rounded-xl '>
      <button
        onClick={decrement}
        className='px-4 py-2 text-white'
        disabled={count === 0}>
        -
      </button>
      <p className='px-4 py-2 text-white'>{count}</p>
      <button onClick={increment} className='px-4 py-2 text-white'>
        +
      </button>
    </div>
  )
}
