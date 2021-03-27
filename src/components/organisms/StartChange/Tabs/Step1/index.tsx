import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../../../constants";
import { Box, FormControl, FormHelperText  } from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index' 
import BookInfo from '../../../BookInfo'
import Categories from '../../../Categories' 

interface IProps {
  tabsData: ITabsData;
}

const Step1: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, genresCheck } = tabsData
  const classes = useStyles();

  const {
    setValue,
    getValues,
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });
  const handleNextButtonClick = handleSubmit(submit) 

  return (
    <form>
      <Box className={classes.content}>
          <BookInfo data={storeData.step1} 
                    control={control} 
                    errors={errors} />
            <Categories step={step} 
                        control={control} 
                        data={storeData.step1.categories} 
                        setValue={setValue} 
                        checkLimit={true}
                        getValues={getValues}
                        genresCheck={genresCheck} />
      </Box>
      <FormButtons step={step} handleNextButtonClick={handleNextButtonClick} />
    </form>
  );
};
//
export default Step1;
