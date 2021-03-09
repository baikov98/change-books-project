import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  accordionDetails: {
    display: 'block'
  },
  textGray: {
    fontSize: '12px',
    color: Colors.textGray,
    fontWeight: "bold",
    paddingBottom: '8px'
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
