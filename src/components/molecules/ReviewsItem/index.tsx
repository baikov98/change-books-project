import React, { useState } from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

interface IUser {
  first_name: string,
  last_name: string,
  second_name: string,
  email: string,
  username: string,
}

interface IReview {
  id: number;
  user: IUser;
  created_at: Date;
  response: string;
}

interface IProps{
  data: IReview,
}

const ReviewsItem: React.FC<IProps> = ({data}: IProps) => {
  const { id, user, created_at, response } = data
  const [readmore, setReadmore] = useState(true);
  const classes = useStyles();
  const readmoreButtonText = readmore ? "Читать полностью" : "Свернуть";
  const opened = classes.opened;
  const handleClick = () => {
    setReadmore(!readmore);
  };
  return (
    <Box className={classes.root}>
      <Typography className={readmore ? classes.topic : opened}>
        {user?.username || 'UserName'}
      </Typography>
      <Typography>{ new Date(created_at).toLocaleDateString() || new Date().toLocaleDateString()}</Typography>
      <Box className={readmore ? classes.text : opened}>
        <Typography className={readmore ? classes.textMore : opened}>
          {response || "Текст отзыва"}
        </Typography>
        {response?.length > 50 && (
          <Typography className={classes.button} onClick={handleClick}>
            {readmoreButtonText}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ReviewsItem;
