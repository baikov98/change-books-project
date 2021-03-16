import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
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
    marginTop: 20,
  }, 

}, {index: 3});
