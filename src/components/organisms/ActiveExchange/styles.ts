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
    minHeight: '100%',
    padding: '10px 20px',
  },
  titleLine:{
    marginTop: 24,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
    gridColumnGap: 12,
    width: '100%',
  },
  contentLine:{
    marginTop: 12,
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
    gridColumnGap: 12,
    width: '100%',
    borderBottom: `1px solid ${Colors.gray}`,
    
  },
  title:{
      fontSize: 14,
      fontWeight: 500,
      color: Colors.darkGray,
  },
  crumbs:{
    color: Colors.grape,
    fontSize: 18,
    fontWeight: 500,
  },
  book:{
      marginTop: 12,
      paddingBottom: 20,
  },  
  status:{
      width: '100%',
      marginTop: 32,
  },
  link: {
    color: Colors.blue,
    cursor: 'pointer',
    marginTop: 22,
  },
  last:{
    borderBottom: 0,
  },
  }, {index: 3});
