import Icon from '../../assets/avatarProfile.png'
import { motion } from "motion/react"
import { IoDocumentOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Button from './HeroButton';

export default function Hero(){
    return (
        <div className="bg-linear-to-t from-[#DEC295] to-[#42372C] h-screen">
            <div className="flex justify-center items-center gap-10 h-screen ">
                <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    animate={{x: 0, opacity: 1}}
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
                    <div className='absolute -bottom-10 flex gap-2'>
                        <Button 
                            variants={itemVariants}
                            href='../../assets/TheCurriculum.pdf'
                            download='TheCurriculum.pdf'> 
                            <IoDocumentOutline />
                        </Button>
                        <Button 
                            variants={itemVariants}
                            href='https://github.com/Gioma10'
                            target='_blank'> 
                            <FaGithub />
                        </Button>
                        <Button 
                            variants={itemVariants}
                            href='https://www.linkedin.com/in/giovanni-mauro-web-developer/'
                            target='_blank'> 
                            <FaLinkedinIn />
                        </Button>
                    </div>
                    
                    
                </motion.div>

            </div>
        </div>
    )
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };