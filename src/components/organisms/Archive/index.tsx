import React, {useEffect} from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArchiveExchange } from "../../../store/selectors";
import { links } from "../../../routes";

import BookList from "../../molecules/BookList";
import CatAndValue from "../../atoms/CatAndValue";
import Crumbs from "../../molecules/Crumbs";
import { IActiveExchangeData } from '../../../store/models/activeExchange'

const Archive: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const data: IActiveExchangeData[] = useSelector(getArchiveExchange);
  const dispatch = useDispatch()
  const history = useHistory()
  
  useEffect(() => {
    dispatch.activeExchange.getArchieveList()
    dispatch.user.getUser()
  }, [])
  const crumbs = [{ value: "Архив", link: location.pathname }];
  const handleClick = (value: number | string) => {
    history.push(links.archiveCard(value.toString()));
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        {!!data.length &&
          data.map((item, index:number) => (
            <Box className={classes.contextBox}  key={`contentLine-${index} - ${item?.offerMyId}`}>
              <Box
                className={cn(
                  classes.contentLine,
                  index === data.length - 1 ? classes.last : ""
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
                    value={"Завершён"}
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

export default Archive;
