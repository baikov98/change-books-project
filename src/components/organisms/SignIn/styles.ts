import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
  },
  paper:{
    display: "flex",
    width: 425,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: "column",
    padding: "0px 0px 24px 0",
  },
  text:{
      color: Colors.text,
      fontSize:18,
      textAlign: "center",
  },
  form:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: 50,
  },
  inputWrapper:{
      width: "100%",
  },
  input:{
      width: "100%",
      marginTop: 12,
  },
  btn:{
    marginTop: 32,
  },
  forgetText:{
      color: Colors.textGray,
      fontSize: 12,
      textAlign: "center",
      marginTop: 12,
      '&:hover':{
          textDecoration: "underline",
          cursor: "pointer",
      }
  },
  
}, {index: 3});
