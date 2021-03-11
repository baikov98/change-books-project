import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%"
  },
  inactive:{
    color: Colors.darkGray,
    fontSize: 18,  
    cursor: 'pointer',
  },
  active:{
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
    cursor: 'pointer', 
  },
}, {index: 2});
