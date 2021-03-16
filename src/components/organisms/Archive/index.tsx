import React from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getArchiveExchange } from "../../../store/selectors";
import { links } from "../../../routes";

import BookList from "../../molecules/BookList";
import CatAndValue from "../../atoms/CatAndValue";
import Crumbs from "../../molecules/Crumbs";

const Archive: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const data = useSelector(getArchiveExchange);

  const crumbs = [{ value: "Архив", link: location.pathname }];

  const handleClick = (value: number) => {
    history.push(links.archiveCard(value.toString()));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />

        {!!data.length &&
          data.map((item, index) => (
            <Box
              className={cn(
                classes.contentLine,
                index === data.length - 1 ? classes.last : ""
              )}
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
                <Box className={classes.link}
                     onClick={() => handleClick(item?.id)}>Перейти в карточку обмена</Box>
              </Box>
              <Box className={classes.book}>
                <BookList data={item?.info.user} title='От кого' />
              </Box>
              <Box className={classes.book}>
                <BookList data={item?.book.lines} 
                                title={item?.book.title} 
                                icon={true} />
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default Archive;
