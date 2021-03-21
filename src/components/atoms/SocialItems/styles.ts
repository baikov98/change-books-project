import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    title:{
        marginRight: 12,
        fontSize: 16,
    },
    buttons:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn:{
        marginRight: 8,
        cursor: 'pointer',
    },
   
}, {index: 1})