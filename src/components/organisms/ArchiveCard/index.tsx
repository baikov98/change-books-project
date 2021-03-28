import React, { useEffect } from "react";
import cn from "classnames";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getArchiveExchange } from "../../../store/selectors";

import Crumbs from "../../molecules/Crumbs";
import BookList from "../../molecules/BookList";
import CatAndValue from "../../atoms/CatAndValue";
import { links } from "../../../routes";
import { IActiveExchangeData } from '../../../store/models/activeExchange'
import ExchangeStatus from "../../molecules/ExchangeStatus";

interface IParams {
  id: string;
}

const ArchiveCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch()
  const { id } = useParams<IParams>()
  const list: IActiveExchangeData[] = useSelector(getArchiveExchange);
  const data = list.find((el:IActiveExchangeData) => +el.offerMyId === +id)
  
  useEffect(() => {
    dispatch.activeExchange.getArchieveList()
  }, [])

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

        {data && (
          <>
          <Box
            className={classes.contentLine}
          >
            <Box className={classes.book}>
              <BookList
                 data={data?.categories}
                 title={`Книга #${data?.offerTheirId}`}
              />
              <Box className={classes.fromWho}>
                <BookList data={data?.user} title={"От кого:"} />
              </Box>
            </Box>
            <Box className={classes.middleBox}>
              <Box className={classes.middleLine} />
              <Box className={classes.iconBack}>
                <Box className={classes.icon} />
              </Box>
            </Box>
            <Box className={classes.book}>
              <BookList data={data?.bookCategories} 
              title={
                `Обмен на - 
                ${data?.authorName} ${data?.authorSurname} "${data?.book}"
                `
              }
               />
            </Box>
          </Box>
          <Box> 
          <Typography className={classes.statusText}>Обмен завершён</Typography>

          </Box>
        </>
        )}
              
      </Box>
    </Box>
  );
};

export default ArchiveCard;
