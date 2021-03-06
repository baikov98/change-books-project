import React from "react";

import {Controller} from 'react-hook-form'
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';


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

const listOfCategories = [{title: 'Жанр',
                           opts: ['Детектив', 'Детские книги', 'История', 'Мемуары', 'Приключения', 
                                   'Психология', 'Фантастика', 'Эзотерика']}, 
                          {title: 'Область наук',
                           opts: ['Биология', 'Медицина', 'Физика', 'Химия']}, 
                          {title: 'Состояние',
                           opts: ['Новая', 'В хорошем состоянии', 'Б/у', 'Потрепана']}, 
                          {title: 'Обложка',
                           opts: ['Суперобложка', 'Жесткая', 'Мягкая', 'Без обложки']}, 
                          {title: 'Лауреат',
                           opts: ['Нобелевская', 'Пулитцеровская', 'Гонкуровская', 'Букеровская', 'Русский Букер']}, 
                          {title: 'Экранизация',
                           opts: ['Экранизирована', 'Не экранизирована']}, 
                          {title: 'Язык издания',
                           opts: ['Русский', 'Английский']}]

const Categories: React.FC<IProps> = ({ control }) => {
  const classes = useStyles();
  
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
                  <Box key={item+index}>
                    <Controller
                        name={item}
                        control={control}
                        rules={{ required: false }}
                        defaultValue=""
                        render={(props) => (
                          <FormControlLabel
                          control={<Checkbox {...props} />}
                          label={item}
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
