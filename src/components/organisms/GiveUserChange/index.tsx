import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRequestData } from '../../../store/selectors'
import { getBookCategories } from '../../../store/selectors'

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForExchange from '../BookForExchange'
import TitleItem from '../../atoms/TitleItem'
import { IStoreData } from '../StartChange'

interface IReaquestData {
  [key: string]:  string | boolean | number | IStoreData
}

const GiveUserChange: React.FC = () => {
  const classes = useStyles();
  const requestData: IReaquestData = useSelector(getRequestData)
  const bookCategories = useSelector(getBookCategories)
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Box className={classes.title}>
          <TitleItem>Хочу отдать</TitleItem>
        </Box>
        {Object.keys(requestData).map((item, index) => (
          <BookForExchange key={'item'+index}
                           data={requestData[item] as IStoreData}
                           objectKey={item}
                           bookCategories={bookCategories} />
        ))
        }
      </Box>
    </Box>
  );
};

export default GiveUserChange;
