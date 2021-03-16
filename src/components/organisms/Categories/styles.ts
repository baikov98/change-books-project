import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  accordionDetails: {
    display: 'block'
  },
  expandIcon: { 
    '&.Mui-expanded': {
    transform: 'rotate(90deg)',
    },
    '& > .MuiTouchRipple-root': {
    display: 'none'
    }
  },
  textGray: {
    fontSize: '12px',
    color: Colors.textGray,
    fontWeight: "bold",
    paddingBottom: '8px'
  },
  checkBoxRemover: {
    fontSize: '12px',
    color: Colors.textGray,
    fontWeight: "bold",
    cursor: 'pointer'
  },
  textBox: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  accordion: {
    backgroundColor: Colors.lightGray,
    marginBottom: '4px',
    boxShadow: 'none',
  },
  accordionTitle: {
    fontWeight: 'bold'
  },
  accordionCheckbox: {
    textTransform: "lowercase"
  }
}, 
);
