import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow: 'auto',
    width: '100%',
    padding: 24,
    boxSizing: 'border-box',
  },
  title:{
    fontSize: 18,
    color: Colors.text,
    fontWeight: 700,
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
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: 18,
    marginBottom: 32,
  },
  textRow:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 18,
  },
  socialBox:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btn:{
    marginTop:32,
    padding: '12px 60px',
    fontWeight: 700,
  },
  
}, {index: 3});
