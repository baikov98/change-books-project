import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestWishBooks } from "../../../store/selectors";
import { getBookCategories } from "../../../store/selectors";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForWish from "../BookForWish";

const GetUserChange: React.FC = () => {
  const classes = useStyles();
  const [editable, setEditable] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch.requestWishBooks.requestWishList()
  }, [])
  const handleEditable = (value: boolean) => setEditable(value)
  const requestData = useSelector(requestWishBooks);
  const bookCategories = useSelector(getBookCategories);
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Хочу получить</Typography>
        {requestData?.map((item, index) => (
          <BookForWish
            key={"item" + index}
            bookNum={index}
            data={item}
            objectKey={item.id || ''}
            bookCategories={bookCategories}
            editable={editable}
            handleEditable={handleEditable}
          />
        )) || <Typography>Не найдено</Typography>}
      </Box>
    </Box>
  );
};

export default GetUserChange;
