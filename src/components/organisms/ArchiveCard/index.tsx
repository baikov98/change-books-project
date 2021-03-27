import React from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBookInfo } from "../../../store/selectors";

import Crumbs from "../../molecules/Crumbs";
import BookList from "../../molecules/BookList";
import ExchangeStatus from "../../molecules/ExchangeStatus";

const ArchiveCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const data = useSelector(getBookInfo);

  const crumbs = [
    {
      value: "Архив",
      link: location.pathname.split("/").splice(0, 3).join("/"),
    },
    { value: "Карточка обмена", link: location.pathname },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        {!data.length && (
          <Typography className={classes.noDataText}>
            У вас нет архивных обменов
          </Typography>
        )}

        {!!data.length &&
          data.map((item: any, index) =>
            index === 0 ? (
              <>
                <Box
                  className={classes.contentLine}
                  key={`contentLine-${index} - ${item?.id}`}
                >
                  <Box className={classes.book}>
                    <BookList
                      data={item?.info?.lines}
                      title={item?.info?.title}
                    />
                  </Box>
                  <Box className={classes.book}>
                    <BookList data={item?.info?.user} title={"От кого:"} />
                  </Box>
                  <Box className={classes.book}>
                    <BookList
                      data={item?.book?.lines}
                      title={"Меняюсь"}
                      icon={true}
                    />
                  </Box>
                </Box>
                <Box>
                  <ExchangeStatus text={"Завершён"} id={'1'} />
                </Box>
              </>
            ) : null
          )}
      </Box>
    </Box>
  );
};

export default ArchiveCard;
