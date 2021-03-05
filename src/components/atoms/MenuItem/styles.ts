import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        background: Colors.white,
        borderBottom: `2px solid ${Colors.orange}`,
        borderRadius: 12,
        flex: "0 1 20%",
        textAlign: "center",
        padding: "20px 0",
        cursor:"pointer",
        transition: "all 0.3s ease 0s",
        '&:hover':{
          background: Colors.orange,
        }
      },
    linkText:{
        fontWeight: 900,
        color: Colors.text,
      },
    activeLink: {
      background: Colors.orange
    }
})
