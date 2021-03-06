import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%",
    padding: "0px"
  },
  form: {
    
  },
  btnBox:{
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop:24,
  },
  btn:{
    width: "280px",
    
  },
  

}, {index: 3});
