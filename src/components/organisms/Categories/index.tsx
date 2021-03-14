import React from "react";
import {Controller, Control, ControllerRenderProps, FieldValues} from 'react-hook-form'
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { getBookCategories } from '../../../store/selectors'
import AccordionDetails from '@material-ui/core/AccordionDetails';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box,  Typography } from "@material-ui/core";

import { Accordion, AccordionSummary } from './customComponents'
import CheckBox from '../../atoms/CheckBox'
import { IStoreData } from '../StartChange'

interface IProps {
  step: number;
  control: Control;
  data: any;
  setValue: (name: string, value: string | boolean) => void;
}

const Categories: React.FC<IProps> = ({ step, control, data, setValue }) => {
  const classes = useStyles(); 
  const listOfCategories = useSelector(getBookCategories)
  const hangleRemoveAllChecked = () => {
    listOfCategories.forEach((val) => {
      val.opts.forEach((val) => {
        setValue(val[1], false)
      }) 
    })
  }
  const handleCheckBoxOnChange = (props: ControllerRenderProps<FieldValues>) => 
                                 (event: React.ChangeEvent<HTMLInputElement>) => 
                                    props.onChange(event.target.checked)           
  return (
      <Box>
      <Box className={classes.textBox}>
        <Typography className={classes.textGray}>Категории</Typography>
        <Typography className={classes.checkBoxRemover} 
                    onClick={hangleRemoveAllChecked}>Снять все выделения</Typography>
      </Box>
      {listOfCategories.map((item, index) => (
          <Accordion key={item.title[0]+index} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<KeyboardArrowRightIcon />}
                aria-controls="panel1a-content"
              >
                <Typography className={classes.accordionTitle}>{item.title[0]}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {item.opts.map((item, index) => {
                  const name = item[1]
                  const valuesArray: [] = []
                  const correctPath = step === 0 ? data.step1 : step === 1 ? data.step2 : data
                  correctPath?.categoryList?.map((item: any) => item.value.map((i: any) => valuesArray.push(i[1] as never)))
                   
                  const defaultValue = valuesArray.some((i: any) => name === i)

                  return <Box key={name}>
                          <Controller
                              name={name} 
                              control={control} 
                              rules={{ required: false }}
                              defaultValue={defaultValue}
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
      </Box>
  );
};

export default Categories;
