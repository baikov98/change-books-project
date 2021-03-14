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
import { IStoreData } from '../StartChange'

interface IProps {
  data: IStoreData;
  objectKey: string;
  bookCategories: IBookInfoFields[];
  bookNum: number;
}

const BookForWish: React.FC<IProps> = ({ data, bookNum, objectKey, bookCategories }) => {
  const [editState, setEditState] = useState(false)
  const exchangeBook: any = data
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
    exchangeBook.categoryList.map((item: any) => {
      const value = item.value.map((i: any) => i[0])
      return <CatAndValue key={item.category}
                   category={item.category} 
                   value={value.join(', ')}
                   /> 
    })
       
  const submit = (formData: IStoreData) => {
    const filteredData = filterFormData(formData, listOfCategories)
    dispatch.requestWishBooks.SET_REQUEST_DATA({[objectKey]: filteredData})
    handleSwitchEditState()
  }
  const handleEditFormSubmit = handleSubmit(submit)
  const bookFormItem = <form>
                        <Box className={classes.editForm}>
                            <Categories step={3} 
                                        control={control} 
                                        data={data} 
                                        setValue={setValue} />
                            <ButtonItem size='large' 
                                        type='solid' 
                                        onClick={handleEditFormSubmit}>Сохранить</ButtonItem>
                        </Box>
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
