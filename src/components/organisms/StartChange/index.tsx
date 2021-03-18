import React, { useRef } from "react";

import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { getStartExchangeState } from '../../../store/selectors'
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm, Control, FieldErrors } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import filterFormData from "../../../utils/filterFormData";
import { IData } from "../../../utils/filterFormData";
import { Box, Typography } from "@material-ui/core";
import { genresCheckBoxNameArray } from '../../../store/models/bookCategories'
import ProgressIndicator from "../../atoms/ProgressIndicator"
import Step1 from "./Tabs/Step1"
import Step2 from "./Tabs/Step2"
import Step3 from "./Tabs/Step3"
import TitleItem from '../../atoms/TitleItem'
 
export interface IStoreData {
  [key: string]: string | boolean | Array<string[]>
}

interface IStepData {
  step1: IData;
  step2: IData;
}

export interface ITabsData {
  step: number; 
  storeData: IStepData; 
  submit: (data: IData) => void;
  handleBackButtonClick: () => void;
  genresCheck: {
    current: boolean
  };
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
  const startExchange = useSelector(getStartExchangeState)
  const listOfCategories = useSelector(getBookCategories)
  const step = startExchange.step
  const storeData = startExchange.data
  const dispatch = useDispatch()
  const history = useHistory();
  const genresCheck = useRef(true)
  const submit = (data: IData) => {
    for (let key in data) if (!data[key]) delete data[key]
    genresCheck.current = Object.keys(data).some((i) => genresCheckBoxNameArray.includes(i))
    const filteredData = filterFormData(data, listOfCategories)
    const stepLabel = `step${step+1}`
    if (genresCheck.current) {
      dispatch.startExchange.SET_EXCHANGE_DATA({[stepLabel]: filteredData})
      dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step) 
    }
    if (step === 2) {
      dispatch.requestExchangeBooks.ADD_REQUEST_DATA(storeData.step1)
      dispatch.requestWishBooks.ADD_REQUEST_DATA(storeData.step2)
      history.push('userChange/offer')
    }
  } 
  const handleBackButtonClick = () => {
    dispatch.startExchange.SET_EXCHANGE_STEP(step-1)
  };
  const tabsData = {
    step, storeData, submit, handleBackButtonClick, genresCheck
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
