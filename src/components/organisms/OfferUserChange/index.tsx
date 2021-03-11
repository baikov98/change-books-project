import React from "react";
import Crumbs from "../../molecules/Crumbs";
import OffersLine from "../../molecules/OffersLine";

import { useStyles } from "./styles";
import { Box } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getFullOffersExchange } from "../../../store/selectors";
import { getPartOffersExchange } from "../../../store/selectors";
import { getOtherOffersExchange } from "../../../store/selectors";

const OfferUserChange: React.FC = () => {
  const classes = useStyles();
  const location = useLocation();
  const fullOffers = useSelector(getFullOffersExchange);
  const partOffers = useSelector(getPartOffersExchange);
  const otherOffers = useSelector(getOtherOffersExchange);

  const crumbs = [{ value: "Предложение для обмена", link: location.pathname }];

  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Crumbs data={crumbs} />
        <Box className={classes.content}>
          <OffersLine data={fullOffers} title={"Полное совпадение"} />
          <OffersLine data={partOffers} title={"Частичное совпадение"} />
          <OffersLine
            className={classes.last}
            data={otherOffers}
            title={"Другие интересные предложения"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default OfferUserChange;
