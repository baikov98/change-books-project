import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
    root:{
        width: 1080,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        margin: "0 auto",
    },
    loginMenu: {
        display: "flex",
        justifyContent: "space-between"
    },
    regButton: {
        paddingLeft: "0.5rem",
    },
    nav:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    link:{
        marginRight: 16,
        cursor: "pointer",
    },
    
}), { index: 2 });
