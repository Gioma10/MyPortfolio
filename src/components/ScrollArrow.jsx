import { delay, easeInOut } from "motion";
import { motion } from "motion/react"
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

export default function ScrollArrow({sectionId, section}){
  const [seeSection, setSeeSection]= useState(false)
    return (
        <motion.div 
          initial={{ bottom: '10px'}}
          whileInView={{ bottom:['10px', '20px', '10px']}}
          viewport={{ once: false, amount: 0.9} }
          transition={{ duration: 1, repeat: Infinity,}}
          whileHover={{bottom: ['10px']}}
          onHoverStart={()=>setSeeSection(true)}
          onHoverEnd={()=>setSeeSection(false)}
          className="absolute flex justify-center w-full cursor-pointer text-[#53493F]">
              {seeSection && 
                <motion.p
                  variants={arrowVariants}
                  initial= {setSeeSection ? 'hidden' : 'visible'}
                  animate= {setSeeSection ? 'visible' : 'hidden'}
                  className="text-2xl absolute bottom-10">
                    {section}
                </motion.p>
              }
          <motion.a
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: false, amount: 1}}
            transition={{duration: 1, delay: 2, ease: 'easeInOut'}}
            href={'#'+sectionId}
            className="cursor-pointer relative w-full flex justify-center"
           >
            <IoIosArrowDropdown className="text-4xl" />
          </motion.a>
      </motion.div>
    )
}

const arrowVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5} },
};