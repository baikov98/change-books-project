import React from "react";
import { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'

import { useForm, Control, FieldErrors } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

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
 
interface propData {
  [key: string]: string;
}

interface IProps {}
export interface ITabsData {
  step: number; 
  storeData: any;
  submit: any;
  handleBack: any;
}

function getStepContent(tabsData: ITabsData) { 
  switch (tabsData.step) {
    case 0:
      return <IwantToExchange tabsData={tabsData} />;  
    case 1:
      return <IwantToGet tabsData={tabsData} />; 
    case 2:
      return <DeliveryAddress tabsData={tabsData} />;
  }
}

const StartChange: React.FC<IProps> = () => {
  const classes = useStyles();
  const currentStep = useSelector((state: RootState) => state.startExchange)
  const step = currentStep.step
  const storeData = currentStep.data as propData
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });

  const submit = (data: any) => { 
    dispatch.startExchange.SET_EXCHANGE_DATA(data)
    dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step)
    if (step === 2) history.push('userChange')
  }
  const handleNext = handleSubmit(submit)
  const handleBack = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(step-1)
  };
  const tabsData = {
    step, storeData, control, errors, submit, handleBack
  } 
  return (
    <Box className={classes.root}>
      <Typography>Бланк обмена</Typography>
      <ProgressIndicator number={step} />
      {getStepContent(tabsData)}     
    </Box>
  );
};

export default StartChange;
