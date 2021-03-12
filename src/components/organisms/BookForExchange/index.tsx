import React from "react";
import { useStyles } from "./styles";
import { Box,  Typography } from "@material-ui/core";

import { IBookInfoFields } from '../../../store/models/bookCategories'
import CatAndValue from '../../atoms/CatAndValue'
import EditButton from '../../atoms/EditButton'

interface IProps {
  data: {
    [key: string]: string
  };
  bookCategories: IBookInfoFields[];
  onClick: () => void;
}

const Categories: React.FC<IProps> = ({ data, bookCategories, onClick }) => {
  const classes = useStyles();
  const result = bookCategories.map((i) => i.opts.map((item) => {
    if (data.hasOwnProperty(item[1])) { 
      return <CatAndValue key={item[0]}
                          category={i.title[0]} 
                          value={item[0]}
                           /> 
    }
  }))
  return (
    <Box>
      <Box className={classes.header}>
        <Box className={classes.title}>{`${data.author} "${data.book}"`}</Box>
        <EditButton onClick={onClick} />
      </Box >
      <Box className={classes.content}>
        {data.year ? <CatAndValue category='Год издания' value={data.year}/> : ''}
        {data.isbn ? <CatAndValue category='ISBN' value={data.isbn}/> : ''}
        {result}
      </Box>
    </Box>
  );
};

export default Categories;
