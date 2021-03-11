import React from "react";
import OfferItem from "../../atoms/OfferItem";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { links } from "../../../routes";

interface IData {
  username: string;
  city: string;
  rating: string;
}
interface IProps {
  data: IData[];
  title: string;
  className?: string;
}

const OffersLine: React.FC<IProps> = ({
  data,
  className,
  title = "",
}: IProps) => {
  const classes = useStyles();
  const history = useHistory();

  const classBox = cn(classes.offersBox, className);

  const handleClick = (value: string) => {
    history.push(links.exchangeCard(value));
  };

  return (
    <Box className={classBox}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {!!data.length &&
        data.map((item, index) => (
          <OfferItem
            key={`Full-offers${index}`}
            userName={item.username}
            city={item.city}
            rating={item.rating}
            onClick={() => handleClick(item.username)}
          />
        ))}
    </Box>
  );
};

export default OffersLine;
