import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../styles/Colors";

export const useStyles = makeStyles(() => ({
    mainWrapper:{
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        flexWrap: "nowrap",
        alignItems: "center",
        backgroundColor: Colors.white,
    },
    header:{
        height: 80,
        maxWidth: 1180,
        background: Colors.white,
        borderBottom: `1px solid ${Colors.bg}`
    },
    contentContainer:{
        maxWidth: 1180,
        marginTop: 48,
        height: '100%',
    },
    content: {
        display: "flex",
        maxWidth: 1180,
    },
    sideBarLeft: {
      height: "100%",
      backgroundColor: Colors.white,
      overflowX: "hidden",
      borderRight: "1px solid",
      borderRightColor: Colors.bg,
      zIndex: 100,
      "&::-webkit-scrollbar": {
        width: 0
      },
    },
    
}));
