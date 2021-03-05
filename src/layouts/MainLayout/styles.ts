import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
    mainWrapper:{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
    },
    header:{
        height: 70,
        width: "100%",
        backgroundColor: Colors.orange,
    },
    content: {
        display: "flex",
        width: 1080,

    }

}))