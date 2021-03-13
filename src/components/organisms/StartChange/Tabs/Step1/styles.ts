import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper:{
    background: Colors.white,
    width: "1080px",
  },
  content:{
    display: 'grid',
    gridTemplateColumns: '1fr 3fr',
    gridColumnGap: "1rem",
  },
  textGray: {
    fontSize: "12px",
    color: Colors.textGray,
    fontWeight: "bold",
    paddingBottom: '16px'
  },
}, {index: 3});
