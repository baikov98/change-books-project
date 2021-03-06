import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
  },
  popover:{
    borderRadius: 12,
    boxShadow: 'none',
  },
  paper:{
    display: "flex",
    width: 400,
    backgroundColor: Colors.white,
    borderRadius: 12,
    flexDirection: "column",
    padding: 24,
    border: `1px solid ${Colors.bg}`,
    boxSizing: 'border-box',
  },
  enter:{
    fontWeight: 600,
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
  text:{
      color: Colors.text,
      fontSize:20,
      fontWeight: 700,
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
      color: Colors.blue,
      fontSize: 12,
      marginTop: 12,
      textDecoration: "underline",
      '&:hover':{
          cursor: "pointer",
      }
  },
  
}, {index: 3});
