import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import { withStyles } from '@material-ui/core/styles';

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