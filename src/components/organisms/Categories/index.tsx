import React, { useRef } from "react";
import {Controller, Control} from 'react-hook-form'
import { useStyles } from "./styles";

import AccordionDetails from '@material-ui/core/AccordionDetails';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box,  Typography } from "@material-ui/core";

import listOfCategories from './listOfCategories'
import { Accordion, AccordionSummary } from './customComponents'
import CheckBox from '../../atoms/CheckBox'

interface IProps {
  step: number;
  control: Control;
  data: {
    [key: string]: string;
  };
  setValue: (name: string, value: string | boolean) => void;
}

const Categories: React.FC<IProps> = ({ step, control, data, setValue }) => {
  const classes = useStyles();
  const isGet = step ? 'Get' : ''
  const removeAllChecked = () => {
    listOfCategories.forEach((val, i) => {
      val.opts.forEach((val, i) => {
        setValue(val[1], false)
        if (isGet) setValue(val[1]+isGet, false)
      }) 
    })
  }
  return (
      <>
      <Box className={classes.textBox}>
        <Typography className={classes.textGray}>Категории</Typography>
        <Typography className={classes.checkBoxRemover} onClick={removeAllChecked}>Снять все выделения</Typography>
      </Box>
      {listOfCategories.map((item, index) => (
          <Accordion key={item.title+index} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<KeyboardArrowRightIcon />}
                aria-controls="panel1a-content"
              >
                <Typography className={classes.accordionTitle}>{item.title}</Typography>
                
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {item.opts.map((item, index) => ( 
                    <Box key={item[1]}>
                      <Controller
                          name={item[1]+isGet} 
                          control={control} 
                          rules={{ required: false }}
                          defaultValue={data[`${item[1]+isGet}`] || false} // получение данных
                          render={(props) => (
                            <FormControlLabel
                            control={<CheckBox  
                                                onChange={e => props.onChange(e.target.checked)}
                                                checked={props.value} />}
                                                label={item[0]}
                            />
                            )}
                      />
                    </Box>
                )
                
                )}
              </AccordionDetails>
          </Accordion>
        )
      )}
      </>
  );
};

export default Categories;
