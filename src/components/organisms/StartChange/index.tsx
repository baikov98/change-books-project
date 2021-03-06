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
 

type IFormInput = {
  book: string;
  author: string;
  isbn: string;
  year: string;
};

interface IProps {}

function getStepContent(step: number, control: any, data: object) { 

  switch (step) {
    case 0:
      return <IwantToExchange control={control} data={data} />;  
    case 1:
      return <IwantToGet control={control} />; 
    case 2:
      return <DeliveryAddress control={control} />;
    default:
      return <p>Default value</p>;
  }
}

const StartChange: React.FC<IProps> = () => {
  const classes = useStyles();
  const currentStep = useSelector((state: RootState) => state.startExchange)
  
  const dispatch = useDispatch()
  //useEffect(() => {}, [currentStep.step]); 

  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm<IFormInput>({});

  const submit = (data: any) => { 
    console.log(data)
    dispatch.startExchange.SET_EXCHANGE_DATA({[`step${currentStep.step}`]: data})
    dispatch.startExchange.SET_EXCHANGE_STEP(currentStep.step+1)
    console.log(currentStep)
  }
  const fun = handleSubmit(submit)
  const handleNext = () => {};
  const handleBack = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(currentStep.step-1)
  };

  console.log(currentStep)
  return (
    <Box className={classes.root}> 
      <ProgressIndicator />
      <form className={classes.form}>
      
        {getStepContent(currentStep.step, control, currentStep.data)}     
        
        <Box className={classes.btnBox}>
          <ButtonItem
                btnType="submit"
                size="large"
                btnColor="orange"
                disabled={currentStep.step === 0}
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
                onClick={fun}
            >Далее <ArrowForward style={{position: "absolute", top: "25%", left: "65%"}} /></ButtonItem>  
        </Box>
        </form>
    </Box>
  );
};

export default StartChange;
