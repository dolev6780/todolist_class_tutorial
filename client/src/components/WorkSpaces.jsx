import React from 'react'
import {motion} from 'framer-motion';

export default function WorkSpaces() {
  return (
    <motion.div
    initial={{x:100}}
    animate={{x:0}}
    >
      Workspaces
    </motion.div>
  )
}
