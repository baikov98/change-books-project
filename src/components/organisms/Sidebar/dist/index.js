"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Box_1 = require("@material-ui/core/Box");
var NavItem_1 = require("../../atoms/NavItem");
var user_png_1 = require("../../../assets/image/user.png");
var react_redux_1 = require("react-redux");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var selectors_1 = require("../../../store/selectors");
var star_svg_1 = require("../../../assets/svg/star.svg");
var Sidebar = function () {
    var classes = styles_1.useStyles();
    var user = react_redux_1.useSelector(selectors_1.getUser);
    var nav = react_redux_1.useSelector(selectors_1.getNavList);
    return (react_1["default"].createElement(Box_1["default"], { className: classes.root },
        react_1["default"].createElement(Box_1["default"], { className: classes.user },
            react_1["default"].createElement(Box_1["default"], { className: classes.logo },
                react_1["default"].createElement("img", { src: user_png_1["default"] })),
            react_1["default"].createElement(core_1.Typography, { className: classes.title }, user === null || user === void 0 ? void 0 : user.nickname)),
        react_1["default"].createElement(core_1.Typography, { className: classes.subtitle },
            "\u0420\u0435\u0439\u0442\u0438\u043D\u0433 ",
            react_1["default"].createElement(star_svg_1.ReactComponent, { className: classes.icon, viewBox: "0 0 16 16" }),
            " ",
            (user === null || user === void 0 ? void 0 : user.rating) || 0),
        react_1["default"].createElement(Box_1["default"], { className: classes.nav }, nav.map(function (item, index) { return (react_1["default"].createElement(NavItem_1["default"], { key: "navItem-" + index, link: item.link, title: item.title })); }))));
};
exports["default"] = Sidebar;
