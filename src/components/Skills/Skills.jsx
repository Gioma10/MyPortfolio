import ScrollArrow from "../ScrollArrow"
import Icons from "./Icons";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react";
import { scaleUp, slideUp } from "../../animations/transition";

const titleArr= ['Framework','Languages','Tools']

export default function Skills(){
    const[currentIndex, setCurrentIndex]= useState(0)
    
    function handleChangeSkills(value){
        if(value === '-'){
            setCurrentIndex(prevIndex => {
                if(prevIndex === 0){
                    return 2;
                }
                return prevIndex - 1
            })
        }else if(value === '+'){
            setCurrentIndex(prevIndex => {
                if(prevIndex === 2){
                    return 0;
                }
                return prevIndex + 1
            })
        }
        
    }

    return (
        <section className="h-screen relative text-[#23201A]">
            <div className="flex flex-col smallest-gap gap-10 sm:gap-20 items-center justify-center h-full p-10">
                <motion.h2 
                    {...scaleUp(1,0)}
                    className="text-4xl sm:text-6xl">
                        Skills
                </motion.h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 w-full">
                    <Icons i={currentIndex}/>
                </div>
                <motion.div 
                    {...slideUp(1,0)}
                    className="flex gap-4 justify-center items-center text-xl">
                    <IoMdArrowDropleft onClick={()=>handleChangeSkills('-')} className="cursor-pointer"/>
                        <div className="relative w-20 md:w-28 lg:w-40 h-20 flex items-center justify-center overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={currentIndex} // Cambia la chiave per innescare il re-render
                                    initial={{ opacity: 0, x: 20 }} // Partenza
                                    whileInView={{ opacity: 1, x: 0 }} // Arrivo
                                    exit={{ opacity: 0, x: -20 }} // Uscita
                                    transition={{ duration: 0.3 }}
                                    className="absolute p-10 text-base md:text-lg lg:text-xl"
                                >
                                    {titleArr[currentIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    <IoMdArrowDropright onClick={()=>handleChangeSkills('+')} className="cursor-pointer"/>
                </motion.div>
            </div>
            <ScrollArrow sectionId='contacts' section='Contacts' delayAnimation={1}/>
        </section>
    )
}