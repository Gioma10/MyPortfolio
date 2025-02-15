import { motion } from "motion/react";


export default function Input({ value, onChange, error, isTextArea, ...props }) {
    return (
      <div className="relative ">
        
        {isTextArea ? 

        <textarea
          {...props}
          value={value}
          onChange={onChange}
          className={`w-full p-2 sm:p-3 text-xs md:text-base border border-[#8C715A] rounded-lg shadow-lg focus:outline-[#8C715A] z-10 ${
            error ? "border-[#D16E50]" : "focus:border-[#D16E50]"
          }`}
        ></textarea> :
        <input
        {...props}
          value={value}
          onChange={onChange}
          className={`w-full p-2 sm:p-3  text-xs md:text-base border border-[#8C715A] rounded-lg shadow-lg focus:outline-[#8C715A] z-10 ${
            error ? "border-[#D16E50]" : "focus:border-[#D16E50]"
          }`}
        />
        }
        {error && 
            <motion.p
                initial={{y:0, opacity: 0}}
                whileInView={{y: -20, opacity: 1}}
                className="text-[#D16E50] smallest-p-form smallest-top text-xs top-1 md:text-sm absolute md:top-0 right-2">
                {error}
            </motion.p>}
      </div>
    );
  }