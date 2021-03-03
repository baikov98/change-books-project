import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
    root:{
        width:"100%",
        height: "100%",
        boxShadow: "0 0 50px #000",
        background: Colors.white,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
    },
    loginMenu: {
        display: "flex",
        justifyContent: "space-between"
    },
    regButton: {
        paddingLeft: "0.5rem",
    }
    
}), { index: 2 });
