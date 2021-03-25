import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    link: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 34,
        width: '100%',
        cursor:"pointer",
        textDecoration: 'none',
        fontWeight: 400,
        fontSize:14,
        color: Colors.text,
        '&:hover':{
          color: Colors.orange,
        }
    },
})

export const activeLink = {
  fontWeight:700,
  color: Colors.orange,
  borderRight: `4px solid ${Colors.orange}`,
}
