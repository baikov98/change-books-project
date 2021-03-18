import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow: 'auto',
    width: '100%',
    padding: '10px 20px',
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
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 18,
  },
  textRow:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 18,
  },
  btn:{
    marginBottom:20,
    fontWeight: 700,
  },
  btnSend:{
    marginTop:20,
    fontWeight: 700,
    width: 270,
  },
  buttonWrapper:{
    display: 'flex',
    justifyContent:'space-between',
    flexDirection: 'column',
    maxWidth: 270, 
    marginTop:40, 
  },
  reviewsWrapper:{
    marginTop: 48,
  },
  listHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 6fr',
    gridColumnGap: 20,
  },
  headerItem: {
    fontWeight: 700
  },
  
}, {index: 3});
