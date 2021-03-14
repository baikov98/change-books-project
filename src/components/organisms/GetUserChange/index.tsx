import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { requestWishBooks } from '../../../store/selectors'
import { getBookCategories } from '../../../store/selectors'

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForWish from '../BookForWish'
import TitleItem from '../../atoms/TitleItem'
import { IStoreData } from '../StartChange'

interface IReaquestData {
  [key: string]:  string | boolean | number | IStoreData
}

const GetUserChange: React.FC = () => {
  const classes = useStyles();
  const requestData: IReaquestData = useSelector(requestWishBooks)
  const bookCategories = useSelector(getBookCategories)
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.title}>
          <TitleItem>Хочу получить</TitleItem>
        </Box>
        {Object.keys(requestData).map((item, index) => (
          <BookForWish  key={'item'+index}
                        bookNum={index}
                        data={requestData[item] as IStoreData}
                        objectKey={item}
                        bookCategories={bookCategories} />
        ))
        }
      </Box>
    </Box>
  );
};

export default GetUserChange;
