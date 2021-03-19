import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'


export const useStyles = makeStyles({
    categoryBox: {
        display: 'flex',
    },
    category: {
        color: Colors.darkGray,
        fontWeight: 700,
        whiteSpace: 'nowrap',
        width: '110px',
        marginRight: '16px',
    },
    value: {
        color: Colors.text,
    },
    valueBold: {
        color: Colors.orange,
        fontWeight: 700,
        whiteSpace: 'nowrap',
    },
    pointer: {
        cursor: 'pointer'
    }
    
}, {index: 1})