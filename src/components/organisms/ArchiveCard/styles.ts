import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";
import exchange from "../../../assets/svg/exchange.svg";

export const useStyles = makeStyles({
    root: {
        color: Colors.text,
        overflowX:"auto",
        width:"100%",
    },
    wrapper:{
        background: Colors.white,
        minHeight: '100%',
        padding: '10px 20px',
        width: '100%',
    },
    titleLine:{
        marginTop: 40,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
        gridColumnGap: 6,
        width: '100%',
      },
    contentLine:{
        marginTop: 0,
        display: 'grid',
        gridTemplateColumns: 'minmax(200px, 1fr) minmax(200px, 1fr) minmax(200px, 1fr)',
        gridColumnGap: 6,
        width: '100%',
        cursor: 'pointer',
    },
    title:{
        fontSize: 14,
        fontWeight: 500,
        color: Colors.darkGray,
    },
    book:{
        marginTop: 24,
    },
    bookTitle:{
        fontWeight: 500,
        color: Colors.text,
        fontSize: 14,
    },
    catValue:{
        marginTop: 12,
    },
    underBox:{
        marginTop: 40,
        width: '100%',
    },
    btn:{
        marginTop: 12,
    },
    warning:{
        fontWeight: 500,
        color: Colors.text,
        fontSize: 14,
    },
    explanation:{
        fontSize: 14,
        marginTop: 12,
    },
    noDataText:{
        marginTop: 12,
    },

    contextBox: {
        borderBottom: `1px solid ${Colors.gray}`,
    },
    statusBox: {
        marginBottom: 22,
    },
    crumbs:{
        color: Colors.grape,
        fontSize: 18,
        fontWeight: 500,
    },  
    status:{
        width: '100%',
    },
    statusText: {
        marginTop: 24,
        fontWeight: 500,
        fontSize: 14,
    },
    link: {
        color: Colors.blue,
        cursor: 'pointer',
        marginTop: 22,
      },
    middleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '200px',
        position: 'relative',
    },
    middleLine: {
        position: 'absolute',
        left: '50%',
        backgroundColor: Colors.gray,
        width: '2px',
        height: '100%',
    },
    icon: {
        width: '24px',
        height: '24px',
        backgroundImage: `url(${exchange})`,
        zIndex: 4,
    },
    iconBack: {
        width: '24px',
        height: '24px',
        backgroundColor: Colors.white,
        zIndex: 2,
    },
    fromWho: {
        marginTop: '24px',
    },
}, {index: 3});
