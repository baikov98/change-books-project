"use strict";
exports.__esModule = true;
var react_1 = require("react");
var selectors_1 = require("../../../store/selectors");
var react_redux_1 = require("react-redux");
var selectors_2 = require("../../../store/selectors");
var styles_1 = require("./styles");
var react_router_dom_1 = require("react-router-dom");
var filterFormData_1 = require("../../../utils/filterFormData");
var genresChecker_1 = require("../../../utils/genresChecker");
var core_1 = require("@material-ui/core");
var ProgressIndicator_1 = require("../../atoms/ProgressIndicator");
var Step1_1 = require("./Tabs/Step1");
var Step2_1 = require("./Tabs/Step2");
var Step3_1 = require("./Tabs/Step3");
function getStepContent(tabsData) {
    switch (tabsData.step) {
        case 0:
            return react_1["default"].createElement(Step1_1["default"], { tabsData: tabsData });
        case 1:
            return react_1["default"].createElement(Step2_1["default"], { tabsData: tabsData });
        case 2:
            return react_1["default"].createElement(Step3_1["default"], { tabsData: tabsData });
    }
}
var StartChange = function () {
    var listOfCategories = react_redux_1.useSelector(selectors_1.getBookCategories);
    var classes = styles_1.useStyles();
    var startExchange = react_redux_1.useSelector(selectors_2.getStartExchangeState);
    var step = startExchange.step;
    var storeData = startExchange.data;
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var genresCheck = react_1.useRef(true);
    var submit = function (data) {
        var _a;
        var store = dispatch.startExchange;
        if (step === 2) {
            store.requestOfferList(storeData.step1);
            store.requestWishList(data);
            store.CLEAR_DATA();
            setTimeout(function () {
                history.push('userChange/offer');
            }, 500);
        }
        else {
            genresCheck.current = genresChecker_1["default"](data);
            if (genresCheck.current) {
                if (step === 0)
                    store.getPersonalData();
                var filteredData = filterFormData_1["default"](data, listOfCategories);
                store.SET_EXCHANGE_DATA((_a = {}, _a["step" + (step + 1)] = filteredData, _a));
                store.SET_EXCHANGE_STEP(step < 2 ? step + 1 : step);
            }
        }
    };
    var handleBackButtonClick = function () {
        dispatch.startExchange.SET_EXCHANGE_STEP(step - 1);
    };
    var tabsData = {
        step: step, storeData: storeData, submit: submit, handleBackButtonClick: handleBackButtonClick, genresCheck: genresCheck
    };
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Typography, { className: classes.title }, "\u0411\u043B\u0430\u043D\u043A \u043E\u0431\u043C\u0435\u043D\u0430"),
        react_1["default"].createElement(ProgressIndicator_1["default"], { step: step }),
        getStepContent(tabsData)));
};
exports["default"] = StartChange;
