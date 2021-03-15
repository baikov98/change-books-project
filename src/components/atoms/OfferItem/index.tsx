import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  userName: string;
  city: string;
  rating: number | string;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

const OfferItem: React.FC<IProps> = ({ userName, city, rating, onClick }) => {
  const classes = useStyles();
  const ratingInteger = Number(rating).toFixed(1);
  return (
    <Box className={classes.offerBox}>
      <Box onClick={onClick} className={classes.useName}>
        {userName}
      </Box>
      <Box className={classes.city}>{city}</Box>
      <Box className={classes.rating}>{ratingInteger}</Box>
    </Box>
  );
};

export default OfferItem;
