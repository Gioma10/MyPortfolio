import { motion } from "motion/react"

export default function Button({ children, variants, ...props }){
    return (
        <motion.button 
            variants={variants}
            whileHover={{background: '#DEC295' }} // Cambio Colore all'hover    
            className='border-1 rounded-full py-1 px-3 lg:py-2 lg:px-5 text-[#53493F]'>
            <a 
                {...props}>
                    {children}                    
            </a>

        </motion.button>
    )
}