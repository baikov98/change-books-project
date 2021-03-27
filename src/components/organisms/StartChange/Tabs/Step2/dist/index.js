"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var styles_1 = require("./styles");
var Categories_1 = require("../../../Categories");
var FormButtons_1 = require("../../FormButtons");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../../../store/selectors");
var Step2 = function (_a) {
    var tabsData = _a.tabsData;
    var step = tabsData.step, storeData = tabsData.storeData, submit = tabsData.submit, handleBackButtonClick = tabsData.handleBackButtonClick, genresCheck = tabsData.genresCheck;
    var personalData = react_redux_1.useSelector(selectors_1.getUser);
    var classes = styles_1.useStyles();
    var _b = react_hook_form_1.useForm({}), setValue = _b.setValue, handleSubmit = _b.handleSubmit, control = _b.control, errors = _b.errors;
    var handleNextButtonClick = handleSubmit(submit);
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement(Categories_1["default"], { step: step, control: control, data: storeData.step2.categories, setValue: setValue, genresCheck: genresCheck }),
        react_1["default"].createElement(FormButtons_1["default"], { step: step, handleBackButtonClick: handleBackButtonClick, handleNextButtonClick: handleNextButtonClick })));
};
exports["default"] = Step2;
