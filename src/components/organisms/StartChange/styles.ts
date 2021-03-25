import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    marginTop: '1rem',
    color: Colors.text,
    height: "100%",
    width: '100%',
  },
  title: {
    marginBottom: '1rem',
    fontSize: 18,
    fontWeight: 700
  }
}, {index: 3});
