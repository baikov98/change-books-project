import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
    number?: number
}


const ProgressIndicator: React.FC<IProps> = (props) => {
    const { number } = props
    const classes = useStyles()

    return (
       <div className={classes.container}>
           <div className={classes.mainBox}>
                <div className={classes.num}><div className={classes.num1}>1</div></div>
                <div className={classes.line}></div >
                <div className={classes.num}><div className={classes.num2}>2</div></div>
                <div className={classes.line}></div >
                <div className={classes.num}><div className={classes.num3}>3</div></div>
                
                <div className={classes.wishes}></div>
                    
                
           </div>
           
       </div>
          
    )
}

export default ProgressIndicator
