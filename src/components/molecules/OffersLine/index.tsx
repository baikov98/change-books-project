import React from "react";
import cn from "classnames";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { IOfferExchangeData } from '../../../store/models/offersExchange'
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
  data: IOfferExchangeData[];
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
  const history = useHistory();
  const classBox = cn(classes.offersBox, className);

  const handleClick = (offerMyId: string, wishMyId: string, offerTheirId: string, wishTheirId: string) => {
    dispatch.offersExchange.makeOffer({offerMyId, wishMyId, offerTheirId, wishTheirId})
    history.push('/userChange/active')
  };

  return (
    <Box className={classBox}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {!!data.length &&
        data.map((item, index) => {
          return (
          <Accordion
            className={classes.accordion}
            key={`accordion-${index}-${new Date()}`}
          >
            <AccordionSummary
              expandIcon={<KeyboardArrowRightIcon />}
              className={classes.accordionSummary}
              classes={{
                expandIcon: classes.expandIcon,
              }}
            >
              <Box className={classes.wrapperAccordionSummary}>
                
                  <Typography className={classes.accordionBook}>
                    {`Книга №${item?.offerTheirId}`}
                  </Typography>
                  <Typography className={classes.accordionTitle}>
                    {item?.user[1].value}
                  </Typography>
                  <Typography className={classes.accordionIcon}>
                    {item?.user[2].value}
                  </Typography>
                  <Typography className={classes.accordionBookDetails}>
                    {`${item?.authorName} ${item?.authorSurname} "${item?.book}"`}
                  </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails className={classes.accordionDetails}>
              <BookList data={item?.categories} />
              <BookList data={item?.user} />
              <ButtonItem
                btnClassName={classes.btn}
                btnType="button"
                type="border"
                size="small"
                onClick={() => handleClick(item?.offerMyId, item?.wishMyId, item?.offerTheirId, item?.wishTheirId)}
              >
                Меняюсь
              </ButtonItem>
            </AccordionDetails>
          </Accordion>
          )
        }
        )}
    </Box>
  );
};

export default OffersLine;
