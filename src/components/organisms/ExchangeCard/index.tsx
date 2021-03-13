import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBookInfo } from "../../../store/selectors";

import Crumbs from "../../molecules/Crumbs";
import BookList from "../../molecules/BookList";
import ExchangeStatus from "../../molecules/ExchangeStatus";

const ExchangeCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = useSelector(getBookInfo);

  const crumbs = [
    {
      value: "Активные обмены",
      link: location.pathname.split("/").splice(0, 3).join("/"),
    },
    { value: "Карточка обмена", link: location.pathname },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        <Box className={classes.titleLine}>
          <Typography className={classes.title}>Хочу получить</Typography>
          <Typography className={classes.title}>Хочу отдать</Typography>
        </Box>

        {!!data.length &&
          data.map((item, index) =>
            index === 0 ? (
              <>
                <Box
                  className={classes.contentLine}
                  key={`contentLine-${index} - ${item.id}`}
                >
                  <Box>
                    <Box className={classes.book}>
                      <BookList
                        data={item?.info.lines}
                        title={item?.info.title}
                      />
                    </Box>
                    <Box className={classes.book}>
                      <BookList data={item?.info?.user} title={"От кого:"} />
                    </Box>
                  </Box>

                  <Box className={classes.book}>
                    <BookList
                      data={item?.book.lines}
                      title={item?.book.title}
                    />
                  </Box>
                </Box>

                <Box className={classes.contentLine}>
                  <ExchangeStatus id={item?.info.status} />
                  <ExchangeStatus id={item?.book.status} />
                </Box>
              </>
            ) : null
          )}
      </Box>
    </Box>
  );
};

export default ExchangeCard;
