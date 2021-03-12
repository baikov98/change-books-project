import React, { useState } from "react";
import { useStyles } from "./styles";
import { useForm } from 'react-hook-form';
import { Box,  Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { IBookInfoFields } from '../../../store/models/bookCategories'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'
import BookInfo from '../BookInfo'
import Categories from '../Categories'
import ButtonItem from '../../atoms/ButtonItem'

interface IProps {
  data: {
    [key: string]: string
  };
  step?: number;
  bookCategories: IBookInfoFields[];
  onClick: () => void;
}

const BookForExchange: React.FC<IProps> = ({ data, step, bookCategories, onClick }) => {
  const [editState, setEditState] = useState(false)
  const handleSwitchEditState = () => {
    setEditState(!editState)
  }
  const classes = useStyles();
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });
  const result = bookCategories.map((i) => i.opts.map((item) => {
    if (data.hasOwnProperty(item[1])) { 
      return <CatAndValue key={item[0]}
                          category={i.title[0]} 
                          value={item[0]}
                           /> 
    }
  }))
  return (
    <Box>
      {editState ? <Box className={classes.editForm}>
                      <BookInfo storeData={data} control={control} errors={errors} />
                      <Categories step={1} control={control} data={data} setValue={setValue} />
                      <ButtonItem size='large' type='solid' onClick={handleSwitchEditState}>Сохранить</ButtonItem>
                    </Box>
                     : 
                     <><Box className={classes.header}>
                      <Box className={classes.title}>{`${data.author} "${data.book}"`}</Box>
                      <EditButton onClick={handleSwitchEditState} />
                    </Box >
                    <Box className={classes.content}>
                      {data.year ? <CatAndValue category='Год издания' value={data.year}/> : ''}
                      {data.isbn ? <CatAndValue category='ISBN' value={data.isbn}/> : ''}
                      {result}
                    </Box></>
                    }
          
      <Box className={classes.bottomLine}></Box>
    </Box>
  );
};

export default BookForExchange;
