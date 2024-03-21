import { UpdateIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { ComponentPropsWithoutRef } from "react";
import { Button } from "../ui/button";


const MotionButton = motion(Button)

const convertIcon = {
  hover: {
    rotate: 45,
    scale: 1.2,
    pathlength: 0.2
  },
  tap: {
    rotate: 360,
    pathlength: 0.8
  },
  init: {
  },
}

export function AnimatedButton({children, ...props }: ComponentPropsWithoutRef<typeof MotionButton>) {
  return (
    <MotionButton
      whileHover="hover"
      whileTap="tap"
      {...props}
    >
      {children}
      <motion.div
        variants={convertIcon}
      >
        <UpdateIcon className="m-2" />
      </motion.div>
    </MotionButton>
  )
}