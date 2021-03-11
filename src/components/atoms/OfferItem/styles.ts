import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'


export const useStyles = makeStyles({
    offerBox: {
        display: 'grid',
        gridTemplateColumns: 'minmax(180px, 5fr) minmax(180px, 3fr) minmax(30px, 1fr)',
        marginTop: 24,
    },
    useName: {
        color: Colors.blue,
        cursor: 'pointer',
    },
    city: {
        color: Colors.text,
    },
    rating: {
        color: Colors.text,
    },
    
}, {index: 1})