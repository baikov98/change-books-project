import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../../styles/Colors";

export const useStyles = makeStyles({
  wrapper:{
    background: Colors.white,
    minHeight: 500,
    padding: 24,
  },

  content:{
    display: 'grid',
    gridTemplateColumns: '1fr 3fr'
  },
  inputRow:{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: 18,
    marginBottom: 32,
  },

}, );
