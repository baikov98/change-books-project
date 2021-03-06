import React from "react";

import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";



type IFormInput = {
  book: string;
  author: string;
  isbn: string;
  year: string;
};

interface IProps {
  control: any;
}

const DeliveryAddress: React.FC<IProps> = ({ control }) => {
  const classes = useStyles();


  const submit = () => {

  }

  
  return (
 
      <Box className={classes.wrapper}>
        <Typography>Адрес доставки</Typography>
        
      </Box>

  );
};

export default DeliveryAddress;
