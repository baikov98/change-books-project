import React from "react";
import Crumbs from "../../molecules/Crumbs";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getBookInfo } from "../../../store/selectors";
import OffersLine from "../../molecules/OffersLine";

const OfferUserChange: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
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
            <OffersLine data={data} title={"Частичное совпадение"} />
            <OffersLine data={data} title={"Другие интересные предложения"} />
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default OfferUserChange;
