import Icon from '../../assets/avatarProfile.png'
import { motion } from "motion/react"
import { IoDocumentOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

import Button from './HeroButton';
import ScrollArrow from '../ScrollArrow';


export default function Hero(){
    return (
        <div  className=" h-screen relative z-0">
            <div className="flex flex-col  md:flex-row justify-center items-center gap-10 h-screen ">
                <motion.img 
                    initial={{x: 100, opacity: 0}} 
                    whileInView={{x: 0, opacity: 1}}
                    transition={{
                        type:'spring',
                        ease: "easeOut",
                        stiffness: 200,
                        damping: 60, 
                        duration: 2,
                    }} 
                    className='rounded-full smallest-img w-44 lg:w-52 -rotate-45' src={Icon} alt="" />
                <motion.div
                    className='relative'
                    initial='hidden'
                    whileInView='visible'
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                    }}>
                    <motion.p 
                        variants={itemVariants}
                        className='smallest-hello text-xl sm:text-xl lg:text-2xl text-[#42372C]'>Hi, I'm</motion.p>
                    <motion.h1 
                        variants={itemVariants}
                        className='smallest-title text-4xl sm:text-4xl lg:text-6xl text-[#23201A]'>Giovanni R. Mauro</motion.h1>
                    <motion.p 
                        variants={itemVariants}
                        className='smallest-title text-4xl sm:text-4xl lg:text-6xl text-[#DEC295]'>FRONT-END DEVELOPER</motion.p>
                    <div className='absolute smallest-container-hero-btn -bottom-15  md:-bottom-10 lg:-bottom-15 flex justify-center md:justify-start w-full gap-4 md:gap-2'>
                        <Button 
                            variants={itemVariants}
                            href='../../assets/TheCurriculum.pdf'
                            download='TheCurriculum.pdf'> 
                            <IoDocumentOutline className='smallest-hero-btn text-2xl md:text-lg lg:text-2xl'/>
                        </Button>
                        <Button 
                            variants={itemVariants}
                            href='https://github.com/Gioma10'
                            target='_blank'> 
                            <FaGithub className='smallest-hero-btn text-2xl md:text-lg lg:text-2xl'/>
                        </Button>
                        <Button 
                            variants={itemVariants}
                            href='https://www.linkedin.com/in/giovanni-mauro-web-developer/'
                            target='_blank'> 
                            <FaLinkedinIn className='smallest-hero-btn text-2xl md:text-lg lg:text-2xl'/>
                        </Button>
                    </div>
                </motion.div>
            </div>
            <ScrollArrow sectionId='about' section='About Me' delayAnimation={2}/>
        </div>
    )
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } }
  };