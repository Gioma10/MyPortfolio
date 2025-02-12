import { motion } from "motion/react";


export default function Input({ value, onChange, error, isTextArea, ...props }) {
    return (
      <div className="relative ">
        
        {isTextArea ? 

        <textarea
          {...props}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border rounded-lg z-10 ${
            error ? "border-red-500" : "focus:border-[#DEC295]"
          }`}
        ></textarea> :
        <input
        {...props}
          value={value}
          onChange={onChange}
          className={`w-full p-3 border rounded-lg z-10 ${
            error ? "border-red-500" : "focus:border-[#DEC295]"
          }`}
        />
        }
        {error && 
            <motion.p
                initial={{y:0, opacity: 0}}
                whileInView={{y: -20, opacity: 1}}
                className="text-red-500 text-sm absolute top-0 right-2">
                {error}
            </motion.p>}
      </div>
    );
  }