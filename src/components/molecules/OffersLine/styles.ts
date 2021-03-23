import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";
import star from "../../../assets/svg/star.svg";
import exchange from "../../../assets/svg/exchange.svg";

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
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 3fr',
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
    accordionBook: {
        fontWeight: 700,
        fontSize: 14,
    },
    accordionBookDetails: {
        fontWeight: 700,
        fontSize: 14,
        position: 'relative',
        '&::before': {
            content: "' '",
            display: 'block',
            position: 'absolute',
            left: -26,
            top: -2,
            height: 24,
            width: 24,
            backgroundImage: `url(${exchange})`
          }
    },
    accordionIcon: {
        position: 'relative',
        '&::before': {
            content: "' '",
            display: 'block',
            position: 'absolute',
            left: -20,
            top: 4,
            height: 16,
            width: 16,
            backgroundImage: `url(${star})`
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
