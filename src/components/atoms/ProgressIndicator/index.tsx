import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
    number?: number
}


const ProgressIndicator: React.FC<IProps> = ({ number }) => {
    
    const classes = useStyles()
    const num1 = number === 0 ? classes.num +" "+classes.numActive : classes.num
    const num2 = number === 1 ? classes.num +" "+classes.numActive : classes.num
    const num3 = number === 2 ? classes.num +" "+classes.numActive : classes.num
    return (
       <div className={classes.container}>
           <div className={classes.mainBox}>
             <div className={classes.line}>
                <div className={num1}><div className={classes.num1}>1</div></div>
                
                <div className={num2}><div className={classes.num2}>2</div></div>
                
                <div className={num3}><div className={classes.num3}>3</div></div>
                </div >
                <div className={classes.wishes}></div>
                    
                
           </div>
           
       </div>
          
    )
}

export default ProgressIndicator
