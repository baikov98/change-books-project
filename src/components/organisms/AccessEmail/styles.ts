import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%",
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title:{
    fontWeight: 600,
    fontSize: 40,
    lineHeight: '46px',
    letterSpacing: '0.025em',
    color: Colors.grape,
    textAlign: 'center',
    marginTop: 150,
  }, 
  btn:{
    marginTop: 40,
  },

}, {index: 3});
