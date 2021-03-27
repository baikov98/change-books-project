"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/selectors");
var Crumbs_1 = require("../../molecules/Crumbs");
var BookList_1 = require("../../molecules/BookList");
var ExchangeStatus_1 = require("../../molecules/ExchangeStatus");
var ExchangeCard = function () {
    var classes = styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var data = react_redux_1.useSelector(selectors_1.getBookInfo);
    var crumbs = [
        {
            value: "Активные обмены",
            link: location.pathname.split("/").splice(0, 3).join("/")
        },
        { value: "Карточка обмена", link: location.pathname },
    ];
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(Crumbs_1["default"], { data: crumbs }),
            !!data.length &&
                data.map(function (item, index) {
                    var _a;
                    return index === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(core_1.Box, { className: classes.contentLine, key: "contentLine-" + index + " - " + item.id },
                            react_1["default"].createElement(core_1.Box, { className: classes.book },
                                react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.info.lines, title: item === null || item === void 0 ? void 0 : item.info.title }),
                                react_1["default"].createElement(core_1.Box, { className: classes.fromWho },
                                    react_1["default"].createElement(BookList_1["default"], { data: (_a = item === null || item === void 0 ? void 0 : item.info) === null || _a === void 0 ? void 0 : _a.user, title: "От кого:" }))),
                            react_1["default"].createElement(core_1.Box, { className: classes.middleBox },
                                react_1["default"].createElement(core_1.Box, { className: classes.middleLine }),
                                react_1["default"].createElement(core_1.Box, { className: classes.iconBack },
                                    react_1["default"].createElement(core_1.Box, { className: classes.icon }))),
                            react_1["default"].createElement(core_1.Box, { className: classes.book },
                                react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.book.lines, title: "Меняюсь" }))),
                        react_1["default"].createElement(core_1.Box, null,
                            react_1["default"].createElement(ExchangeStatus_1["default"], { id: item === null || item === void 0 ? void 0 : item.info.status }),
                            react_1["default"].createElement(ExchangeStatus_1["default"], { id: item === null || item === void 0 ? void 0 : item.book.status })))) : null;
                }))));
};
exports["default"] = ExchangeCard;
