"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/selectors");
var routes_1 = require("../../../routes");
var BookList_1 = require("../../molecules/BookList");
var CatAndValue_1 = require("../../atoms/CatAndValue");
var Crumbs_1 = require("../../molecules/Crumbs");
var ActiveExchange = function () {
    var classes = styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var history = react_router_dom_1.useHistory();
    var data = react_redux_1.useSelector(selectors_1.getActiveExchange);
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () {
        dispatch.activeExchange.getActiveList();
    }, []);
    var crumbs = [{ value: "Активные обмены", link: location.pathname }];
    var handleClick = function (value) {
        history.push(routes_1.links.activeCard(value.toString()));
    };
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(Crumbs_1["default"], { data: crumbs }),
            !!data.length &&
                data.map(function (item, index) { return (react_1["default"].createElement(core_1.Box, { className: classes.contextBox },
                    react_1["default"].createElement(core_1.Box, { className: classnames_1["default"](classes.contentLine, index === data.length - 1 ? classes.last : ""), key: "contentLine-" + index + " - " + (item === null || item === void 0 ? void 0 : item.offerMyId) },
                        react_1["default"].createElement(core_1.Box, { className: classes.book },
                            react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.categories, title: "\u041A\u043D\u0438\u0433\u0430 #" + (item === null || item === void 0 ? void 0 : item.offerMyId) })),
                        react_1["default"].createElement(core_1.Box, { className: classes.book },
                            react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.user, title: (item === null || item === void 0 ? void 0 : item.authorName) + " " + (item === null || item === void 0 ? void 0 : item.authorSurname) + " \"" + (item === null || item === void 0 ? void 0 : item.book) + "\"", icon: true }))),
                    react_1["default"].createElement(core_1.Box, { className: classes.statusBox },
                        react_1["default"].createElement(core_1.Box, { className: classes.status },
                            react_1["default"].createElement(CatAndValue_1["default"], { valueBold: true, category: "Статус обмена", value: item === null || item === void 0 ? void 0 : item.status })),
                        react_1["default"].createElement(core_1.Box, { className: classes.link, onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.offerMyId); } }, "\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u0430\u0440\u0442\u043E\u0447\u043A\u0443 \u043E\u0431\u043C\u0435\u043D\u0430")))); }))));
};
exports["default"] = ActiveExchange;
