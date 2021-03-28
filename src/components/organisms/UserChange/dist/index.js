"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var UserChange = function () {
    var classes = styles_1.useStyles();
    var history = react_router_dom_1.useHistory();
    var dispatch = react_redux_1.useDispatch();
    var handleEnterClick = function () {
        dispatch.menu.SET_MODAL(true);
    };
    var handleRegClick = function () {
        history.push("/signup");
    };
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(core_1.Typography, { className: classes.title }),
            react_1["default"].createElement(core_1.Typography, { className: classes.subtitle }, "\u0412\u044B \u043D\u0435 \u0430\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u043D\u044B!"),
            react_1["default"].createElement(core_1.Typography, null,
                "\u0414\u043B\u044F \u0442\u043E\u0433\u043E, \u0447\u0442\u043E\u0431\u044B \u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C, \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E",
                " ",
                react_1["default"].createElement("span", { className: classes.link, onClick: handleEnterClick }, "\u0432\u043E\u0439\u0442\u0438"),
                " ",
                "\u0438\u043B\u0438",
                " ",
                react_1["default"].createElement("span", { className: classes.link, onClick: handleRegClick }, "\u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")))));
};
exports["default"] = UserChange;
