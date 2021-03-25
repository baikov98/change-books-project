import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'


export const useStyles = makeStyles({
    button: {
        padding:0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    text: {
        borderRadius: 5,
        fontWeight: 700,
        height: '100%',
        width: '100%',
        padding: '8px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    icon:{
        margin: '0 8px',
        width: 18,
        height: 18,
    },
    solid:{
        backgroundColor: Colors.orange,
        border: `1px solid ${Colors.orange}`,
        color: Colors.white,
        '&:hover': {
            backgroundColor: Colors.white,
            color: Colors.orange,
        },
    },
    border:{
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.orange}`,
        color: Colors.orange,
        '&:hover': {
            backgroundColor: Colors.orange,
            color: Colors.white,
        },
    },
    back:{
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.darkGray}`,
        color: Colors.darkGray,
        '&:hover': {
            border: `1px solid ${Colors.textGray}`,
            color: Colors.textGray,
        },
    },
    forward:{
        backgroundColor: Colors.white,
        border: `1px solid ${Colors.darkGray}`,
        color: Colors.darkGray,
        '&:hover': {
            border: `1px solid ${Colors.textGray}`,
            color: Colors.textGray,
        },
    },
    disabled:{
        backgroundColor: `${Colors.orange}a1`,
        border: `1px solid ${Colors.orange}a1`,
        color: Colors.white,
    },
}, {index: 1})