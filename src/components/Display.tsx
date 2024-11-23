 import "./display.css"
 import { useSelector } from "react-redux"
  import { RootState } from "../store/store"
   

const Display = ( ) => {
   
   
  const displYString = useSelector((state:RootState)=>state.displayString.value)
  const powerOn = useSelector((state:RootState)=>state.powerOn.value)
   
  console.log(powerOn);
  return (
    <div className= {`display ${!powerOn && 'off'}`}>
        <div className="textarea" >
        
         {displYString? displYString.replace("*","x"): "0" }
         
         </div>
    </div>
  )
}

export default Display