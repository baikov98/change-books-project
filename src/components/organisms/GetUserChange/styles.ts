import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width: '700px'
  },
  wrapper:{
    background: Colors.white,
    minHeight: '100%',
    padding: 24,
  },  
  title: {
    marginBottom: '40px'
  }
}, {index: 3});
