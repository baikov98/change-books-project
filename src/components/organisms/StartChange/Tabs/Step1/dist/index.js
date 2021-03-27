"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var constants_1 = require("../../../../../constants");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var FormButtons_1 = require("../../FormButtons");
var BookInfo_1 = require("../../../BookInfo");
var Categories_1 = require("../../../Categories");
var Step1 = function (_a) {
    var tabsData = _a.tabsData;
    var step = tabsData.step, storeData = tabsData.storeData, submit = tabsData.submit, genresCheck = tabsData.genresCheck;
    var classes = styles_1.useStyles();
    var _b = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(constants_1.VALIDATION.BOOK_INFO)
    }), setValue = _b.setValue, getValues = _b.getValues, handleSubmit = _b.handleSubmit, control = _b.control, errors = _b.errors;
    var handleNextButtonClick = handleSubmit(submit);
    return (react_1["default"].createElement("form", null,
        react_1["default"].createElement(core_1.Box, { className: classes.content },
            react_1["default"].createElement(BookInfo_1["default"], { data: storeData.step1, control: control, errors: errors }),
            react_1["default"].createElement(Categories_1["default"], { step: step, control: control, data: storeData.step1.categories, setValue: setValue, checkLimit: true, getValues: getValues, genresCheck: genresCheck })),
        react_1["default"].createElement(FormButtons_1["default"], { step: step, handleNextButtonClick: handleNextButtonClick })));
};
//
exports["default"] = Step1;
