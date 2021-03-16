import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow: 'auto',
    width: '100%',
    padding: '60px 20px 10px 20px',
    boxSizing: 'border-box',
    minHeight: '100%',
  },
  title:{
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle:{
    color: Colors.textGray,
    marginBottom: 16,
    marginTop: 24,
  },
  form:{
    marginTop: 12,
  },
  inputRow:{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: 18,
  },
  inputRowThree:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: 18,
  },
  textRow:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 18,
  },
  btn:{
    marginTop:32,
    minWidth: 260,
    fontWeight: 700,
  },
  
}, {index: 3});
