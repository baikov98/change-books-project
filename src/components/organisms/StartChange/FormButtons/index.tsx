import React from "react";

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack'; 
import { Box } from "@material-ui/core";

import { useStyles } from "./styles";
import ButtonItem from "../../../atoms/ButtonItem";

 
interface propData {
  [key: string]: string;
}

interface IProps {
  step: number;
  handleBack?: (e: any) => void;
  handleNext: (e: any) => void;
}

const FormButtons: React.FC<IProps> = ({ step, handleBack, handleNext }) => {
  const classes = useStyles();
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
            >Далее <ArrowForward style={{position: "absolute", top: "25%", left: "65%"}} /></ButtonItem>  
        </Box>
  );
};

export default FormButtons;
