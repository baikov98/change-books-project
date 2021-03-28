import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    underBox:{
        marginTop: 40,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: 100
    },
    btn:{
        marginTop: 20,
        width: 280,
    },
    btnSave: {
        width: 280,
        marginTop: 20
    },
    trackForm: {
        width: 280
    },
    warning:{
        fontWeight: 700,
        color: Colors.text,
        fontSize: 14,
        marginBottom: 12,
    },
    explanation:{
        fontSize: 14,
    },
}, {index: 2});
