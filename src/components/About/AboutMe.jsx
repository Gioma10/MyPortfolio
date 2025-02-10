import { motion } from "motion/react"
import { useState } from "react"
import Description from "./Description";
import ScrollArrow from "../ScrollArrow";
import { bottomLine, scaleUp, slideLeft } from "../../animations/transition";


export default function AboutMe(){
    const[itaLanguage, setItaLanguage]=useState(false);

    return(
        <div className=" h-screen flex justify-center item-center text-[#23201A] relative">

                <div
                    className="flex flex-col justify-center items-center w-5/6 lg:w-4/6">
                        <div className="flex justify-center items-center">
                            <div className="overflow-hidden border-r-2 border-[#42372C] px-4">
                                <motion.h2 
                                    {...slideLeft(1,0)}
                                    className="text-4xl sm:text-6xl">
                                        About Me
                                </motion.h2>
                            </div>
                            <div className="flex gap-4 items-center px-4 h-full">
                                <motion.div 
                                    {...scaleUp(1,0)}
                                    className="cursor-pointer relative text-xs sm:text-base"
                                    onClick={()=> setItaLanguage(true)}>
                                    IT
                                    {itaLanguage && <motion.div
                                        {...bottomLine(1,0)}
                                        className="bg-[#23201A] absolute bottom-0 h-0.5"
                                    />}
                                </motion.div>
                                <motion.div 
                                    {...scaleUp(1,0)}
                                    className="cursor-pointer relative text-xs sm:text-base"
                                    onClick={()=> setItaLanguage(false)}>
                                    ENG
                                    {!itaLanguage && <motion.div
                                        {...bottomLine(1,0)}
                                        className="bg-[#23201A] absolute bottom-0 h-0.5"
                                    />}
                                </motion.div>
                            </div>
                        </div>
                        <Description lang={itaLanguage}/>
                        <ScrollArrow sectionId='skills' section='Skills' delayAnimation={1}/>
                </div>
        </div>
    )
}