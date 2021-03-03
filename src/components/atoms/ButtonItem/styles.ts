import { makeStyles } from '@material-ui/core/styles'
import { Colors } from '../../../styles/Colors'

export const useStyles = makeStyles({
    bg: { backgroundColor: Colors.bg},
    text: { backgroundColor: Colors.text},
    textActive: { backgroundColor: Colors.textActiveColor},
    textGray: { backgroundColor: Colors.textGray},
    white: { backgroundColor: Colors.white},
    yellow: { backgroundColor: Colors.yellow},

    textBold: { fontWeight: "bold" },
    textNormal: { fontWeight: "normal"}
})