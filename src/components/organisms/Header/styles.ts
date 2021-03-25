import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
    root:{
        height: "100%",
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logo: {
        width: 180,
        height: "auto",
        cursor: 'pointer'
    },
    loginMenu: {
        display: "flex",
        justifyContent: "space-between",
        cursor: 'pointer',
    },
    regButton: {
        paddingLeft: "0.5rem",
    },
    nav:{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    login:{
        fontWeight: 900,
    },
    nick: {
        marginLeft: 8
    }
    
}), { index: 2 });
