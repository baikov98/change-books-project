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
var ArchiveCard = function () {
    var classes = styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var data = react_redux_1.useSelector(selectors_1.getBookInfo);
    var crumbs = [
        {
            value: "Архив",
            link: location.pathname.split("/").splice(0, 3).join("/")
        },
        { value: "Карточка обмена", link: location.pathname },
    ];
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(Crumbs_1["default"], { data: crumbs }),
            !data.length && (react_1["default"].createElement(core_1.Typography, { className: classes.noDataText }, "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u0430\u0440\u0445\u0438\u0432\u043D\u044B\u0445 \u043E\u0431\u043C\u0435\u043D\u043E\u0432")),
            !!data.length &&
                data.map(function (item, index) {
                    var _a, _b, _c, _d;
                    return index === 0 ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                        react_1["default"].createElement(core_1.Box, { className: classes.contentLine, key: "contentLine-" + index + " - " + (item === null || item === void 0 ? void 0 : item.id) },
                            react_1["default"].createElement(core_1.Box, { className: classes.book },
                                react_1["default"].createElement(BookList_1["default"], { data: (_a = item === null || item === void 0 ? void 0 : item.info) === null || _a === void 0 ? void 0 : _a.lines, title: (_b = item === null || item === void 0 ? void 0 : item.info) === null || _b === void 0 ? void 0 : _b.title })),
                            react_1["default"].createElement(core_1.Box, { className: classes.book },
                                react_1["default"].createElement(BookList_1["default"], { data: (_c = item === null || item === void 0 ? void 0 : item.info) === null || _c === void 0 ? void 0 : _c.user, title: "От кого:" })),
                            react_1["default"].createElement(core_1.Box, { className: classes.book },
                                react_1["default"].createElement(BookList_1["default"], { data: (_d = item === null || item === void 0 ? void 0 : item.book) === null || _d === void 0 ? void 0 : _d.lines, title: "Меняюсь", icon: true }))),
                        react_1["default"].createElement(core_1.Box, null, '<ExchangeStatus text={"Завершён"} />'))) : null;
                }))));
};
exports["default"] = ArchiveCard;
