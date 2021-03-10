import React from "react";
import { useStyles } from "./styles";
import { Box, Typography } from "@material-ui/core";

import CatAndValue from '../../atoms/CatAndValue'
import OfferItem from '../../atoms/OfferItem'
import EditButton from '../../atoms/EditButton'
import TitleItem from '../../atoms/TitleItem'

interface IProps {}

const UserChange: React.FC<IProps> = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
      <Box className={classes.wrapper}>
        <Typography>Бланк обмена</Typography>
        <CatAndValue category='Жанр' value='Детские книги, Фантастика' valueBold={true} /> 
        <CatAndValue category='Жанр' value='Детские книги, Фантастика' valueBold={true} /> 

        <OfferItem userName='Резкий дерзкий' sity='Краснодар' rating={4.5656} onClick={() => null} />

        <EditButton onClick={() => console.log(11)} />

        <TitleItem text={'Паывавпап'} gray={true} />

      </Box>
    </Box>
  );
};

export default UserChange;
