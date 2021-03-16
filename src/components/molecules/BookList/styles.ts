import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";
import exchange from "../../../assets/svg/exchange.svg";

export const useStyles = makeStyles({
    title:{
        fontSize: 14,
        fontWeight: 600,
        color: Colors.text,
    },
    exchangeTitle: {
        fontSize: 14,
        fontWeight: 600,
        color: Colors.text,
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
    offersBox:{
        width: '100%',
    }, 
    line:{
        marginTop: 18,
    },
}, {index: 2});
