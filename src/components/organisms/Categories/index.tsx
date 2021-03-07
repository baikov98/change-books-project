import React from "react";

import {Controller, Control} from 'react-hook-form'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import { Box, TextField, Typography } from "@material-ui/core";

import { useStyles } from "./styles";


interface IProps {
  step: number;
  control: Control;
  data: {
    [key: string]: string;
  };
}

const listOfCategories = [{title: 'Жанр',
                           opts: [['Детектив', 'detective'], ['Детские книги', 'childbooks'], 
                                  ['История', 'history'], ['Мемуары', 'memoirs'], ['Приключения', 'adventures'], 
                                   ['Психология', 'psychology'], ['Фантастика', 'fantasy'], ['Эзотерика', 'esoterics']]}, 
                          {title: 'Область наук',
                           opts: [['Биология', 'biology'], ['Медицина', 'medicine'], ['Физика', 'physics'], 
                                  ['Химия', 'chemistry']]}, 
                          {title: 'Состояние',
                           opts: [['Новая', 'fresh'], ['В хорошем состоянии', 'goodshape'], ['Б/у', 'boo'], 
                                  ['Потрепана', 'shabby']]}, 
                          {title: 'Обложка',
                           opts: [['Суперобложка', 'dustjacket'], ['Жесткая', 'tough'], ['Мягкая', 'soft'], 
                                  ['Без обложки', 'withoutcover']]}, 
                          {title: 'Лауреат',
                           opts: [['Нобелевская', 'nobel'], ['Пулитцеровская', 'pylit'], ['Гонкуровская', 'gonkyr'], 
                                  ['Букеровская', 'buker'], ['Русский Букер', 'rusbuker']]}, 
                          {title: 'Экранизация',
                           opts: [['Экранизирована', 'filmed'], ['Не экранизирована', 'notfilmed']]}, 
                          {title: 'Язык издания',
                           opts: [['Русский', 'russian'], ['Английский', 'english']]}]

const Categories: React.FC<IProps> = ({ step, control, data }) => {
  const classes = useStyles();
  const isGet = step ? 'Get' : ''
  return (
      <>
      <Typography>Категории</Typography>
      {listOfCategories.map((item, index) => {
        return (
          <Accordion key={item.title+index}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
              >
              <Typography className='none'>{item.title}</Typography>
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
                          control={<Checkbox 
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
