import { motion } from "motion/react"
// import { useState } from "react";


export default function Navbar({navElements, activeId}){
    // const [focusLi, setFocusLi]= useState(null)

    
    // Navbar animation 
    const navVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      };
    //   {console.log(focusLi);}

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            transition={{
                type:'spring',
                ease: "easeOut",
                stiffness: 200,
                damping: 60, 
                duration: 2
            }}
            className="fixed flex justify-center w-full z-10">
            <div className="border-[#DEC295] rounded-4xl mt-4 border-2">
                <ul className="text-[#837160] flex text-xs sm:text-base lg:text-lg">
                    {navElements.map(({title, id})=>{
                        let classActive= 'py-1 px-4 md:px-8 rounded-4xl cursor-pointer '
                        if((activeId === id)){
                            classActive +=  ' bg-[#DEC295]';
                        }
                        return(
                            <a
                                key={id}
                                href={`#${id}`}
                                // onClick={()=>setFocusLi(id)}
                                >
                                <motion.li
                                    variants={navVariants} // Variants per l'animazione iniziale
                                    initial="hidden"
                                    animate="visible"
                                    whileHover={activeId === id ? { color: "#837160" } : { y: -3, color: "#DEC295" } } // Effetto al passaggio del mouse (beige e sollevato)
                                    whileTap={{ scale: 0.9 }}
                                    className={classActive}
                                    >
                                    {title}
                                </motion.li>
                            </a>
                        )
                    })}
                </ul>
            </div>
        </motion.nav>
    )
}
