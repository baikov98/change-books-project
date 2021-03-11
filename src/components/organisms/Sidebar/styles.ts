import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor:  Colors.white,
  },
  nav:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: "column",
    marginTop: 54,
    padding: '0 0 0 54px'
  },
  user:{
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo:{
    marginRight: 12,
  },
  title:{
    fontSize: 18,
    color: Colors.orange,
    fontWeight: 600,
    letterSpacing: "0.025em",
  },
  subtitle:{
    fontSize: 14,
    padding: '0 0 0 54px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  icon:{
    margin: '0 4px 0 8px'
  },


}), {index:1});
