import React, { useEffect } from "react";
import { Controller, Control, ControllerRenderProps, FieldValues, FieldErrors } from 'react-hook-form'
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import { getBookCategories } from '../../../store/selectors'
import { Accordion, AccordionSummary, AccordionDetails } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Box, Typography, FormControl, FormHelperText } from "@material-ui/core";
import { onlyOneCheckBoxCategoryArray } from '../../../store/models/bookCategories'
import CheckBox from '../../atoms/CheckBox'

interface ICategory {
  title: string[];
  opts: string[][]
}

interface IRequestCatList {
  title: string;
  value: string[][]
}

interface IProps {
  step: number;
  control: Control;
  data: any;        // пока неизвестен точный формат данных, приходящих с бэка
  setValue: (name: string, value: string | boolean) => void;
  checkLimit?: boolean
  getValues?: (name?: string | string[]) => void
  genresCheck?: {
    current: boolean
  };
}

const Categories: React.FC<IProps> = ({ 
  step, 
  control, 
  data, 
  setValue, 
  checkLimit, 
  getValues,
  genresCheck
}) => {

  const classes = useStyles(); 
  const listOfCategories: ICategory[] = useSelector(getBookCategories)
  const hangleRemoveAllChecked = () => {
    listOfCategories.forEach((val) => {
      val.opts.forEach((val) => {
        setValue(val[1], false)
      }) 
    })
  }
  const handleRemovedCheckedInCategory = (category: ICategory) => {
    if (onlyOneCheckBoxCategoryArray.includes(category.title[0])) {
      category.opts.forEach(val => {
        setValue(val[1], false)
      })
    }
  }
  const handleCheckBoxOnChange = (props: ControllerRenderProps<FieldValues>, item: ICategory) =>  
                                 (event: React.ChangeEvent<HTMLInputElement>) => {
                                      if (checkLimit) handleRemovedCheckedInCategory(item)
                                      props.onChange(event.target.checked)    
                                  }       
  return (
      <FormControl error={!genresCheck?.current} className={classes.formControl} > 
      <Box className={classes.textBox}>
        <Typography className={classes.textGray}>Категории</Typography>
        <Typography className={classes.checkBoxRemover} 
                    onClick={hangleRemoveAllChecked}>Снять все выделения</Typography>
      </Box>
      <Box>
      {listOfCategories.map((item, index) => (
          <Accordion key={item.title[0]+index} className={classes.accordion}>
              <AccordionSummary
                expandIcon={<KeyboardArrowRightIcon />}
                className={classes.accordionSummary}
                classes={{
                  expandIcon: classes.expandIcon,
                }}
              >
                <Typography className={classes.accordionTitle}>{item.title[0]}</Typography>
              </AccordionSummary>
              <AccordionDetails className={classes.accordionDetails}>
                {item.opts.map((val, index) => {
                  const name = val[1]
                  const valuesArray: [] = []
                  const correctPath = step === 0 ? data.step1 : step === 1 ? data.step2 : data
                  correctPath?.categoryList?.map((val: IRequestCatList) => 
                  val.value.map((i: string[]) => valuesArray.push(i[1] as never)))
                   
                  const defaultValue = valuesArray.some((i: any) => name === i)

                  return <Box key={name} className={classes.accordionCheckbox} >
                          <Controller
                              name={name} 
                              control={control} 
                              rules={{ required: false }}
                              defaultValue={defaultValue}
                              render={(props) => (
                                <FormControlLabel
                                  control={<CheckBox  
                                            onChange={handleCheckBoxOnChange(props, item)}
                                            checked={props.value} />}
                                            label={val[0]}
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
      {!genresCheck?.current ? (<FormHelperText>* Необходимо выбрать минимум 1 жанр</FormHelperText>) : null}
      </FormControl>
  );
};

export default Categories;
