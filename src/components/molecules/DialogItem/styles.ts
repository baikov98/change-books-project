import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'


export const useStyles = makeStyles({
    root: {
        boxShadow: '0px 2px 5px 0px rgba(0,0,0,0.1)',
    },
    backDrops: {
        background: '#ffffffa6',
    },
    paper:{
        display: "flex",
        width: 320,
        backgroundColor: Colors.white,
        borderRadius: 4,
        flexDirection: "column",
        padding: '25px 22px',
        border: `1px solid ${Colors.bg}`,
        boxSizing: 'border-box',
    },
    close:{
        width:'100%',
        display: 'flex',
        justifyContent: 'flex-end',
      },
      closeIcon: {
        width: 20,
        height: 20,
        fill: Colors.textGray,
        cursor:"pointer",
      },
      title: {
        color: Colors.orange,
        fontSize:18,
        fontWeight: 500,
        marginBottom: 12,
      },
      text:{
          color: Colors.text,
          fontSize:14,
          fontWeight: 400,
          lineHeight: 2,
      },
      btn:{
          marginTop: 12,
      },
    
}, {index: 1})