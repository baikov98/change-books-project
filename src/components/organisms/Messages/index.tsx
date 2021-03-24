import React from "react";
import { useSelector } from "react-redux";
import { getMessages } from "../../../store/selectors";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import MessagesItem from "../../molecules/MessagesItem";

const Messages: React.FC = () => {
  const classes = useStyles();
  const messagesList = useSelector(getMessages);

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography className={classes.title}>Сообщения</Typography>
        {!messagesList.length && (
          <Typography className={classes.noDataText}>
            У вас нет сообщений
          </Typography>
        )}
        {!!messagesList.length && (
          <Box className={classes.messagesWrapper}>
            <Box className={classes.listHeader}>
              <Typography className={classes.headerItem}>Тема</Typography>
              <Typography className={classes.headerItem}>Обращение</Typography>
              <Typography className={classes.headerItem}>Дата</Typography>
            </Box>
            {messagesList.map((item) => (
              <MessagesItem data={item} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Messages;
