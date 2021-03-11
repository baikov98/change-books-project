import React from "react";

import { Box, Typography } from "@material-ui/core";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../../../constants";

import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { IRegFields } from '../../../../../store/models/regFields'

import InputItem from '../../../../atoms/InputItem'
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index'
import { getMainInput, getAdressInput } from './selectors'

interface IProps {
  tabsData: ITabsData;
}

const Step3: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, handleBackButtonClick } = tabsData
  const classes = useStyles();
  const mainInput = useSelector(getMainInput)
  const adressInput = useSelector(getAdressInput);
  const onlyNames = mainInput.slice(0, 3)

  const {
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.DELIVERY_INFO)
  });
  const handleNextButtonClick = handleSubmit(submit)

  return (
      <Box className={classes.wrapper}>
        <form>
          <Typography>Адрес доставки</Typography>
          <Box className={classes.inputRow}>
              {onlyNames.map((item: IRegFields, index:number) => (
                <Controller
                  key={`input-${index}`}
                  name={item.name}
                  control={control}
                  rules={{ required: item.required }}
                  defaultValue={storeData[item.name] || ''}
                  render={(props) => (
                    <InputItem
                      label={item.label}
                      inputType={item.type}
                      error={errors[item.error]?.message}
                      placeholder={item.placeholder}
                      {...props}
                    />
                )}
              />
              ))}
           </Box>

          <Box className={classes.inputRow}>
              {adressInput.map((item: IRegFields, index:number) => (
                    <Controller
                    key={`input-adress-${index}`}
                    name={item.name}
                    control={control}
                    rules={{ required: item.required }}
                    defaultValue={storeData[item.name] || ''}
                    render={(props) => (
                      <InputItem
                        label = {item.label}
                        inputType={item.type}
                        error={errors[item.error]?.message}
                        placeholder={item.placeholder}
                        {...props}
                      />
                    )}
                  />
                  ))}
          </Box>
          <FormButtons step={step} handleBackButtonClick={handleBackButtonClick} handleNextButtonClick={handleNextButtonClick} />
          </form>
      </Box>

  );
};

export default Step3;
