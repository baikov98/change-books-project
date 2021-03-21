import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestWishBooks } from "../../../store/selectors";
import { getBookCategories } from "../../../store/selectors";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForWish from "../BookForWish";
import TitleItem from "../../atoms/TitleItem";

interface ICategoryListItem {
  category: string;
  value: string[][];
}

interface IBookListItem {
  [key: string]: {
    categoryList: ICategoryListItem[];
  };
}

const GetUserChange: React.FC = () => {
  const classes = useStyles();
  const [editable, setEditable] = useState(true)
  const dispatch = useDispatch()
  const resp = dispatch.requestWishBooks.requestWishList()
  const handleEditable = (value: boolean) => setEditable(value)
  const requestData: IBookListItem = useSelector(requestWishBooks);
  const bookCategories = useSelector(getBookCategories);
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Хочу получить</Typography>
        {Object.keys(requestData).map((item, index) => (
          <BookForWish
            key={"item" + index}
            bookNum={index}
            data={requestData[item]}
            objectKey={item}
            bookCategories={bookCategories}
            editable={editable}
            handleEditable={handleEditable}
          />
        ))}
      </Box>
    </Box>
  );
};

export default GetUserChange;
