import React from "react";
import { Box } from "@material-ui/core";
import cn from "classnames";
import { useStyles } from "./styles";

interface IProps {
  category: string;
  value: string;
  valueBold?: boolean;
  onClick?: (e?: React.MouseEvent<HTMLElement>) => void;
}

const CatAndValue: React.FC<IProps> = ({ category, value, valueBold, onClick }) => {
  const classes = useStyles();
  const pointer = onClick ? classes.pointer : ''
  const classValue = valueBold ? classes.valueBold : classes.value
  const classText = cn(classValue, pointer)
  return (
    <Box className={classes.categoryBox}>
      <Box className={classes.category}>{category}</Box>
      <Box className={classText}
           onClick={onClick}
        >{value}
      </Box>
    </Box>
  );
};

export default CatAndValue;
