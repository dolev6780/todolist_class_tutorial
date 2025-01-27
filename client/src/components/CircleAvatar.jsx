import React from 'react'

export default function CircleAvatar({unFirstLetter, size}) {
  return (
    <div className={`${size} aspect-square flex justify-center items-center bg-neutral-800 dark:bg-white text-white dark:text-neutral-800 rounded-full cursor-pointer hover:bg-neutral-600 transition-all dark:hover:bg-opacity-60 font-bold`}>
        <p>{unFirstLetter}</p>
    </div>
  )
}
