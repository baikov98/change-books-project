"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Crumbs_1 = require("../../molecules/Crumbs");
var react_redux_1 = require("react-redux");
var styles_1 = require("./styles");
var core_1 = require("@material-ui/core");
var react_router_dom_1 = require("react-router-dom");
var selectors_1 = require("../../../store/selectors");
var OffersLine_1 = require("../../molecules/OffersLine");
var OfferUserChange = function () {
    var classes = styles_1.useStyles();
    var location = react_router_dom_1.useLocation();
    var dispatch = react_redux_1.useDispatch();
    var data = react_redux_1.useSelector(selectors_1.getBookInfo);
    react_1.useEffect(function () {
        dispatch.offersExchange.getOffers();
        var timeout = setTimeout(function () {
            dispatch.offersExchange.getOffers();
        }, 1500);
        return function () { return clearTimeout(timeout); };
    }, []);
    react_1.useEffect(function () { }, [data]);
    var crumbs = [{ value: "Предложения для обмена", link: location.pathname }];
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement(Crumbs_1["default"], { data: crumbs }),
            !data.length && (react_1["default"].createElement(core_1.Typography, { className: classes.noDataText }, "\u0423 \u0432\u0430\u0441 \u043D\u0435\u0442 \u043F\u0440\u0435\u0434\u043B\u043E\u0436\u0435\u043D\u0438\u0439 \u0434\u043B\u044F \u043E\u0431\u043C\u0435\u043D\u0430")),
            !!data.length && (react_1["default"].createElement(core_1.Box, { className: classes.content },
                react_1["default"].createElement(OffersLine_1["default"], { data: data, title: "Полное совпадение" }))))));
};
exports["default"] = OfferUserChange;
