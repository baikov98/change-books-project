import React from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import { VALIDATION } from "../../../../../constants";
import { Box} from "@material-ui/core";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";
import FormButtons from '../../FormButtons'
import { ITabsData } from '../../index' 
import BookInfo from '../../../BookInfo'
import Categories from '../../../Categories' 
import { getBookInput } from '../../../../../store/selectors'
interface IProps {
  tabsData: ITabsData;
}

const Step1: React.FC<IProps> = ({ tabsData }) => {
  const { step, storeData, submit } = tabsData
  const classes = useStyles();

  const {
    setValue,
    handleSubmit,
    control,
    errors,
  } = useForm({
    resolver: yupResolver(VALIDATION.BOOK_INFO)
  });
  const bookInput = useSelector(getBookInput)
  const handleNextButtonClick = handleSubmit(submit) 
  const formButtons = <FormButtons step={step} 
                                   handleNextButtonClick={handleNextButtonClick} />
  return (
    <Box className={classes.wrapper}>
    <form>
    <Box className={classes.content}>
        <BookInfo data={storeData} control={control} errors={errors} />
        <Categories step={step} control={control} data={storeData} setValue={setValue} />
    </Box>
    <FormButtons step={step} handleNextButtonClick={handleNextButtonClick} />
    </form>
  </Box>


  );
};
//
export default Step1;
