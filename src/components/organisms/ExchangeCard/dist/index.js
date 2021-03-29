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
var NavItem_1 = require("../../atoms/NavItem");
var ExchangeCard = function () {
    var classes = styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var dispatch = react_redux_1.useDispatch();
    var id = react_router_dom_1.useParams().id;
    var list = react_redux_1.useSelector(selectors_1.getActiveExchange);
    var data = list.find(function (el) { return +el.offerMyId === +id; });
    react_1.useEffect(function () { dispatch.user.getUser(); }, [data]);
    react_1.useEffect(function () {
        dispatch.activeExchange.getActiveList();
        var interval = setInterval(function () {
            dispatch.activeExchange.getActiveList();
        }, 2000);
        return function () { return clearInterval(interval); };
    }, []);
    react_1.useEffect(function () { }, [list]);
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
            data ? '' :
                react_1["default"].createElement(core_1.Box, { className: classes.archiveLink },
                    "\u0414\u0430\u043D\u043D\u044B\u0439 \u043E\u0431\u043C\u0435\u043D \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043D \u0438 \u043F\u0435\u0440\u0435\u043C\u0435\u0449\u0435\u043D \u0432 \u0430\u0440\u0445\u0438\u0432",
                    react_1["default"].createElement(core_1.Box, null,
                        react_1["default"].createElement(NavItem_1["default"], { link: '/userChange/archive', title: '\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0430\u0440\u0445\u0438\u0432' }))),
            data && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(core_1.Box, { className: classes.contentLine },
                    react_1["default"].createElement(core_1.Box, { className: classes.book },
                        react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.categories, title: "\u041A\u043D\u0438\u0433\u0430 #" + (data === null || data === void 0 ? void 0 : data.offerTheirId) }),
                        react_1["default"].createElement(core_1.Box, { className: classes.fromWho },
                            react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.user, title: "От кого:" }))),
                    react_1["default"].createElement(core_1.Box, { className: classes.middleBox },
                        react_1["default"].createElement(core_1.Box, { className: classes.middleLine }),
                        react_1["default"].createElement(core_1.Box, { className: classes.iconBack },
                            react_1["default"].createElement(core_1.Box, { className: classes.icon }))),
                    react_1["default"].createElement(core_1.Box, { className: classes.book },
                        react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.bookCategories, title: "\u041C\u0435\u043D\u044F\u044E - \n                " + (data === null || data === void 0 ? void 0 : data.authorName) + " " + (data === null || data === void 0 ? void 0 : data.authorSurname) + " \"" + (data === null || data === void 0 ? void 0 : data.book) + "\"\n                " }))),
                react_1["default"].createElement(core_1.Box, null,
                    react_1["default"].createElement(ExchangeStatus_1["default"], { text: data === null || data === void 0 ? void 0 : data.status_my, textTheir: data === null || data === void 0 ? void 0 : data.status_their, id: id, track_my: data === null || data === void 0 ? void 0 : data.trackMy, track_their: data === null || data === void 0 ? void 0 : data.trackTheir })))))));
};
exports["default"] = ExchangeCard;
