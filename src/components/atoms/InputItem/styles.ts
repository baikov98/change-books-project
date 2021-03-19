import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import { IProps } from "./index";

export const useStyles =  makeStyles(() => ({
    input:{
        width: "100%",
        marginTop: 4,
        border: ({error}: IProps) => error ? `1px solid ${Colors.red}`: `1px solid ${Colors.bg}`,
        padding: 8,
        borderRadius: 4,
    },
    inputLabel:{
      fontSize: 14,
      color: ({error}: IProps) => error ? Colors.red: Colors.orange,
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
    endIcon:{
      fill: Colors.darkGray,
      width: 16,
      height: 16,
      cursor: 'pointer',
      '&:hover': {
        fill: Colors.textGray,
      }
    },
}), {index:1});