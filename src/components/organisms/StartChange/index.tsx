import React, { useState, useEffect } from "react";
import { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'

import { useForm } from 'react-hook-form';
import { useHistory } from "react-router-dom";

import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack'; 
import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import ButtonItem from "../../atoms/ButtonItem";
import ProgressIndicator from "../../atoms/ProgressIndicator"
import DeliveryAddress from "./Tabs/DeliveryAddress"
import IwantToExchange from "./Tabs/IwantToExchange"
import IwantToGet from "./Tabs/IwantToGet"
 

interface IProps {}

function getStepContent(step: number, control: any, data: object) { 

  switch (step) {
    case 0:
      return <IwantToExchange step={step} control={control} data={data} />;  
    case 1:
      return <IwantToGet step={step} control={control} data={data} />; 
    case 2:
      return <DeliveryAddress step={step} control={control} data={data} />;
  }
}

const StartChange: React.FC<IProps> = () => {
  const classes = useStyles();
  const currentStep = useSelector((state: RootState) => state.startExchange)
  const step = currentStep.step
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm({});

  const submit = (data: any) => { 
    dispatch.startExchange.SET_EXCHANGE_DATA(data)
    dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step)
    if (step === 2) history.push('userChange')
  }
  const handleNext = handleSubmit(submit)
  const submitForm = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault()
      history.push('userChange')
  }
  const handleBack = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(step-1)
  };

  return (
    <Box className={classes.root}>
      <Typography>Бланк обмена</Typography>
      <ProgressIndicator number={step} />
      <form className={classes.form}>
      
        {getStepContent(step, control, currentStep.data)}     
        
        <Box className={classes.btnBox}>
          <ButtonItem
                size="large"
                btnColor="orange"
                disabled={step === 0}
                className={classes.btn}
                onClick={handleBack}
                style={{position: "relative"}} 
              ><ArrowBack style={{position: "absolute", top: "25%", left: "25%"}} /> Назад</ButtonItem>  
          <ButtonItem
                btnType="submit"
                size="large"
                btnColor="orange"
                className={classes.btn}
                style={{position: "relative"}} 
                onClick={handleNext}
            >Далее <ArrowForward style={{position: "absolute", top: "25%", left: "65%"}} /></ButtonItem>  
        </Box>
        </form>
    </Box>
  );
};

export default StartChange;
