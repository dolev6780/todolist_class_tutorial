import React from 'react'

export default function CircleAvatar({unFirstLetter}) {
  return (
    <div className='w-10 h-10 flex justify-center items-center bg-neutral-800 rounded-full cursor-pointer'>
        <p>{unFirstLetter}</p>
    </div>
  )
}
