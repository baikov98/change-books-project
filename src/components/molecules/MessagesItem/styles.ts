import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '2fr 6fr 1fr',
        gridColumnGap: 20,
        margin: '24px 0',
    },
    topic: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    text: {
        display: 'grid',
        gridTemplateColumns: 'auto auto',
    },
    textMore: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis', 
    },
    opened: {},
    button: {
        cursor: 'pointer',
        color: Colors.blue,
    }
    
}, {index: 2});
