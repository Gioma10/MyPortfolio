import Icon from '../assets/avatarProfile.png'
import { motion } from "motion/react"
import { IoDocumentOutline } from "react-icons/io5";

import Button from './Button';

export default function Hero(){
    return (
        <div className="bg-linear-to-t from-[#DEC295] to-[#42372C] h-screen">
            <div className="flex justify-center items-center gap-8 h-screen ">
                <motion.img 
                    initial={{scale: 0, opacity: 0}} 
                    animate={{scale:1, opacity: 1}}
                    transition={{
                        type:'spring',
                        ease: "easeOut",
                        stiffness: 200,
                        damping: 60, 
                        duration: 2,
                    }} 
                    className='rounded-full w-40 -rotate-45' src={Icon} alt="" />
                <motion.div
                    className='relative'
                    initial='hidden'
                    animate='visible'
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                    }}>
                    <motion.p 
                        variants={itemVariants}
                        className='text-xl text-[#42372C]'>Hi, I'm</motion.p>
                    <motion.h1 
                        variants={itemVariants}
                        className='text-4xl text-[#53493F]'>Giovanni R. Mauro</motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className='text-4xl text-[#DEC295]'>FRONT-END DEVELOPER</motion.p>
                    <Button 
                        variants={itemVariants}
                        className='absolute -bottom-10 border-1 rounded-full py-1 px-3 text-[#53493F]'> 

                        <IoDocumentOutline 
                            href='../assets/TheCurriculum.pdf'
                            download='TheCurriculum.pdf'/>
                    </Button>
                </motion.div>

            </div>
        </div>
    )
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };