import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    color: Colors.text,
    overflow:"auto",
    width:"100%",
    padding: 24,
    boxSizing: 'border-box',
  },
  wrapper:{
    marginTop: 80,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  textBlock:{
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'flex-start',
    flex: '0 1 60%',
  }, 
  title:{
    fontWeight: 900,
    fontSize: 40,
    lineHeight: '46px',
    letterSpacing: '0.025em',
    color: Colors.grape,
    marginBottom: 40,
  }, 
  subtitle:{
    marginBottom: 16,
    padding: '0 16px 0 0', 
    '&:last-child':{
      marginBottom: 0,
    }
  }, 
  btn:{
    marginTop: 40,
    width: 280,
  },
  imageBlock:{
    flex: '0 1 40%',
  },
  image:{
    maxWidth: '100%',
  },
  bold: {
    fontWeight: 700
  },
  numContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridColumnGap: 80,
    marginTop: 100
  },
  containerItem: {},
  bigNum: {
    color: Colors.orange,
    fontWeight: 700,
    fontSize: 40,
    textAlign: 'center'
  },
  numText: {
    textAlign: 'center',
  }
}, {index: 3});
