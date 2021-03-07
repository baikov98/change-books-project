import React, { useState, useEffect } from "react";
import { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import { connect } from "react-redux";
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import {Controller, useForm} from 'react-hook-form';

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
    dispatch.startExchange.SET_EXCHANGE_STEP(step+1)
  }
  const handleNext = handleSubmit(submit)
  const submitForm = () => null
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
                onClick={step === 2 ? () => null : handleNext}
            >Далее <ArrowForward style={{position: "absolute", top: "25%", left: "65%"}} /></ButtonItem>  
        </Box>
        </form>
    </Box>
  );
};

export default StartChange;
