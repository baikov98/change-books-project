import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'


export const useStyles =  makeStyles(() => ({
    input:{
        width: "100%",
        border: `1px solid ${Colors.bg}`,
        padding: '15px 12px',
        position: 'relative',
        outline: 'none',
        borderRadius: 4,
        '&:focus': {
          background: Colors.white,
        },
    },
    inputLabel:{
      fontSize: 14,
      color:  Colors.orange,
      fontWeight: 700,
    },
    inputBox:{
      marginTop: 12,
    },
    error: {
      color: Colors.red,
      fontSize: 12,
      fontWeight: 500,
      marginLeft: 8,
    },
    formControl: {
      width: '100%',
      marginTop: 4,
    },
    selectEmpty: {
      borderRadius: 0,
    },
    paper:{
      boxShadow: 'none',
      borderBottomRightRadius: 4,
      borderBottomLeftRadius: 4,
      border: `1px solid ${Colors.bg}`,
      borderTop: 'none',
    },
    icon:{
      marginRight: 12,
      fill: Colors.darkGray,
      '&:active': {
        transform: 'rotate(90deg)',
      }
    },
    iconOpen:{
      transform: 'rotate(180deg)',
    },
    placeholder:{
      color:Colors.darkGray,
      fontWeight: 350,
    },

}), {index:1});