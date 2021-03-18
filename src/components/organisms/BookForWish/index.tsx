import React, { useState, useRef } from "react";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { useForm } from 'react-hook-form';
import { Box,  Typography } from "@material-ui/core";
import filterFormData from "../../../utils/filterFormData"; 
import { genresCheckBoxNameArray } from '../../../store/models/bookCategories'
import { IData } from "../../../utils/filterFormData"; 
import { IBookInfoFields } from '../../../store/models/bookCategories'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'
import Categories from '../Categories'
import ButtonItem from '../../atoms/ButtonItem'


interface ICategoryListItem {
  category: string;
  value: string[][]
}

interface IBookListItem {
    categoryList: ICategoryListItem[]
}

interface IProps {
  data: IBookListItem;
  objectKey: string;
  bookCategories: IBookInfoFields[];
  bookNum: number;
}

const BookForWish: React.FC<IProps> = ({ data, bookNum, objectKey, bookCategories }) => {
  const [editState, setEditState] = useState(false)
  const genresCheck = useRef(true)
  const exchangeBook = data
  const dispatch = useDispatch()
  const listOfCategories = useSelector(getBookCategories)
  const handleSwitchEditState = () => setEditState(!editState)
  
  const classes = useStyles();
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({});
  const bookDetailsArray = 
    exchangeBook.categoryList.map((item) => {
      const value = item.value.map((i) => i[0])
      return <CatAndValue key={item.category}
                   category={item.category} 
                   value={value.join(', ')}
                   /> 
    })
       
  const submit = (formData: IData) => {
    for (let key in formData) if (!formData[key]) delete formData[key]
    genresCheck.current = Object.keys(formData).some((i) => genresCheckBoxNameArray.includes(i))
    const filteredData = filterFormData(formData, listOfCategories)
    if (genresCheck.current) {
      dispatch.requestWishBooks.SET_REQUEST_DATA({[objectKey]: filteredData})
      handleSwitchEditState()
    }
  }
  const handleEditFormSubmit = handleSubmit(submit)
  const bookFormItem = <form>
                            <Box>
                              <Categories step={3} 
                                          control={control} 
                                          data={data} 
                                          setValue={setValue}
                                          genresCheck={genresCheck} />
                            </Box>
                            <ButtonItem size='large' 
                                        type='solid' 
                                        onClick={handleEditFormSubmit}>Сохранить</ButtonItem>
                       </form>
  const bookInfoItem = <>
                <Box className={classes.header}>
                  <Box className={classes.title}>
                    {`Книга ${bookNum+1}`}
                  </Box>
                  <EditButton onClick={handleSwitchEditState} />
                </Box >
                <Box className={classes.content}>
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

export default BookForWish;
