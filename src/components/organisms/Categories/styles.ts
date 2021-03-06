import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  wrapper:{
    background: Colors.white,
    minHeight: 500,
    padding: 24,
  },
  stepper: {},
  content:{
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
  },
  formBox: {},
  form: {},
  categoryBox:{
    background: Colors.bg,
  },
  accordionDetails: {
    display: 'block'
  }
  

}, {index: 3});
