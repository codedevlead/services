'use client'

import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { motion } from 'framer-motion';

type TooltipContent = {
  data: string;
}

const TooltipContent = ({ data }: TooltipContent) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="relative pl-2 mb-2">
      <FaInfoCircle
        size={12}
        className="cursor-pointer"
        color="#ad46ff"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      />
      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.2,
            ease: "easeInOut"
          }}
          className="absolute w-[240px] bg-white z-10 right-[-240px] top-0 p-3 border border-[0.5px] rounded-lg border-slate-300"
        >
          {data}
        </motion.div>
      )}
    </div>
  )
}

export default TooltipContent;