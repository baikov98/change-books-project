import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    title:{
        fontSize: 14,
        fontWeight: 500,
        color: Colors.darkGray,
    },
        offersBox:{
        marginTop: 30,
        width: '100%',
        padding: '0 0 30px 0',
        borderBottom: `1px solid ${Colors.gray}`
    }, 
}, {index: 2});
