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
  close:{
    width:'100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  text:{
      color: Colors.text,
      fontSize:20,
      fontWeight: 700,
      letterSpacing: 2,
  },
  form:{
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      marginTop: 32,
  },
  inputWrapper:{
      width: "100%",
  },
  input:{
      width: "100%",
      marginTop: 12,
      border: `1px solid #eee`,
      padding: 12,
  },
  inputLabel:{
    fontSize: 20,
    color: Colors.text,
    fontWeight: 700,
  },
  inputBox:{
    marginTop: 12,
  },
  textRow:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 18,
  },
  socialBox:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  btn:{
    marginTop: 32,
    padding: '16px 0px'
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
