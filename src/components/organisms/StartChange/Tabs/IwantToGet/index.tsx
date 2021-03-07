import React from "react";

import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

import Categories from "../../../Categories";


interface IProps {
  step: number;
  control: any;
  data: {
    [key: string]: string;
  }; 
}


const IwantToGet: React.FC<IProps> = ({ step, control, data }) => {
  const classes = useStyles();
  
  return (
 
      <Box className={classes.wrapper}>
        <Typography>Хочу получить</Typography>
        <Categories step={step} control={control} data={data} /> 
      </Box>

  );
};

export default IwantToGet;
