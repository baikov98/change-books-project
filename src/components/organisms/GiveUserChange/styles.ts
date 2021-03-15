import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width: '100%',
  },
  wrapper:{
    background: Colors.white,
    minHeight: '100%',
    padding: '24px 0px 24px 24px',
  },  
  title: {
    marginBottom: '40px'
  }
}, {index: 3});
