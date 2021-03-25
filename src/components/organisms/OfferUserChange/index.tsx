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
  useEffect(() => {
    dispatch.offersExchange.getOffers()
  }, [])
  const data = useSelector(getBookInfo);

  const crumbs = [{ value: "Предложение для обмена", link: location.pathname }];

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
{/* <OffersLine data={data} title={"Частичное совпадение"} />
<OffersLine data={data} title={"Другие интересные предложения"} /> */}
export default OfferUserChange;
