import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    title:{
        fontSize: 14,
        fontWeight: 500,
        color: Colors.darkGray,
        marginBottom: 8,
    },
    offersBox:{
        marginTop: 30,
        width: '100%',
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
    wrapperAccordionSummary:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    mainInfo:{
        display:'flex',
        justifyContent: 'space-between',
    },
    accordionDetails: {
        backgroundColor: Colors.white,
        display: 'grid',
        gridTemplateColumns: 'minmax(180px, 1fr) minmax(180px, 1fr)',
        justifyContent: 'start'
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
    accordionTitle: {
        fontWeight: 500,
        fontSize: 14,
        marginRight: 40,
        '&:last-child':{
        marginRight: 0,
        }
    },
    expandIcon: { 
        '&.Mui-expanded': {
        transform: 'rotate(90deg)',
        },
        '& > .MuiTouchRipple-root': {
        display: 'none'
        }
    },
    btn:{
        marginTop: 24,
        width: '60%',
    },
}, {index: 2});
