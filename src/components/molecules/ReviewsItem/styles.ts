import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 6fr',
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
