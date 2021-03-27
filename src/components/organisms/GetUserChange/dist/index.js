"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/selectors");
var selectors_2 = require("../../../store/selectors");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var BookForWish_1 = require("../BookForWish");
var GetUserChange = function () {
    var classes = styles_1.useStyles();
    var _a = react_1.useState(true), editable = _a[0], setEditable = _a[1];
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch.requestWishBooks.requestWishList();
    }, []);
    var handleEditable = function (value) { return setEditable(value); };
    var requestData = react_redux_1.useSelector(selectors_1.requestWishBooks);
    var bookCategories = react_redux_1.useSelector(selectors_2.getBookCategories);
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(core_1.Typography, { className: classes.title }, "\u0425\u043E\u0447\u0443 \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u044C"),
            (requestData === null || requestData === void 0 ? void 0 : requestData.map(function (item, index) { return (react_1["default"].createElement(BookForWish_1["default"], { key: "item" + index, bookNum: index, data: item, objectKey: item.id || '', bookCategories: bookCategories, editable: editable, handleEditable: handleEditable })); })) || react_1["default"].createElement(core_1.Typography, null, "\u041D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E"))));
};
exports["default"] = GetUserChange;
