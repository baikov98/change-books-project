import React, { useEffect } from "react";
import Crumbs from "../../molecules/Crumbs";
import { useSelector, useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { getBookInfo } from "../../../store/selectors";
import OffersLine from "../../molecules/OffersLine";

const OfferUserChange: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const dispatch = useDispatch()
  const data = useSelector(getBookInfo);
  useEffect(() => {
    dispatch.offersExchange.getOffers()
    let timeout = setTimeout(() => {
      dispatch.offersExchange.getOffers()
    }, 1500)
    return () => clearTimeout(timeout)
  }, [])
  useEffect(() => {}, [data])
  

  const crumbs = [{ value: "Предложения для обмена", link: location.pathname }];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        {!data.length && (
          <Typography className={classes.noDataText}>
            У вас нет предложений для обмена
          </Typography>
        )}
        {!!data.length && (
          <Box className={classes.content}>
            <OffersLine data={data} title={"Полное совпадение"} />
            
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OfferUserChange;
