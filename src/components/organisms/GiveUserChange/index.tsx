import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRequestExchangeBooks } from "../../../store/selectors";
import { getBookCategories } from "../../../store/selectors";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import BookForExchange from "../BookForExchange";
import TitleItem from "../../atoms/TitleItem";
import { IStoreData } from "../StartChange";

interface ICategoryListItem {
  category: string;
  value: string[][];
}

interface IBookListItem {
  [key: string]: {
    authorName: string;
    authorSurname: string;
    book: string;
    year?: string;
    isbn?: string;
    categoryList: ICategoryListItem[];
  };
}

const GiveUserChange: React.FC = () => {
  const classes = useStyles();
  const requestData: IBookListItem = useSelector(getRequestExchangeBooks);
  const bookCategories = useSelector(getBookCategories);
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Хочу отдать</Typography>
        {Object.keys(requestData).map((item, index) => (
          <BookForExchange
            key={"item" + index}
            data={requestData[item]}
            objectKey={item}
            bookCategories={bookCategories} 
          />
        ))}
      </Box>
    </Box>
  );
};

export default GiveUserChange;
