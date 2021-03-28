import React from "react";
import CheckBox from "../../../../atoms/CheckBox";
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
import { getMainInput, getAdressInput, getUser } from '../../../../../store/selectors'  
import UserChange from '../../../UserChange'

interface IProps {
  tabsData: ITabsData;
}

const Step3: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit, handleBackButtonClick } = tabsData
  const classes = useStyles();
  const mainInput = useSelector(getMainInput)
  const adressInput = useSelector(getAdressInput);
  const onlyNames = mainInput.slice(0, 3)
  const personalData = useSelector(getUser);
  const logged = Object.keys(personalData)
  console.log(logged)
  const {
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.DELIVERY_INFO)
  });
  const handleNextButtonClick = handleSubmit(submit)

  return (
    <>
      { !logged.length ? <UserChange /> : 
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
                  defaultValue={storeData.step3[item.name]} 
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
                    defaultValue={storeData.step3[item.name]}
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
          <Controller
            name="is_default"
            control={control}
            defaultValue={true}
            render={({ value, onChange }) => (
              <CheckBox
                label={'Сделать адресом по умолчанию'}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.checked)}
                checked={value}
              />
            )}
          />
          <FormButtons step={step} 
                       handleBackButtonClick={handleBackButtonClick} 
                       handleNextButtonClick={handleNextButtonClick} />
          </form>
      </Box>}
      </>
  );
};

export default Step3;
