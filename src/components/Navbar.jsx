import { motion } from "motion/react"
import { useState } from "react";

export default function Navbar(){
    const [focusLi, setFocusLi]= useState(null)

    const navElements= ['Chi sono', 'Skills', 'Contatti']
    // Navbar animation 
    const navVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
      {console.log(focusLi);}

    return (
        <motion.div
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{
                type:'spring',
                ease: "easeOut",
                stiffness: 200,
                damping: 60, 
                duration: 2
            }}
            className="fixed flex justify-center w-full ">
            <div className="border-[#DEC295] rounded-4xl mt-4 border-2">
                <ul className="text-[#837160] flex ">
                    {navElements.map((item, index)=>{
                        let classActive= 'py-1 px-8 cursor-pointer rounded-4xl'
                        if(focusLi === index){
                            classActive +=  ' bg-[#DEC295]'
                        }
                        return(
                            <motion.li 
                                key={index}
                                variants={navVariants} // Variants per l'animazione iniziale
                                initial="hidden"
                                animate="visible"
                                whileHover={focusLi === index ? { color: "#837160" } : { y: -3, color: "#DEC295" } } // Effetto al passaggio del mouse (beige e sollevato)
                                whileTap={{ scale: 0.9 }}
                                onFocus={()=>setFocusLi(index)}
                                className={classActive}>
                                    <a href="#AboutMe"></a>
                                {item}
                            </motion.li>
                        )
                    })}
                </ul>
            </div>
        </motion.div>
    )
}
