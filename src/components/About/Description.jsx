import { motion } from "motion/react";
import { slideUp } from "../../animations/transition";



export default function Description({lang}){
    



    return (
        <motion.div
            {...slideUp(1,0)}
            >
            {lang ? 
                    <p 
                        
                        className="p-10 text-start text-xl italic ">
                        Junior Front-end developer con background informatico e competenze programmazione
                        acquisite grazie ad un Coding Bootcamp basato sulla programmazione per oggetto e
                        metodologia agile Scrum. Professionalità, buone capacità di logica, comunicazione e
                        orientamento all'apprendimento continuo e al lavoro in team arricchiscono il profilo e
                        rappresentano dei punti di forza.
                    </p> 
                    :
                    <p 
                        
                        className="p-10 text-start text-xl italic">
                            Junior Front-end developer with IT background and programming skills
                            acquired thanks to a Coding Bootcamp based on object programming e
                            agile Scrum methodology. Professionalism, good logic, communication and
                            orientation towards continuous learning and team work enrich the profile and
                            represent strengths.
                        
                    </p>
            }
        </motion.div>
    )
}
