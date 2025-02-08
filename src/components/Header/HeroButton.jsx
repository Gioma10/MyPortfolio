import { motion } from "motion/react"

export default function Button({ children, variants, ...props }){
    return (
        <motion.button 
            variants={variants}
            whileHover={{background: '#DEC295' }} // Transizione morbida
            className='border-1 rounded-full py-1 px-3 text-[#53493F]'>
            <a 
                {...props}>
                    {children}                                    
                                            
            </a>

        </motion.button>
    )
}