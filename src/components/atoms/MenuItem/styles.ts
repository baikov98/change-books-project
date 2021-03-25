import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    link: {
        cursor:"pointer",
        transition: "all 0.1s ease 0s",
        textDecoration: 'none',
        marginRight:44,
        fontWeight: 400,
        fontSize:16,
        color: Colors.text,
        '&:hover':{
          color: Colors.orange,
        }
    },
})

export const activeLink = {
  fontWeight:700,
  color: Colors.orange
}
