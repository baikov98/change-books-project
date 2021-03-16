import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
    mainWrapper:{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        paddingLeft: 'calc(50vw - 590px)',
        backgroundColor: Colors.white,
    },
    header:{
        height: 80,
        maxWidth: 1180,
        background: Colors.white,
        borderBottom: `1px solid ${Colors.bg}`,
    },
    content: {
        display: "flex",
        maxWidth: 1180,
    }

}))