import { motion } from "framer-motion";

const CircularProgress = ({ percentage, imageUrl }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;
  const strokeColor = percentage >= 50 ? "#8C715A" : percentage >= 30 ? "#C9A66B" : "#D16E50";

  return (
    <motion.div 
      initial={{opacity:0, x:80}}
      whileInView={{opacity:1, x:0}}
      transition={{duration:1}}
      className="flex flex-col items-center">
      <svg className="w-28 h-28 sm:w-28 sm:h-28 md:w-40 md:h-40  lg:w-52 lg:h-52" viewBox="0 0 100 100">
        
        {/* Cerchio di sfondo */}
        <circle cx="50" cy="50" r={radius} fill="none" stroke="#F5E1C0" strokeWidth="9" />
        
        {/* Cerchio animato */}
        <motion.circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke={strokeColor}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          whileInView={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 1 }}
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />

        <image
          href={imageUrl}
          x="30"  // Regola la posizione per centrare
          y="30"
          width="40"
          height="40"
        />
      </svg>
    </motion.div>
  );
};

export default CircularProgress;