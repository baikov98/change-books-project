import React from "react";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../../../constants";
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";

import { useSelector } from "react-redux";
import { IBookInfoFields } from '../../../../../store/models/bookInfoFields'

import InputItem from '../../../../atoms/InputItem'
import Categories from "../../../Categories";
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index'
import { getBookInput } from '../../../../../store/selectors'

interface IProps {
  tabsData: ITabsData;
}

const Step1: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit } = tabsData
  const classes = useStyles();
  const bookInput = useSelector(getBookInput)
  
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });

  const handleNextButtonClick = handleSubmit(submit)
  return (
      <Box className={classes.wrapper}>
        <form>
        <Box className={classes.content}>
          <Box>
            <Typography className={classes.textGray}>Данные книги</Typography>
            {bookInput.map(({name, required, placeholder, label, type, error}: IBookInfoFields, index:number) => (
              <Controller
                key={`input-${index}`}
                name={name}
                control={control}
                rules={{ required: required }}
                defaultValue={storeData[name] || ''}
                render={(props) => (
                  <InputItem
                    label={label}
                    inputType={type}
                    error={errors[error]?.message}
                    placeholder={placeholder}
                    {...props}
                  />
              )}
            />
            ))}
          </Box>
          <Box>
            <Categories step={step} control={control} data={storeData} setValue={setValue} />
          </Box>
        </Box>
        <FormButtons step={step} handleNextButtonClick={handleNextButtonClick} />
        </form>
      </Box>

  );
};
//
export default Step1;
