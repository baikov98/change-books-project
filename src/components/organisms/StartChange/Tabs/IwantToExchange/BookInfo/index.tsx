import React from "react";
import {  Controller } from 'react-hook-form'
import { TextField} from "@material-ui/core";
import { useStyles } from "./styles";



interface IProps { 
  control: any;
  data: {
    [key: string]: string;
  };
}

const BookInfo: React.FC<IProps> = ({ control, data }) => {
  const classes = useStyles();
  
  return (
          <>
            <Controller
                  name="author"
                  control={control}
                  rules={{ required: true }}
                  defaultValue={data?.author || ''}   
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
                    defaultValue={data?.book || ''}  
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
                    rules={{ required: false }}
                    defaultValue={data?.isbn || ''}  
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
                    rules={{ required: false }}
                    defaultValue={data?.year || ''}  
                    render={(props) => (
                      <TextField
                      placeholder="Год издания"
                        {...props}
                  />
                )}
              />
          </>
  );
};
//
export default BookInfo;
