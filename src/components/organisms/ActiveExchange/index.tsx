import React, { useEffect } from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getActiveExchange } from "../../../store/selectors";
import { links } from "../../../routes";
import { IActiveExchangeData } from '../../../store/models/activeExchange'
import BookList from "../../molecules/BookList";
import CatAndValue from "../../atoms/CatAndValue";
import Crumbs from "../../molecules/Crumbs";

const ActiveExchange: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const data: IActiveExchangeData[] = useSelector(getActiveExchange);
  const NewToOldData = data.reverse()
  const dispatch = useDispatch()
  useEffect(() => {dispatch.user.getUser()}, [data])
  useEffect(() => {
    dispatch.activeExchange.getActiveList()
    let interval = setInterval(() => {
      dispatch.activeExchange.getActiveList()
    }, 1500)
    return () => clearInterval(interval)
  }, [])
  const crumbs = [{ value: "Активные обмены", link: location.pathname }];

  const handleClick = (value: number | string) => {
    history.push(links.activeCard(value.toString()));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        {!!NewToOldData.length &&
          NewToOldData.map((item, index) => (
            <Box className={classes.contextBox}  key={`contentLine-${index} - ${item?.offerMyId}`}>
              <Box
                className={cn(
                  classes.contentLine,
                  index === NewToOldData.length - 1 ? classes.last : ""
                )}
              >
                <Box className={classes.book}>
                  <BookList
                    data={item?.categories}
                    title={`Книга #${item?.offerTheirId}`}
                  />
                </Box>
                <Box className={classes.book}>
                  <BookList
                    data={item?.user}
                    title={`${item?.authorName} ${item?.authorSurname} "${item?.book}"`}
                    icon={true}
                  />
                </Box>
              </Box>
              <Box className={classes.statusBox}>
                <Box className={classes.status}>
                  <CatAndValue
                    valueBold
                    category={"Статус обмена"}
                    value={item?.status_my}
                  />
                </Box>
                <Box
                  className={classes.link}
                  onClick={() => handleClick(item?.offerMyId)}
                >
                  Перейти в карточку обмена
                </Box>
              </Box>
            </Box>
          ))}
      </Box>
    </Box>
  );
};

export default ActiveExchange;
