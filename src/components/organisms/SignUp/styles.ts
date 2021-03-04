import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%"
  },
  regContainer: {
    marginTop: "1rem",
    display: "flex", 
    justifyContent: "center",
  },
  regBox: {
 
  },
  test: {
    maxWidth: "204px"
  }
 
  
}, {index: 3});
