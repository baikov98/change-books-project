import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    title: {
        color: Colors.text,
        fontWeight: 700,
        fontSize: '1.5rem'
    },
    gray: {
        color: Colors.darkGray,
        fontWeight: 400,
        fontSize: '1.5rem',
        cursor: 'pointer'
    }
    
}, {index: 1})