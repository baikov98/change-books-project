"use strict";
exports.__esModule = true;
exports.useStyles = void 0;
var styles_1 = require("@material-ui/core/styles");
var Colors_1 = require("../../../styles/Colors");
var exchange_svg_1 = require("../../../assets/svg/exchange.svg");
exports.useStyles = styles_1.makeStyles({
    root: {
        color: Colors_1.Colors.text,
        overflowX: "auto",
        width: "100%"
    },
    wrapper: {
        background: Colors_1.Colors.white,
        minHeight: '100%',
        padding: '10px 20px',
        width: '100%'
    },
    archiveLink: {
        marginTop: 40
    },
    titleLine: {
        marginTop: 40,
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit,minmax(200px, 1fr))',
        gridColumnGap: 6,
        width: '100%'
    },
    contentLine: {
        display: 'grid',
        marginTop: 24,
        gridTemplateColumns: 'auto auto auto',
        width: '100%'
    },
    middleBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '200px',
        position: 'relative'
    },
    middleLine: {
        position: 'absolute',
        left: '50%',
        backgroundColor: Colors_1.Colors.gray,
        width: '2px',
        height: '100%'
    },
    icon: {
        width: '24px',
        height: '24px',
        backgroundImage: "url(" + exchange_svg_1["default"] + ")",
        zIndex: 4
    },
    iconBack: {
        width: '24px',
        height: '24px',
        backgroundColor: Colors_1.Colors.white,
        zIndex: 2
    },
    fromWho: {
        marginTop: '24px'
    },
    title: {
        fontSize: 14,
        fontWeight: 500,
        color: Colors_1.Colors.darkGray
    },
    book: {},
    bookTitle: {
        fontWeight: 500,
        color: Colors_1.Colors.text,
        fontSize: 14
    },
    catValue: {
        marginTop: 12
    },
    underBox: {
        marginTop: 40,
        width: '100%'
    },
    btn: {
        marginTop: 12
    },
    warning: {
        fontWeight: 500,
        color: Colors_1.Colors.text,
        fontSize: 14
    },
    explanation: {
        fontSize: 14,
        marginTop: 12
    }
}, { index: 3 });
