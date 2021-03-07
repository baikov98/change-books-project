import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    container: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem 0 2rem 0"
    },
    mainBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "796px",
        height: "32px"
    },
    line: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "2px",
        //width: "100%",
        flex: "1 5 796px",
        backgroundColor: "#C4C4C4",
        
    },
    wishes: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    num: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `1px solid ${Colors.textGray}`,
        fontWeight: "bold",
        height: "32px",
        width: "32px",
        borderRadius: "50%",
        backgroundColor: Colors.white,
        color: Colors.textGray
        
    },
    numActive: {
        border: `1px solid ${Colors.text}`,
        color: Colors.text
    },

    num1: {
        position: "relative",
        '&::after': {
            content: "'Хочу обменять'",
            position: "absolute",
            top: "30px",
            left: "-40px",
            whiteSpace: "nowrap"
        }
    },
    num2: {
        position: "relative",
        '&::after': {
            position: "absolute",
            top: "30px",
            left: "-40px",
            whiteSpace: "nowrap",
            content: "'Хочу получить'",
        }
    },
    num3: {
        position: "relative",
        '&::after': {
            position: "absolute",
            top: "30px",
            left: "-40px",
            whiteSpace: "nowrap",
            content: "'Адрес доставки'",
        }
    }
   
})