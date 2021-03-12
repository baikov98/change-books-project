import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoFlow: 'rows'
  },
  title: {
    fontWeight: 700
  }
}, 
);
