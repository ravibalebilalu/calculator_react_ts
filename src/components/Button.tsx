 import './button.css'

 type ButtonProps = {
    bgcolor:string 
     width:string 
     buttontext:string
     onClick:(value:string)=>void
 }

const Button = ({bgcolor,width,buttontext,onClick}:ButtonProps) => {
  return (
    <button
    style={{backgroundColor:bgcolor,width:width}}
    onClick={()=>onClick(buttontext)}
    > {buttontext}</button>
  )
}

export default Button