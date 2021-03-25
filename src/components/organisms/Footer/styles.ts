import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles(() => ({
    root:{
        height: 48,
        maxWidth: 1180,
        backgroundColor: Colors.grape,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: '0 10px'
    },
    content: {
        width: '100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: Colors.darkGray
    },
    policy: {
        cursor: 'pointer'
    }
    
}), { index: 2 });
