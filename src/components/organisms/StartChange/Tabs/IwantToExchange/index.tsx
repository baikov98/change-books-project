import React from "react";

import {Controller, useForm} from 'react-hook-form'

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
  data: any;
}

const IwantToExchange: React.FC<IProps> = ({ control, data }) => {
  const classes = useStyles();
  
  return (
 
      <Box className={classes.wrapper}>

        <Box className={classes.content}>
          <Box className={classes.formBox}>
            <Typography>Данные книги</Typography>
              <Controller
                  name="author"
                  control={control}
                  rules={{ required: true }}
                  defaultValue={data?.step0?.author || ''}   
                  render={(props) => (
                    <TextField
                    placeholder="Фамилия и имя автора"
                      {...props}
                  />
                )}
              />
                <Controller
                    name="book"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={data?.step0?.book || ''}  
                    render={(props) => (
                      <TextField
                      placeholder="Название книги"
                        {...props}
                  />
                )}
              />
                <Controller
                    name="isbn"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={data?.step0?.isbn || ''}  
                    render={(props) => (
                      <TextField
                      placeholder="ISBN"
                        {...props}
                  />
                )}
              />
                <Controller
                    name="year"
                    control={control}
                    rules={{ required: true }}
                    defaultValue={data?.step0?.year || ''}  
                    render={(props) => (
                      <TextField
                      placeholder="Год издания"
                        {...props}
                  />
                )}
              />
          </Box>
          <Box className={classes.categoryBox}>
            <Categories control={control} />
          </Box>
        </Box>
      </Box>

  );
};
//
export default IwantToExchange;
