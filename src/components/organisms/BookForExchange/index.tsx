import React, { useState } from "react";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { useForm } from 'react-hook-form';
import { Box,  Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import filterFormData from "../../../utils/filterFormData"; 
import { IBookInfoFields } from '../../../store/models/bookCategories'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'
import BookInfo from '../BookInfo'
import Categories from '../Categories'
import ButtonItem from '../../atoms/ButtonItem'

interface ICategoryListItem {
  category: string;
  value: string[][];
}

interface IBookListItem {
    authorName: string,
    authorSurname: string,
    book: string,
    year?: string,
    isbn?: string,
    categoryList: ICategoryListItem[]
}

interface IProps {
  data: IBookListItem;
  objectKey: string;
  bookCategories: IBookInfoFields[];
}

const BookForExchange: React.FC<IProps> = ({ data, objectKey, bookCategories }) => {
  const [editState, setEditState] = useState(false)
  const exchangeBook = data
  const dispatch = useDispatch()
  const listOfCategories = useSelector(getBookCategories)
  const handleSwitchEditState = () => {
    setEditState(!editState);
  };
  const classes = useStyles();
  const { setValue, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO),
  });
  const bookDetailsArray = 
    exchangeBook.categoryList.map((item) => {
      const value = item.value.map((i) => i[0])
      return <CatAndValue key={item.category}
                   category={item.category} 
                   value={value.join(', ')}
                   /> 
    })
       
  const submit = (formData: any) => {
    const filteredData = filterFormData(formData, listOfCategories)
    dispatch.requestExchangeBooks.SET_REQUEST_DATA({[objectKey]: filteredData})
    handleSwitchEditState()
  }
  const handleEditFormSubmit = handleSubmit(submit)
  const bookFormItem = <form>
                        <Box className={classes.editForm}>
                            <BookInfo data={data} 
                                      control={control} 
                                      errors={errors} /> 
                            <Categories step={3} 
                                        control={control} 
                                        data={data} 
                                        setValue={setValue}
                                        checkLimit={true} /> 
                            <ButtonItem size='large' 
                                        type='solid' 
                                        onClick={handleEditFormSubmit}>Сохранить</ButtonItem>
                        </Box>
                       </form>
  const bookInfoItem = <>
                <Box className={classes.header}>
                  <Box className={classes.title}>
                    {`${exchangeBook.authorName} ${exchangeBook.authorSurname} "${exchangeBook.book}"`}
                  </Box>
                  <EditButton onClick={handleSwitchEditState} />
                </Box >
                <Box className={classes.content}>
                  {exchangeBook.year && <CatAndValue category='Год издания' value={exchangeBook.year}/> }
                  {exchangeBook.isbn && <CatAndValue category='ISBN' value={exchangeBook.isbn}/>}
                  {bookDetailsArray}
                </Box>
              </>
  return (
    <Box>
      {editState ? bookFormItem : bookInfoItem}
      <Box className={classes.bottomLine}></Box>
    </Box>
  );
};

export default BookForExchange;
