import React from "react";

import { Box, TextField, Typography } from "@material-ui/core";
import {Controller} from 'react-hook-form'
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../../../store";
import {IRegFields} from '../../../../../store/models/regFields'

import InputItem from '../../../../atoms/InputItem'
interface IProps {
  step: number;
  control: any;
  data: object;
}

const getMainInput = (state: RootState) => {
  return state.regFields.main
}
const getAdressInput = (state: RootState) => {
  return state.regFields.adress
}

const DeliveryAddress: React.FC<IProps> = ({ step, control, data }) => {
  const classes = useStyles();
  const mainInput = useSelector(getMainInput)
  const adressInput = useSelector(getAdressInput);
  const onlyNames = mainInput.slice(0, 3)
  return (
 
      <Box className={classes.wrapper}>
        <Typography>Адрес доставки</Typography>
        <Box className={classes.inputRow}>
            {onlyNames.map((item: IRegFields, index:number) => (
              <Controller
              key={`input-${index}`}
              name={item.name}
              control={control}
              rules={{ required: item.required }}
              defaultValue=""
              render={(props) => (
                <InputItem
                  label={item.label}
                  inputType={item.type}
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
                  defaultValue=""
                  render={(props) => (
                    <InputItem
                      label = {item.label}
                      placeholder={item.placeholder}
                      {...props}
                    />
                  )}
                />
                ))}
          </Box>
      </Box>

  );
};

export default DeliveryAddress;
