import React, { useEffect, useState } from "react";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActiveExchange } from "../../../store/selectors";
import { IActiveExchangeData } from '../../../store/models/activeExchange'
import Crumbs from "../../molecules/Crumbs";
import BookList from "../../molecules/BookList";
import ExchangeStatus from "../../molecules/ExchangeStatus";
import NavItem from "../../atoms/NavItem";

interface IParams {
  id: string;
}

const ExchangeCard: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch();
  const { id } = useParams<IParams>()
  const list: IActiveExchangeData[] = useSelector(getActiveExchange);
  const data = list.find((el:IActiveExchangeData) => +el.offerMyId === +id)
  useEffect(() => {dispatch.user.getUser()}, [data])
  useEffect(()=> {
    dispatch.activeExchange.getActiveList()
    let interval = setInterval(() => {
      dispatch.activeExchange.getActiveList()
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(()=> {}, [list])

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
        {data ? '' : 
          <Box className={classes.archiveLink}>
            Данный обмен завершен и перемещен в архив
            <Box>
              <NavItem link='/userChange/archive' title='Перейти в архив'/>
            </Box>
          </Box>
        }
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
                `Меняю - 
                ${data?.authorName} ${data?.authorSurname} "${data?.book}"
                `
              }
               />
            </Box>
          </Box>
          <Box> 
          <ExchangeStatus   text={data?.status_my} 
                            textTheir={data?.status_their} 
                            id={id} 
                            track_my={data?.trackMy} 
                            track_their={data?.trackTheir}
                            /> 

          </Box>
        </>
        )}
              
      </Box>
    </Box>
  );
};

export default ExchangeCard;
