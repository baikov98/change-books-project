import React from "react";

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack'; 
import { Box } from "@material-ui/core";

import { useStyles } from "./styles";
import ButtonItem from "../../../atoms/ButtonItem";

interface IProps {
  step: number;
  handleBack?: (e: React.MouseEvent<HTMLElement>) => void;
  handleNext: (e: React.MouseEvent<HTMLElement>) => void;
}

const FormButtons: React.FC<IProps> = ({ step, handleBack, handleNext }) => {
  const classes = useStyles();
  const nextText = step !== 2 ? (<>Далее <ArrowForward style={{position: "absolute", top: "25%", left: "65%"}} /></>) : 
                                  'Подтвердить данные'
  return (
        <Box className={classes.btnBox}>
          {step === 0 ? <Box /> : <ButtonItem
                size="large"
                btnColor="orange"
                disabled={step === 0}
                className={classes.btn}
                onClick={handleBack}
            ><ArrowBack style={{position: "absolute", top: "25%", left: "25%"}} /> Назад</ButtonItem>  }

          <ButtonItem
                btnType="submit"
                size="large"
                btnColor="orange"
                className={classes.btn}
                onClick={handleNext}
            >{nextText}</ButtonItem>  
        </Box>
  );
};

export default FormButtons;
