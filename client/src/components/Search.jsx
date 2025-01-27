import React from 'react';
import {motion} from 'framer-motion';
export default function Search() {
  return (
    <motion.div
    initial={{x:100}}
    animate={{x:0}}
    >
        <input type="text" className='border-2 bg-inherit p-1 px-4 rounded-full dark:border-white border-neutral-800' placeholder='Search'/>
    </motion.div>
  )
}
