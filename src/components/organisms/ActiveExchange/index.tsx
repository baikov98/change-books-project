import React from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getActiveExchange } from "../../../store/selectors";
import { links } from "../../../routes";

import BookList from "../../molecules/BookList";
import CatAndValue from "../../atoms/CatAndValue";
import Crumbs from "../../molecules/Crumbs";

const ActiveExchange: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const data = useSelector(getActiveExchange);

  const crumbs = [{ value: "Активные обмены", link: location.pathname }];

  const handleClick = (value: number) => {
    history.push(links.activeCard(value.toString()));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        <Box className={classes.titleLine}>
          <Typography className={classes.title}>
            Хочу получить (полное совпадение)
          </Typography>
          <Typography className={classes.title}>
            Хочу отдать (полное совпадение)
          </Typography>
        </Box>
        {!!data.length &&
          data.map((item, index) => (
            <Box
              className={cn(
                classes.contentLine,
                index === data.length - 1 ? classes.last : ""
              )}
              onClick={() => handleClick(item?.id)}
              key={`contentLine-${index} - ${item.id}`}
            >
              <Box className={classes.book}>
                <BookList data={item?.info.lines} title={item?.info.title} />

                <Box className={classes.status}>
                  <CatAndValue
                    valueBold
                    category={"Статус обмена"}
                    value={item?.status}
                  />
                </Box>
              </Box>

              <Box className={classes.book}>
                <BookList data={item?.book.lines} title={item?.book.title} />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ActiveExchange;
