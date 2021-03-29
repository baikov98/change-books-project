import React, { useState, useRef } from "react";
import { useStyles } from "./styles";
import { useSelector, useDispatch } from 'react-redux'
import { getBookCategories } from '../../../store/selectors'
import { IWishBookData } from '../../../store/models/requestWishBooks'
import { useForm } from 'react-hook-form';
import { Box,  Typography } from "@material-ui/core";
import filterFormData from "../../../utils/filterFormData"; 
import genresChecker from "../../../utils/genresChecker";
import { IData } from "../../../utils/filterFormData"; 
import { IBookInfoFields } from '../../../store/models/bookCategories'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'
import Categories from '../Categories'
import ButtonItem from '../../atoms/ButtonItem'

interface IProps {
  data: IWishBookData; 
  objectKey: string;
  bookCategories: IBookInfoFields[];
  bookNum: number;
  editable: boolean;
  handleEditable: (value: boolean) => void
}

const BookForWish: React.FC<IProps> = ({ 
  data, 
  bookNum, 
  objectKey, 
  editable, 
  handleEditable 
}) => {
  const [editState, setEditState] = useState(false)
  const genresCheck = useRef(true)
  const dispatch = useDispatch()
  const listOfCategories = useSelector(getBookCategories)
  const handleSwitchEditState = () => {
      setEditState(!editState)
  }
  const handleEditButtonClick = () => {
    if (editable) {
      setEditState(!editState)
      handleEditable(false)
    }
  }
  const classes = useStyles();
  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({});
  const bookDetailsArray = 
    data?.categories.map((item: any) => {
      return <CatAndValue key={item.category}
                   category={item?.category} 
                   value={item?.value}
                   /> 
    })
       
  const submit = (formData: IData) => {
    genresCheck.current = genresChecker(formData)
    const filteredData = filterFormData(formData, listOfCategories)
    if (genresCheck.current) {
      handleEditable(true)
      handleSwitchEditState()
    }
  }
  const handleEditFormSubmit = handleSubmit(submit)
  const bookFormItem = <form>
                            <Box>
                              <Categories step={3} 
                                          control={control} 
                                          data={data.categories} 
                                          setValue={setValue}
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
                    {`Книга ${bookNum+1}`}
                  </Box>
                  <Box></Box>
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
