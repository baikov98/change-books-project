import React from "react";

import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";

import Categories from "../../../Categories";

type IFormInput = {
  book: string;
  author: string;
  isbn: string;
  year: string;
};

interface IProps {
  control: any;
}


const IwantToGet: React.FC<IProps> = ({ control }) => {
  const classes = useStyles();
  
  return (
 
      <Box className={classes.wrapper}>
        <Typography>Хочу получить</Typography>
        
      </Box>

  );
};
//<Categories control={control} />
export default IwantToGet;
