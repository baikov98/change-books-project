import React, { useState } from "react";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { Box, Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../constants";
import { IBookInfoFields } from "../../../store/models/bookCategories";
import CatAndValue from "../../atoms/CatAndValue";
import EditButton from "../../atoms/EditButton";
import BookInfo from "../BookInfo";
import Categories from "../Categories";
import ButtonItem from "../../atoms/ButtonItem";
import { IStoreData } from "../StartChange";

interface IProps {
  data: IStoreData;
  objectKey: string;
  bookCategories: IBookInfoFields[];
}

const BookForExchange: React.FC<IProps> = ({
  data,
  objectKey,
  bookCategories,
}) => {
  const [editState, setEditState] = useState(false);
  const dispatch = useDispatch();
  const handleSwitchEditState = () => {
    setEditState(!editState);
  };
  const classes = useStyles();
  const { setValue, handleSubmit, control, errors } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO),
  });
  const bookDetailsArray = bookCategories.map((i) =>
    i.opts.map((item) => {
      if (data.hasOwnProperty(item[1])) {
        return (
          <CatAndValue key={item[0]} category={i.title[0]} value={item[0]} />
        );
      }
    })
  );
  const submit = (data: IStoreData) => {
    dispatch.requestData.SET_REQUEST_DATA({ [objectKey]: data });
    handleSwitchEditState();
  };
  const handleEditFormSubmit = handleSubmit(submit);
  const bookFormItem = (
    <form>
      <Box className={classes.editForm}>
        <BookInfo data={data} control={control} errors={errors} />
        <Categories
          step={1}
          control={control}
          data={data}
          setValue={setValue}
        />
        <ButtonItem
          btnClassName={classes.btn}
          size="large"
          type="solid"
          onClick={handleEditFormSubmit}
        >
          Сохранить
        </ButtonItem>
      </Box>
    </form>
  );
  const bookInfoItem = (
    <>
      <Box className={classes.header}>
        <Box className={classes.title}>{`${data.author} "${data.book}"`}</Box>
        <EditButton onClick={handleSwitchEditState} />
      </Box>
      <Box className={classes.content}>
        {data.year && (
          <CatAndValue category="Год издания" value={data.year as string} />
        )}
        {data.isbn && (
          <CatAndValue category="ISBN" value={data.isbn as string} />
        )}
        {bookDetailsArray}
      </Box>
    </>
  );
  return (
    <Box>
      {editState ? bookFormItem : bookInfoItem}
      <Box className={classes.bottomLine}></Box>
    </Box>
  );
};

export default BookForExchange;
