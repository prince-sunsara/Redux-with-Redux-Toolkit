import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counter/counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='bg-gray-600 h-screen flex items-center font-serif'>
            <button
                className='mx-1 bg-gray-700 px-3 py-2 text-white font-bold rounded-xl'
                onClick={() => dispatch(increment())}
            >
                Increment
            </button>
            <span className="text-8xl text-white">
                {count}
            </span>

            <button
                className='mx-1 bg-gray-700 px-3 py-2 text-white font-bold rounded-xl'
                onClick={() => dispatch(decrement())}
            >
                Decrement
            </button>
        </div>

    )
}
