import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width: '100%',
  },
  wrapper:{
    background: Colors.white,
    minHeight: '100%',
    padding: '10px 20px',
  },  
  title: {
    marginBottom: '40px',
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
  },
  listHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 6fr 1fr',
    gridColumnGap: 20,
  },
  headerItem: {
    fontWeight: 700
  },
}, {index: 3});
