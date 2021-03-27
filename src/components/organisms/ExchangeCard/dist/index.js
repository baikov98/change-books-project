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
    var dispatch = react_redux_1.useDispatch();
    var id = react_router_dom_1.useParams().id;
    var list = react_redux_1.useSelector(selectors_1.getActiveExchange);
    var data = list.find(function (el) { return +el.offerMyId === +id; });
    react_1.useEffect(function () {
        dispatch.activeExchange.getActiveList();
    }, []);
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
            data && (react_1["default"].createElement(react_1["default"].Fragment, null,
                react_1["default"].createElement(core_1.Box, { className: classes.contentLine },
                    react_1["default"].createElement(core_1.Box, { className: classes.book },
                        react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.categories, title: "\u041A\u043D\u0438\u0433\u0430 #" + (data === null || data === void 0 ? void 0 : data.offerMyId) }),
                        react_1["default"].createElement(core_1.Box, { className: classes.fromWho },
                            react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.user, title: "От кого:" }))),
                    react_1["default"].createElement(core_1.Box, { className: classes.middleBox },
                        react_1["default"].createElement(core_1.Box, { className: classes.middleLine }),
                        react_1["default"].createElement(core_1.Box, { className: classes.iconBack },
                            react_1["default"].createElement(core_1.Box, { className: classes.icon }))),
                    react_1["default"].createElement(core_1.Box, { className: classes.book },
                        react_1["default"].createElement(BookList_1["default"], { data: data === null || data === void 0 ? void 0 : data.bookCategories, title: "\u041C\u0435\u043D\u044F\u044E - \n                " + (data === null || data === void 0 ? void 0 : data.authorName) + " " + (data === null || data === void 0 ? void 0 : data.authorSurname) + " \"" + (data === null || data === void 0 ? void 0 : data.book) + "\"\n                " }))),
                react_1["default"].createElement(core_1.Box, null,
                    react_1["default"].createElement(ExchangeStatus_1["default"], { text: data === null || data === void 0 ? void 0 : data.status_my, id: id, track_my: data === null || data === void 0 ? void 0 : data.trackMy, track_their: data === null || data === void 0 ? void 0 : data.trackTheir }),
                    '<ExchangeStatus text={data?.status_their} id={id} track_my={data?.trackTheir} track_their={data?.trackMy}/>'))))));
};
exports["default"] = ExchangeCard;
