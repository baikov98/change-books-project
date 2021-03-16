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
  title: {
    marginBottom: '40px',
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle:{
    color: Colors.textGray,
    marginBottom: 16,
    marginTop: 24,
  },
  link:{
    textDecoration: 'none',
    color:Colors.blue,
    '&:hover': {
      textDecoration: 'underline',
    },
    cursor: 'pointer',
  },
}, {index: 3});
