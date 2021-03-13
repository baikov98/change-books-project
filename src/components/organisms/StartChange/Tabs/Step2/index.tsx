import React from "react";
import { useForm } from 'react-hook-form';
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Categories from "../../../Categories";
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index'

interface IProps {
  tabsData: ITabsData;
}

const Step2: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, handleBackButtonClick } = tabsData
  const classes = useStyles();
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({});
  const handleNextButtonClick = handleSubmit(submit)
  return (
      <Box className={classes.wrapper}>
        <form>
          <Categories step={step} control={control} data={storeData} setValue={setValue} /> 
          <FormButtons step={step} 
                       handleBackButtonClick={handleBackButtonClick}
                       handleNextButtonClick={handleNextButtonClick} />
        </form>
      </Box>
  );
};

export default Step2;
