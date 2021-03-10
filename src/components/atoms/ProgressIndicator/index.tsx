import React from "react";
import { useStyles } from "./styles";

interface IProps {
    step?: number
}

const ProgressIndicator: React.FC<IProps> = ({ step }) => {
    const classes = useStyles()
    const num1 = step === 0 ? classes.num +" "+classes.numActive : classes.num
    const num2 = step === 1 ? classes.num +" "+classes.numActive : classes.num
    const num3 = step === 2 ? classes.num +" "+classes.numActive : classes.num
    return (
       <div className={classes.container}>
           <div className={classes.mainBox}>
               <div className={classes.lineBox}>
                    <div className={classes.line}>
                        <div className={num1}><div className={classes.numCirle}>1</div></div>
                        <div className={num2}><div className={classes.numCirle}>2</div></div>
                        <div className={num3}><div className={classes.numCirle}>3</div></div>
                    </div>
                </div>
                <div className={classes.wishes}>
                    <div className={num1}>Хочу обменять</div>
                    <div className={num2}>Хочу получить</div>
                    <div className={num3}>Адрес доставки</div>
                </div>
           </div>
       </div>
    )
}

export default ProgressIndicator
