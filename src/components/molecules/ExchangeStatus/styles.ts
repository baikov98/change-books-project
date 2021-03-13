import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    underBox:{
        marginTop: 40,
        width: '100%',
    },
    btn:{
        marginTop: 12,
    },
    warning:{
        fontWeight: 500,
        color: Colors.text,
        fontSize: 14,
    },
    explanation:{
        fontSize: 14,
        marginTop: 12,
    },
}, {index: 2});
