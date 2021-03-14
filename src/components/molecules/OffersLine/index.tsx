import React from "react";
import cn from "classnames";

import { useStyles } from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@material-ui/core";
import BookList from "../../molecules/BookList";
import ButtonItem from "../../atoms/ButtonItem";
import { useDispatch } from "react-redux";

interface IProps {
  data: any; //Any - демонстартивные данные, изменение после добавления backend
  title: string;
  className?: string;
}

const OffersLine: React.FC<IProps> = ({
  data,
  className,
  title = "",
}: IProps) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const classBox = cn(classes.offersBox, className);

  const handleClick = (id: number) => {
    // dispatch to ACTIVE model - после добавления backend
  };

  return (
    <Box className={classBox}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {!!data.length &&
        data.map((item: any, index: number) => (
          <Accordion className={classes.accordion} key={`accordion-${index}`}>
            <AccordionSummary
              expandIcon={<KeyboardArrowRightIcon />}
              className={classes.accordionSummary}
              classes={{
                expandIcon: classes.expandIcon,
              }}
            >
              <Box className={classes.wrapperAccordionSummary}>
                <Box className={classes.mainInfo}>
                  <Typography className={classes.accordionTitle}>
                    {item?.info?.title}
                  </Typography>
                  <Typography className={classes.accordionTitle}>
                    {item?.info?.city}
                  </Typography>
                  <Typography className={classes.accordionTitle}>
                    {item?.info?.rating}
                  </Typography>
                </Box>
                <Typography className={classes.accordionTitle}>
                  {item?.book?.title}
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <BookList data={item.info.lines} />
              <BookList data={item.info.user} />
              <ButtonItem
                btnClassName={classes.btn}
                btnType="button"
                type="border"
                size="small"
                onClick={() => handleClick(item?.id)}
              >
                Меняюсь
              </ButtonItem>
            </AccordionDetails>
          </Accordion>
        ))}
    </Box>
  );
};

export default OffersLine;
