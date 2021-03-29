import React, { useState, useRef } from "react";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { useForm } from 'react-hook-form';
import { Box } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import filterFormData from "../../../utils/filterFormData"; 
import genresChecker from "../../../utils/genresChecker";
import { IData } from "../../../utils/filterFormData"; 
import { IBookInfoFields, ICategoryListItem } from '../../../store/models/bookCategories'
import { IOfferBookData } from '../../../store/models/requestExchangeBooks'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'
import BookInfo from '../BookInfo'
import Categories from '../Categories'
import ButtonItem from '../../atoms/ButtonItem'

interface IProps {
  data: IOfferBookData;
  objectId: string;
  bookCategories: IBookInfoFields[];
  editable: boolean;
  handleEditable: (value: boolean) => void
}

const BookForExchange: React.FC<IProps> = ({ 
  data, 
  objectId,  
  editable, 
  handleEditable 
}) => {
  const [editState, setEditState] = useState(false)
  const genresCheck = useRef(true)
  const exchangeBook: any = data
  const dispatch = useDispatch()
  const listOfCategories = useSelector(getBookCategories)
  const handleSwitchEditState = () => {
    setEditState(!editState);
  };
  const handleEditButtonClick = () => {
    if (editable) {
      setEditState(!editState)
      handleEditable(false)
    }
  }
  const classes = useStyles();
  const { setValue, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO),
  });
  const bookDetailsArray = 
    exchangeBook?.categories.map((item: any) => {
      return <CatAndValue key={item.category}
                   category={item?.category} 
                   value={item?.value}
                   /> 
    })

  const submit = (formData: IData) => {
    genresCheck.current = genresChecker(formData)
    const filteredData = filterFormData(formData, listOfCategories)
    if (genresCheck.current) {
      dispatch.requestExchangeBooks.putEditedOffer(filteredData, objectId)
      handleEditable(true)
      handleSwitchEditState()
    }
  }
  const handleEditFormSubmit = handleSubmit(submit)
  const bookFormItem = <form>
                          <Box className={classes.editForm}>
                              <BookInfo data={data} 
                                        control={control} 
                                        errors={errors} /> 
                              <Categories step={3} 
                                          control={control} 
                                          data={data.categories} 
                                          setValue={setValue}
                                          checkLimit={true} 
                                          genresCheck={genresCheck} /> 
                          </Box>
                          <ButtonItem size='large' 
                                          type='solid' 
                                          onClick={handleEditFormSubmit}
                                          className={classes.btnSave}>Сохранить</ButtonItem>
                       </form>
  const bookInfoItem = <>
                <Box className={classes.header}>
                  <Box className={classes.title}>
                    {`${exchangeBook.authorName} ${exchangeBook.authorSurname} "${exchangeBook.book}"`}
                  </Box>
                  <Box></Box>
                </Box >
                <Box className={classes.content}>
                  {exchangeBook.year && 
                  <CatAndValue category='Год издания' value={exchangeBook.year}/> }
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
