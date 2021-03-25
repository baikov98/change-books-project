import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRequestExchangeBooks } from "../../../store/selectors";
import { getBookCategories } from "../../../store/selectors";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForExchange from "../BookForExchange";

const GiveUserChange: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch.requestExchangeBooks.requestOfferList()
  }, [])
  const [editable, setEditable] = useState(true)
  const handleEditable = (value: boolean) => setEditable(value)
  const requestData = useSelector(getRequestExchangeBooks);
  const bookCategories = useSelector(getBookCategories);
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Хочу обменять</Typography>
        {requestData?.map((item, index) => (
          <BookForExchange
            key={"item" + index}
            data={item}
            objectId={item?.id || ''}
            bookCategories={bookCategories} 
            editable={editable}
            handleEditable={handleEditable}
          />
        )) || <Typography>Не найдено</Typography>}
      </Box>
    </Box>
  );
};

export default GiveUserChange;
