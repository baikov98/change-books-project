import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Box, Dialog, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import ButtonItem from "../../atoms/ButtonItem";

interface IProps {
  title?: string;
  value: string;
  open: boolean;
  onClose: () => void;
  onClick?: (event?: React.MouseEvent<HTMLElement>) => void;
}

const DialogItem: React.FC<IProps> = ({
  title,
  value = "",
  onClose,
  open = false,
  onClick,
}) => {
  const classes = useStyles();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      classes={{ paper: classes.root }}
      BackdropProps={{
        classes: {
          root: classes.backDrops,
        },
      }}
    >
      <Box className={classes.paper}>
        <Box className={classes.close}>
          <CloseIcon className={classes.closeIcon} onClick={onClose} />
        </Box>
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.text}>{value}</Typography>
        <ButtonItem
          size="large"
          type="border"
          onClick={onClick}
          btnClassName={classes.btn}
        >
          Закрыть
        </ButtonItem>
      </Box>
    </Dialog>
  );
};

export default DialogItem;
