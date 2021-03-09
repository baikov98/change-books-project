import React from "react";

import {Controller, Control} from 'react-hook-form'
//import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
//import AccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';

import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { Colors } from "../../../styles/Colors";
import listOfCategories from './listOfCategories'

interface IProps {
  step: number;
  control: Control;
  data: {
    [key: string]: string;
  };
}

const OrangeCheckbox = withStyles({
  root: {
    '&$checked': {
      color: Colors.orange,
    },
  },
  checked: {
    color: Colors.orange,
  },
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Accordion = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    minHeight: 40,
    '&$expanded': {
      minHeight: 40,
    },
  },
  
  expandIcon: { 
    '&$expanded': {
      transform: 'rotate(90deg)',
      }
  },
})(MuiAccordionSummary);



const Categories: React.FC<IProps> = ({ step, control, data }) => {
  const classes = useStyles();
  const isGet = step ? 'Get' : ''
  return (
      <>
      <Typography className={classes.textGray}>Категории</Typography>
      {listOfCategories.map((item, index) => {
        return (
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
                            control={<OrangeCheckbox  
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
      })}
      </>
  );
};

export default Categories;
