import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { getStartExchangeState } from '../../../store/selectors'
import { useStyles } from "./styles";
import { useHistory } from "react-router-dom";
import { useForm, Control, FieldErrors } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";

import { Box, Typography } from "@material-ui/core";

import ProgressIndicator from "../../atoms/ProgressIndicator"
import Step1 from "./Tabs/Step1"
import Step2 from "./Tabs/Step2"
import Step3 from "./Tabs/Step3"
import TitleItem from '../../atoms/TitleItem'
 

interface IStoreData {
  [key: string]: any;
}

export interface ITabsData {
  step: number; 
  storeData: IStoreData; 
  submit: (data: IStoreData) => void;
  handleBackButtonClick: () => void;
  control: Control;
  errors: FieldErrors;
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
  const storeData = startExchange.data as IStoreData
  const dispatch = useDispatch()
  const history = useHistory();
  const {
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });

  const submit = (data: IStoreData) => { 
    for (let key in data) {
      if (!data[key]) delete data[key]
    }
    listOfCategories.forEach((item, index) => {
      const title = item.title[1]
      item.opts.forEach((i, indx) => {
        if (data.hasOwnProperty(i[1])) {
          data[title] ? data[title].push(i) : data[title] = [i]
          console.log(data[title])
        }
      })
    })
    dispatch.startExchange.SET_EXCHANGE_DATA(data)
    dispatch.startExchange.SET_EXCHANGE_STEP(step < 2 ? step+1 : step) 
    if (step === 2) {
      history.push('userChange')
      dispatch.requestData.SET_REQUEST_DATA(startExchange.data)
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
