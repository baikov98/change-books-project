"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var Colors_1 = require("../../../styles/Colors");
exports.useStyles = styles_1.makeStyles({
    underBox: {
        marginTop: 40,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridColumnGap: 100
    },
    btn: {
        marginTop: 20,
        width: 280
    },
    btnSave: {
        width: 280,
        marginTop: 20
    },
    trackForm: {
        width: 280
    },
    warning: {
        fontWeight: 700,
        color: Colors_1.Colors.text,
        fontSize: 14,
        marginBottom: 12
    },
    explanation: {
        fontSize: 14
    }
}, { index: 2 });
