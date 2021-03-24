import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflowX:"auto",
    width:"100%"
  },
  wrapper:{
    background: Colors.white,
    minHeight: '100%',
    padding: '10px 20px',
    width: '100%',
  },
  content:{
    marginTop: 40,
    width: '100%',
  },
  noDataText:{
    marginTop: 12,
  },

}, {index: 3});
