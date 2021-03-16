import React, { useState } from "react";
import cn from "classnames";
import { useStyles } from "./styles";

import {
  Box,
  Typography,
} from "@material-ui/core";


interface IProps {
  data: any; // демонстративные данные
}

const MessagesItem: React.FC<IProps> = ({data}: IProps) => {
  const [readmore, setReadmore] = useState(true)
  const classes = useStyles(); 
  const readmoreButtonText = readmore ? 'Читать полностью' : 'Свернуть'
  const handleClick = () => {
    setReadmore(!readmore)
  };
  const opened = classes.opened
  return (
    <Box className={classes.root} >
      <Typography className={readmore ? classes.topic : opened}>{data.topic}</Typography>
      <Typography className={readmore ? classes.text : opened}>
        <Typography className={readmore ? classes.textMore : opened}>{data.text}</Typography>
        <Typography className={classes.button}
                    onClick={handleClick}
            >{readmoreButtonText}
          </Typography>
      </Typography>
      <Typography>{data.date}</Typography>
    </Box>
  );
};

export default MessagesItem;
