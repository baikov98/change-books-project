import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '8px 0 8px 0'
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridAutoFlow: 'rows',
    gridRowGap: '4px',
    margin: '0 0 8px 0'
  },
  title: {
    fontWeight: 700
  },
  bottomLine: {
    backgroundColor: Colors.bg,
    height: '1px',
    width: '100%',
    margin: '8px 0 8px 0'
  }, 
  editForm: {
    display: 'block',
  },
  btnSave: {
    marginTop: 30
  }
}, 
);
