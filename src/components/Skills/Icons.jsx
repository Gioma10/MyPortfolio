import { skills } from "./DataIcons"
import CircularProgress from "./CircularProgress"

export default function Icons({i}){
    return (
      <>
        {skills().map((type, index)=>{
            if(index === i){
                return (
                    type.map((item)=>{
                        return (
                            <CircularProgress key={item.id} percentage={item.percentage} imageUrl={item.url} />
                        )
                    })
                )
            }
        })}
        
      </>
    )
}