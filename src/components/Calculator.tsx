  
import "./calculator.css"
import Display from "./Display"
import Keypad from "./Keypad"

const Calculator = () => {

   
  return (
    <div 
    className='calculator'>
     <Display   />
     <Keypad  />
    
    </div>
  )
}

export default Calculator