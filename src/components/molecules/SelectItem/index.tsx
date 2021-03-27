import React from "react";
import { useStyles } from "./styles";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Select from "@material-ui/core/Select";
import { Controller, Control } from "react-hook-form";
import { Box, MenuItem, Typography } from "@material-ui/core";

interface IData {
  id: number;
  name: string;
  last_name?: string;
}

export interface IProps {
  placeholder?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  name: string;
  control: Control;
  defaultValue?: string;
  required?: boolean;
  data: IData[];
}

const SelectItem = ({
  name,
  label,
  control,
  defaultValue,
  placeholder,
  required,
  data,
}: IProps) => {
  const classes = useStyles();
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
              required={required}
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
              <MenuItem disabled value="">
                <span className={classes.placeholder}>{placeholder}</span>
              </MenuItem>

              {!!data.length &&
                data.map((item: IData, index: number) => (
                  <MenuItem key={`${index}-${item?.id}`} value={item.id}>
                    {item?.last_name ? item?.name  + " " + item?.last_name : item?.name }
                  </MenuItem>
                ))}
            </Select>
          }
          name={name}
          control={control}
          defaultValue={defaultValue}
        />
      </FormControl>
    </Box>
  );
};
export default SelectItem;
