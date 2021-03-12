import React from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";
import CatAndValue from "../../atoms/CatAndValue";

interface IData {
  category: string;
  value: string;
}
interface IProps {
  data: IData[];
  title?: string;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const BookList: React.FC<IProps> = ({
  data,
  className,
  onClick,
  title = "",
}: IProps) => {
  const classes = useStyles();

  const classBox = cn(classes.offersBox, className);

  return (
    <Box className={classBox} onClick={onClick}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {!!data.length &&
        data.map((item: IData, index: number) => (
          <CatAndValue
            key={`book-list-${index}`}
            className={classes.line}
            category={item?.category}
            value={item?.value}
          />
        ))}
    </Box>
  );
};

export default BookList;
