import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    title:{
        fontSize: 14,
        fontWeight: 600,
        color: Colors.text,
    },
    offersBox:{
        width: '100%',
    }, 
    line:{
        marginTop: 18,
    },
}, {index: 2});
