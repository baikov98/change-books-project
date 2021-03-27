import React from "react";
import { useForm } from 'react-hook-form';
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Categories from "../../../Categories";
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../../../../store/selectors'

interface IProps {
  tabsData: ITabsData;
}

const Step2: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, handleBackButtonClick, genresCheck } = tabsData
  const personalData = useSelector(getUser)
  const classes = useStyles();
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({});
  const handleNextButtonClick = handleSubmit(submit)
  return (
        <form>
          <Categories step={step} 
                      control={control} 
                      data={storeData.step2.categories} 
                      setValue={setValue}
                      genresCheck={genresCheck} /> 
          <FormButtons step={step} 
                       handleBackButtonClick={handleBackButtonClick}
                       handleNextButtonClick={handleNextButtonClick} />
        </form>
  );
};

export default Step2;
