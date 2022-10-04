import React from "react";
import classes from "./Input.module.css"
const Input=(props)=>{
   
   const change=(event)=>{
      props.change(event.target.value)
   }

   return (
    <><div className={classes.input}>
     <input type="text" placeholder="Search" onChange={change}/> 
     </div>     
    </>
   )
}
export default Input