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
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
  },
  messagesWrapper:{
    marginTop: 40,
  },
  listHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 6fr 1fr',
    gridColumnGap: 20,
  },
  headerItem: {
    fontWeight: 700
  },
  noDataText:{
    marginTop: 12,
  },
}, {index: 3});
