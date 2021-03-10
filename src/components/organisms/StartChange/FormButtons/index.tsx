import React from "react";
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
  const nextText = step !== 2 ? 'Далее' : 'Подтвердить данные'
  return (
        <Box className={classes.btnBox}>
          {step === 0 ? <Box /> : <ButtonItem
                                    type="back"
                                    className={classes.btn}
                                    size="large"
                                    disabled={step === 0}
                                    onClick={handleBack}
                                  >Назад</ButtonItem>  }

          <ButtonItem
                type={step !== 2 ? 'forward' : 'solid'}
                className={classes.btn}
                size="large"
                onClick={handleNext}
            >{nextText}</ButtonItem>  
        </Box>
  );
};

export default FormButtons;
