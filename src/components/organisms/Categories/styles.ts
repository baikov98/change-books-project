import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  accordionDetails: {
    display: 'block',
    backgroundColor: Colors.white,
  },
  accordion: {
    backgroundColor: Colors.lightGray,
    boxShadow: 'none',
    marginTop: 4,
    '&:before': {
    display: 'none',
    },
    '&.Mui-expanded': {
        margin: 0,
        marginTop: 4,
    },
  },
  accordionSummary:{
    "&.MuiAccordionSummary-root": {
        transition: "none",
        boxShadow: "0 0 0",
        minHeight: 40,
        "&:last-child": {
          borderBottomRightRadius: 0,
          borderBottomLeftRadius: 0,
        },
        "&:first-child": {
          borderTopRightRadius: 0,
          borderTopLeftRadius: 0,
        },
        '& > .MuiTouchRipple-root':{
          transition: "none",
          minHeight: 40,
          boxShadow: "0 0 0",
          '&:focus':{
            transition: "none",
            boxShadow: "0 0 0",
          },
        }, 
    },
    '& > .MuiAccordionSummary-content': {
        margin: 0,
    },
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

  accordionTitle: {
    fontWeight: 'bold'
  },
  accordionCheckbox: {
    textTransform: "lowercase",
    marginLeft: 20,
    marginBottom: 8,
  },
  formControl: {
    display: 'block'
  }
}, 
);
