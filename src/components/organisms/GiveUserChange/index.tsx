import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getRequestData } from '../../../store/selectors'
import { getBookCategories } from '../../../store/selectors'

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForExchange from '../BookForExchange'
import TitleItem from '../../atoms/TitleItem'

const GiveUserChange: React.FC = () => {
  const classes = useStyles();
  const requestData = useSelector(getRequestData)
  const bookCategories = useSelector(getBookCategories)
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <TitleItem>Хочу отдать</TitleItem>
        {requestData.map((item, index) => (
          <BookForExchange key={'item'+index}
                           data={item} 
                           bookCategories={bookCategories} 
                           onClick={() => null} />
        ))}
      </Box>
    </Box>
  );
};

export default GiveUserChange;
