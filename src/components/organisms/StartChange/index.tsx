import React from "react";
import { RootState } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

import { Box, Typography } from "@material-ui/core";

import ProgressIndicator from "../../atoms/ProgressIndicator"
import Step1 from "./Tabs/Step1"
import Step2 from "./Tabs/Step2"
import Step3 from "./Tabs/Step3"
 
interface IStoreData {
  [key: string]: string;
}

export interface ITabsData {
  step: number; 
  storeData: IStoreData; 
  submit: (data: IStoreData) => void;
  handleBack: () => void;
}

function getStepContent(tabsData: ITabsData) { 
  switch (tabsData.step) {
    case 0:
      return <Step1 tabsData={tabsData} />;  
    case 1:
      return <Step2 tabsData={tabsData} />; 
    case 2:
      return <Step3 tabsData={tabsData} />;
  }
}
interface IProps {}

const StartChange: React.FC<IProps> = () => {
  const classes = useStyles();
  const currentStep = useSelector((state: RootState) => state.startExchange)
  const step = currentStep.step
  const storeData = currentStep.data as IStoreData
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });

  const submit = (data: IStoreData) => { 
    dispatch.startExchange.SET_EXCHANGE_DATA(data)
    dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step)
    if (step === 2) history.push('userChange')
  }
  const handleBack = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(step-1)
  };
  const tabsData = {
    step, storeData, control, errors, submit, handleBack
  } 
  return (
    <Box className={classes.root}>
      <Typography>Бланк обмена</Typography>
      <ProgressIndicator step={step} />
      {getStepContent(tabsData)}     
    </Box>
  );
};

export default StartChange;
