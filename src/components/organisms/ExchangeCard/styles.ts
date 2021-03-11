import { makeStyles } from "@material-ui/core/styles";
import { Colors } from "../../../styles/Colors";

export const useStyles = makeStyles({
    root: {
        color: Colors.text,
        overflowX:"auto",
        width:"100%"
    },
    wrapper:{
        background: Colors.white,
        minHeight: '100%',
        padding: '10px 20px',
        width: '100%',
    },
    content:{
        marginTop: 20,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
        gridColumnGap: 12,
        width: '100%',
    },
    title:{
        fontSize: 14,
        fontWeight: 500,
        color: Colors.darkGray,
        marginBottom: 20,
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
    warning:{
        fontWeight: 500,
        color: Colors.text,
        fontSize: 14,
    },
    explanation:{
        fontSize: 14,
        marginTop: 12,
    },
}, {index: 3});
