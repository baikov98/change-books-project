import React from "react";
import { Box } from "@material-ui/core";
import { useStyles } from "./styles";

interface IProps {
  userName: string; 
  sity: string;
  rating: number | string;
  onClick: (e?: React.MouseEvent<HTMLElement>) => void
}

const OfferItem: React.FC<IProps> = ({ userName, sity, rating, onClick }) => {
  const classes = useStyles();
  const ratingInteger = Number(rating).toFixed(1)
  return (
    <Box className={classes.offerBox}>
        <Box onClick={onClick} 
            className={classes.useName}>{userName}</Box>
        <Box className={classes.city}>{sity}</Box>
        <Box className={classes.rating}>{ratingInteger}</Box>
    </Box>
  );
};

export default OfferItem;