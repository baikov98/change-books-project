import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'
import { IProps } from "./index";

export const useStyles =  makeStyles(() => ({
    input:{
        width: "100%",
        marginTop: 12,
        border: ({error}: IProps) => error ? `1px solid ${Colors.red}`: `1px solid #eee`,
        padding: 12,
    },
    inputLabel:{
      fontSize: 14,
      color: Colors.text,
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
}), {index:1});