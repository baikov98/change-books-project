import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({

  accordion: {
    display: 'block',
    backgroundColor: Colors.lightGray,
    boxShadow: 'none',
    marginTop: 4,
    '&:before': {
    display: 'none !important',
    },
    '&.Mui-expanded': {
        margin: '0 !important',
        marginTop: '4 !important',
    },
  },
  accordionSummary:{
    "&.MuiAccordionSummary-root": {
        transition: "none !important",
        boxShadow: "0 0 0 !important",
        minHeight: '40px !important',
        "&:last-child": {
          borderBottomRightRadius: '0 !important',
          borderBottomLeftRadius: '0 !important',
        },
        "&:first-child": {
          borderTopRightRadius: '0 !important',
          borderTopLeftRadius: '0 !important',
        },
        '& > .MuiTouchRipple-root':{
          transition: "none !important",
          minHeight: '40 !important',
          boxShadow: "0 0 0 !important",
          '&:focus':{
            transition: "none !important",
            boxShadow: "0 0 0 !important",
          },
        }, 
    },
    '& > .MuiAccordionSummary-content': {
        margin: '0 !important',
    },
},
  accordionDetails: {
    display: 'block !important',
    backgroundColor: Colors.white,
  },
  expandIcon: { 
    '&.Mui-expanded': {
    transform: 'rotate(90deg) !important',
    },
    '& > .MuiTouchRipple-root': {
    display: 'none !important' 
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
