import React from 'react'
import AddIcon from '@mui/icons-material/Add';

export default function AddTaskButton({handleModal}) {




  return (
    <div className=''>
        <button className='bg-neutral-800 rounded-full text-white shadow-md px-4 py-1'
        onClick={handleModal}
        ><AddIcon/> </button>
    </div>
  )
}
