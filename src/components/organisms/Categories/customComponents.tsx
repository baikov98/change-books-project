import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
import { Colors } from "../../../styles/Colors";

export const OrangeCheckbox = withStyles({
    root: {
      '&$checked': {
        color: Colors.orange,
      },
    },
    checked: {
      color: Colors.orange,
    },
  })((props: CheckboxProps) => <Checkbox color="default" {...props} />);
  
export const Accordion = withStyles({
    root: {
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
    },
    expanded: {},
  })(MuiAccordion);
  
export const AccordionSummary = withStyles({
    root: {
      marginBottom: -1,
      minHeight: 40,
      '&$expanded': {
        minHeight: 40,
      },
    },
    
    expandIcon: { 
      '&$expanded': {
        transform: 'rotate(90deg)',
        }
    },
  })(MuiAccordionSummary);