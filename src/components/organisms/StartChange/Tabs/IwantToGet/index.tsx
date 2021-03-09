import React from "react";
import { useForm, FieldErrors } from 'react-hook-form';
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import Categories from "../../../Categories";
import FormButtons from '../../FormButtons'
interface IProps {
  tabsData: any;
}

const IwantToGet: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, handleBack } = tabsData
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    errors,
    reset,
    setError,
    clearErrors,
  } = useForm({});
  const handleNext = handleSubmit(submit)
  return (
 
      <Box className={classes.wrapper}>
        <Typography>Хочу получить</Typography>
        <form>
          <Categories step={step} control={control} data={storeData} /> 
          <FormButtons step={step} handleBack={handleBack} handleNext={handleNext} />
        </form>
      </Box>

  );
};

export default IwantToGet;
