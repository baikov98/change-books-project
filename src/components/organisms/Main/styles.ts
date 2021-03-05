import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
  root: {
    color: Colors.text,
    overflow:"auto",
    width:"100%"
  },
  linksWrapper:{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    margin: "24px auto",
    width: "80%",
  },
  wrapper:{
    background: Colors.white,
    borderRadius: 12,
    boxShadow: "6px 6px 10px rgba(165, 163, 176, 0.27)",
    margin: "0 16px",
    minHeight: 500,
    padding: 24,
  },
  link: {
    background: Colors.white,
    borderBottom: `2px solid ${Colors.yellow}`,
    borderRadius: 12,
    flex: "0 1 20%",
    textAlign: "center",
    padding: "20px 0",
    cursor:"pointer",
    transition: "all 0.3s ease 0s",
    '&:hover':{
      background: Colors.yellow,
    }
  },
  linkText:{
    fontWeight: 900,
    color: Colors.text,
  }
  
}, {index: 3});
