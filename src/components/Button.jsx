import { motion } from "motion/react"

export default function Button({ children, className, variants }){
    return (
        <motion.button 
            variants={variants}
            whileHover={{background: '#DEC295' }} // Transizione morbida
            className={className}>
            {children}

        </motion.button>
    )
}