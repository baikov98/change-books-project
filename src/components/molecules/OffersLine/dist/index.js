"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classnames_1 = require("classnames");
var react_router_dom_1 = require("react-router-dom");
var styles_1 = require("./styles");
var KeyboardArrowRight_1 = require("@material-ui/icons/KeyboardArrowRight");
var core_1 = require("@material-ui/core");
var BookList_1 = require("../../molecules/BookList");
var ButtonItem_1 = require("../../atoms/ButtonItem");
var react_redux_1 = require("react-redux");
var OffersLine = function (_a) {
    var data = _a.data, className = _a.className, _b = _a.title, title = _b === void 0 ? "" : _b;
    var classes = styles_1.useStyles();
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var classBox = classnames_1["default"](classes.offersBox, className);
    var handleClick = function (offerMyId, wishMyId, offerTheirId, wishTheirId) {
        dispatch.offersExchange.makeOffer({ offerMyId: offerMyId, wishMyId: wishMyId, offerTheirId: offerTheirId, wishTheirId: wishTheirId });
        history.push('/userChange/active');
    };
    return (react_1["default"].createElement(core_1.Box, { className: classBox },
        title && react_1["default"].createElement(core_1.Typography, { className: classes.title }, title),
        !!data.length &&
            data.map(function (item, index) {
                return (react_1["default"].createElement(core_1.Accordion, { className: classes.accordion, key: "accordion-" + index + "-" + new Date() },
                    react_1["default"].createElement(core_1.AccordionSummary, { expandIcon: react_1["default"].createElement(KeyboardArrowRight_1["default"], null), className: classes.accordionSummary, classes: {
                            expandIcon: classes.expandIcon
                        } },
                        react_1["default"].createElement(core_1.Box, { className: classes.wrapperAccordionSummary },
                            react_1["default"].createElement(core_1.Typography, { className: classes.accordionBook }, "\u041A\u043D\u0438\u0433\u0430 \u2116" + (item === null || item === void 0 ? void 0 : item.offerMyId)),
                            react_1["default"].createElement(core_1.Typography, { className: classes.accordionTitle }, item === null || item === void 0 ? void 0 : item.user[1].value),
                            react_1["default"].createElement(core_1.Typography, { className: classes.accordionIcon }, item === null || item === void 0 ? void 0 : item.user[2].value),
                            react_1["default"].createElement(core_1.Typography, { className: classes.accordionBookDetails }, (item === null || item === void 0 ? void 0 : item.authorName) + " " + (item === null || item === void 0 ? void 0 : item.authorSurname) + " \"" + (item === null || item === void 0 ? void 0 : item.book) + "\""))),
                    react_1["default"].createElement(core_1.AccordionDetails, { className: classes.accordionDetails },
                        react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.categories }),
                        react_1["default"].createElement(BookList_1["default"], { data: item === null || item === void 0 ? void 0 : item.user }),
                        react_1["default"].createElement(ButtonItem_1["default"], { btnClassName: classes.btn, btnType: "button", type: "border", size: "small", onClick: function () { return handleClick(item === null || item === void 0 ? void 0 : item.offerMyId, item === null || item === void 0 ? void 0 : item.wishMyId, item === null || item === void 0 ? void 0 : item.offerTheirId, item === null || item === void 0 ? void 0 : item.wishTheirId); } }, "\u041C\u0435\u043D\u044F\u044E\u0441\u044C"))));
            })));
};
exports["default"] = OffersLine;
