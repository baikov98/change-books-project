import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%"
  },
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
  btnBox:{
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop:24,
  },
  btn:{},

}, {index: 3});
