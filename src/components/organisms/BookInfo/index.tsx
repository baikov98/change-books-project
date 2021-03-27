import React from "react";
import { Controller } from 'react-hook-form';
import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { Control, FieldErrors } from 'react-hook-form';
import { useSelector } from "react-redux";
import { IBookInfoFields } from '../../../store/models/bookInfoFields'
import { IOfferBookData } from '../../../store/models/requestExchangeBooks'
import InputItem from '../../atoms/InputItem'
import { getBookInput } from '../../../store/selectors'

interface IProps {
  data: any; 
  control: Control;
  errors: FieldErrors;
}

const BookInfo: React.FC<IProps> = ({ data, control, errors }) => { 
  const classes = useStyles();
  const bookInput = useSelector(getBookInput)
  
  return (
          <Box>
            <Typography className={classes.textGray}>Данные книги</Typography>
            {bookInput.map(({name, required, placeholder, label, type, error}: IBookInfoFields, index: number) => 
            { 
              return <Controller
                        key={`input-${index}`}
                        name={name}
                        control={control}
                        rules={{ required: required }}
                        defaultValue={data[name] || ''} 
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
            })}
          </Box>
        );
};

export default BookInfo;
