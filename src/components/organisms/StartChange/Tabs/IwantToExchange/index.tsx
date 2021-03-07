import React from "react";

import {Controller, useForm} from 'react-hook-form'

import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import Categories from "../../../Categories";
import BookInfo from './BookInfo'; 

interface IProps {
  step: number; 
  control: any;
  data: object;
}

const IwantToExchange: React.FC<IProps> = ({ step, control, data }) => {
  const classes = useStyles();
  
  return (
 
      <Box className={classes.wrapper}>

        <Box className={classes.content}>
          <Box className={classes.formBox}>
            <Typography>Данные книги</Typography>
            <BookInfo control={control} data={data} />
              
          </Box>
          <Box className={classes.categoryBox}>
            <Categories step={step} control={control} data={data} />
          </Box>
        </Box>
      </Box>

  );
};
//
export default IwantToExchange;
