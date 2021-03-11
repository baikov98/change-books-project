import React from "react";
import {Controller, Control, ControllerRenderProps, FieldValues} from 'react-hook-form'
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
  const getStr = step ? 'Get' : ''
  const hangleRemoveAllChecked = () => {
    listOfCategories.forEach((val) => {
      val.opts.forEach((val) => {
        if (!getStr) setValue(val[1], false)
        else setValue(val[1]+getStr, false)
      }) 
    })
  }
  const handleCheckBoxOnChange = (props: ControllerRenderProps<FieldValues>) => 
                                 (event: React.ChangeEvent<HTMLInputElement>) => 
                                    props.onChange(event.target.checked)           
  return (
      <>
      <Box className={classes.textBox}>
        <Typography className={classes.textGray}>Категории</Typography>
        <Typography className={classes.checkBoxRemover} 
                    onClick={hangleRemoveAllChecked}>Снять все выделения</Typography>
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
                {item.opts.map((item, index) => {
                  const name = item[1]
                  return <Box key={name}>
                          <Controller
                              name={name+getStr} 
                              control={control} 
                              rules={{ required: false }}
                              defaultValue={data[`${name+getStr}`] || false}
                              render={(props) => (
                                <FormControlLabel
                                  control={<CheckBox  
                                            onChange={handleCheckBoxOnChange(props)}
                                            checked={props.value} />}
                                            label={item[0]}
                                  />
                                  )}
                          />
                        </Box>
                      }        
                )}
              </AccordionDetails>
          </Accordion>
        )
      )}
      </>
  );
};

export default Categories;
