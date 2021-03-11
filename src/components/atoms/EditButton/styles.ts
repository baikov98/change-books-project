import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import editIcon from '../../../assets/svg/editIcon.svg'

export const useStyles = makeStyles({
    editBox: {
        display: 'flex',
        cursor: 'pointer'
    },
    icon: {
        width: '12px',
        height: '12px',
        backgroundImage:`url(${editIcon})`,
        marginRight: '4px',
        marginTop: '4px'
    },
    text: {
        color: Colors.blue,
    },
    
}, {index: 1})