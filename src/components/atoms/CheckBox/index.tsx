import React from "react";
import cn from "classnames";
import { FormControlLabel, Box, Checkbox, Typography } from "@material-ui/core";

import { useStyles } from "./styles";
import { Link } from "react-router-dom";

export interface IProps {
  label?: string;
  labelLink?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox: React.FC<IProps> = ({
  checked = false,
  className,
  onChange = () => null,
  error,
  label,
  disabled,
  labelLink,
}) => {
  const classes = useStyles();

  const classBox = cn(classes.wrapper, className);

  const link = (
    <Link className={classes.link} to="/politics">
      {labelLink}
    </Link>
  );

  return (
    <Box className={classBox}>
      <FormControlLabel
        className={className}
        classes={{
          root: classes.root,
        }}
        control={
          <Checkbox
            disableRipple
            disabled={disabled}
            checkedIcon={
              <span className={cn(classes.icon, classes.checkedIcon)} />
            }
            icon={<span className={classes.icon} />}
            checked={checked}
            onChange={onChange}
            className={classes.checkbox}
          />
        }
        label={
          <Typography className={classes.label}>
            {label} {labelLink ? link : null}
          </Typography>
        }
      />
      {error && <Typography className={classes.error}>{error}</Typography>}
    </Box>
  );
};

export default CheckBox;
