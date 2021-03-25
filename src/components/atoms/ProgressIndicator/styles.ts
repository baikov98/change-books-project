import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0 2rem 0",
        fontWeight: "bold",
        color: Colors.textGray,
        marginBottom: '2rem'
    },
    mainBox: {
        width: "796px",
        height: "32px"
    },
    lineBox: {
        display: "flex",
        justifyContent: "center",
    },
    line: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "2px",
        width: '720px',
        backgroundColor: "#C4C4C4",
        
    },
    wishes: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: '1.2rem'
    },
    num: {
        backgroundColor: Colors.white,
    },
    numCirle: {
        border: `2px solid ${Colors.textGray}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        height: "32px",
        width: "32px",
        borderRadius: "50%",
    },
    numActive: {
        color: Colors.text,
        '& div': {
            border: `2px solid ${Colors.text}`,
        }
    },
    '.num .numActive': {
        border: `1px solid ${Colors.text}`,
    }
})