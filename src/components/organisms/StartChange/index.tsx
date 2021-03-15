import React, { useEffect } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { getStartExchangeState } from '../../../store/selectors'
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm, Control, FieldErrors } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import filterFormData from "../../../utils/filterFormData";
import { Box, Typography } from "@material-ui/core";

import ProgressIndicator from "../../atoms/ProgressIndicator"
import Step1 from "./Tabs/Step1"
import Step2 from "./Tabs/Step2"
import Step3 from "./Tabs/Step3"
import TitleItem from '../../atoms/TitleItem'
 
export interface IStoreData {
  [key: string]: string | boolean | Array<string[]>
}

interface IStartExchangeData {
  step1: {},
  step2: {},
  step3: {},
}

interface ICategoryListItem {
  category: string;
  value: string[][]
}

interface IData {
  [key: string]: string | boolean | ICategoryListItem[]
}

export interface ITabsData {
  step: number; 
  storeData: IData; 
  submit: (data: IStoreData) => void;
  handleBackButtonClick: () => void;
  control: Control;
  errors: FieldErrors;
}

function getStepContent(tabsData: any) { 
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
  const startExchange = useSelector(getStartExchangeState)
  const listOfCategories = useSelector(getBookCategories)
  const step = startExchange.step
  const storeData = startExchange.data
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });

  const submit = (data: IData) => { 
    const filteredData = filterFormData(data, listOfCategories)
    const stepLabel = `step${step+1}`
    dispatch.startExchange.SET_EXCHANGE_DATA({[stepLabel]: filteredData})
    dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step) 
    if (step === 2) {
      dispatch.requestExchangeBooks.ADD_REQUEST_DATA(storeData.step1)
      dispatch.requestWishBooks.ADD_REQUEST_DATA(storeData.step2)
      history.push('userChange')
    }
  }
  const handleBackButtonClick = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(step-1)
  };
  const tabsData = {
    step, storeData, control, errors, submit, handleBackButtonClick
  } 
  return (
    <Box className={classes.root}>
      <TitleItem>Бланк обмена</TitleItem>
      <ProgressIndicator step={step} />
      {getStepContent(tabsData)}     
    </Box>
  );
};

export default StartChange;
