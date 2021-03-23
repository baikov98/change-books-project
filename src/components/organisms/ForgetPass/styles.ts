import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow: 'auto',
    width: '100%'
  },
  wrapper:{
    background: Colors.white,
    minHeight: 500,
    padding: 24,
  },
  title:{
    fontSize: 18,
    color: Colors.text,
    fontWeight: 700,
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
  input:{
    border: '1px solid #eee',
    padding: '8px 16px',
    outline: 'none',
  },
  textRow:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 18,
  },

  btn:{
    marginTop:32,
    padding: '12px 60px',
    fontWeight: 700,
  },
  error:{
    color: Colors.red,
    fontSize: 12,
    fontWeight: 500,
    marginLeft: 8,
  },
  
}, {index: 3});
