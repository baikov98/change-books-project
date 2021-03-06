import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import { IProps } from './'

export const useStyles = makeStyles({
    button: {
        padding:0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    text: {
        backgroundColor: ({btnColor}:IProps) => Colors[btnColor || 'orange'],
        border: `1px solid ${Colors.orange}`,
        borderRadius: 5,
        '&:hover': {
            backgroundColor: Colors.white,
            color: Colors.orange,
        },
        color: Colors.white,
        fontWeight: 700,
        height: '100%',
        width: '100%',
        padding: '8px 40px'
    }
}, {index: 1})