  import { useSelector,useDispatch } from "react-redux"
  import { RootState } from "../store/store"
  import { addToDisplay ,clearDisplay} from "../store/displaySlicer"
  import { toglePower } from "../store/displaySlicer"
import Button from "./Button"
import "./keypad.css"
 
 
 
const Keypad = ( ) => {
  const dispatch = useDispatch()
  const displYString = useSelector((state:RootState)=>state.displayString.value)
   
 
 
  const keypad:string[] = ["7","8","9","+","4","5",'6','-','1',"2",'3','x','0','00','.','/','ON', 'CE', '=']

    const handleButton = (value:string)=>{

      let temp = value
         if(temp === "x"){
            temp="*"
         }
         
       dispatch(addToDisplay(temp))
       if(temp === "="){
         dispatch(clearDisplay())
          
         dispatch(addToDisplay(eval(displYString.replace("x","*"))))
       }
       if(temp==="CE"){
        dispatch(clearDisplay())
       }
       if(temp==="ON"){
        dispatch(toglePower())
        dispatch(clearDisplay())
       }
       
       
      
    }
  return (
    <div className="keypad">
      {
        keypad.map((keys)=>(
           <div key={keys} 
            
           >
             <Button 
           bgcolor={keys==="ON"?"brown":keys==="="?"green":"gray"} 
            width={keys==="="? '165px':'80px'}
            buttontext={keys}
             onClick={handleButton}
            />
           </div>
        ))
      }
       
    </div>
  )
}

export default Keypad