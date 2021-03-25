import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../../styles/Colors";

export const useStyles = makeStyles({
  btnBox: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    marginTop:24,
  },
  btn: {
    width: "280px",
    border: `1px solid ${Colors.orange}`,
    color: Colors.orange
  },
  btnSubmit: {
    width: "280px",
    color: Colors.white
  }
}, {index: 3});
