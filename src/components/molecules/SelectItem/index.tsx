import React, { ReactChild } from "react";
import { useStyles } from "./styles";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "@material-ui/core/Select";
import { Controller, Control } from "react-hook-form";
import { Box, Typography } from "@material-ui/core";

export interface IProps {
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  error?: string;
  name: string;
  control: Control;
  defaultValue?: string;
  children: ReactChild[];
}

const SelectItem = (props: IProps) => {
  const {
    name,
    label,
    control,
    defaultValue,
    children,
    error,
    placeholder,
  } = props;

  const classes = useStyles(props);
  return (
    <Box className={classes.inputBox}>
      {label && <Typography className={classes.inputLabel}>{label}</Typography>}

      <FormControl className={classes.formControl}>
        <Controller
          as={
            <Select
              disableUnderline
              IconComponent={ExpandMoreIcon}
              displayEmpty
              className={classes.selectEmpty}
              placeholder={placeholder}
              classes={{
                root: classes.input,
                icon: classes.icon,
                iconOpen: classes.iconOpen,
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
                classes: { paper: classes.paper },
              }}
            >
              {children}
            </Select>
          }
          name={name}
          control={control}
          defaultValue={defaultValue}
        />
      </FormControl>
      {error && (
        <Typography className={classes.error}>{`* ${error}`}</Typography>
      )}
    </Box>
  );
};
export default SelectItem;
