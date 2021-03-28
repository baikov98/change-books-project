"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var CheckBox_1 = require("../../../../atoms/CheckBox");
var core_1 = require("@material-ui/core");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var constants_1 = require("../../../../../constants");
var styles_1 = require("./styles");
var react_redux_1 = require("react-redux");
var InputItem_1 = require("../../../../atoms/InputItem");
var FormButtons_1 = require("../../FormButtons");
var selectors_1 = require("../../../../../store/selectors");
var UserChange_1 = require("../../../UserChange");
var Step3 = function (_a) {
    var tabsData = _a.tabsData;
    var step = tabsData.step, storeData = tabsData.storeData, submit = tabsData.submit, handleBackButtonClick = tabsData.handleBackButtonClick;
    var classes = styles_1.useStyles();
    var mainInput = react_redux_1.useSelector(selectors_1.getMainInput);
    var adressInput = react_redux_1.useSelector(selectors_1.getAdressInput);
    var onlyNames = mainInput.slice(0, 3);
    var personalData = react_redux_1.useSelector(selectors_1.getUser);
    var logged = Object.keys(personalData);
    console.log(logged);
    var _b = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(constants_1.VALIDATION.DELIVERY_INFO)
    }), handleSubmit = _b.handleSubmit, control = _b.control, errors = _b.errors;
    var handleNextButtonClick = handleSubmit(submit);
    return (react_1["default"].createElement(react_1["default"].Fragment, null, !logged.length ? react_1["default"].createElement(UserChange_1["default"], null) :
        react_1["default"].createElement(core_1.Box, { className: classes.wrapper },
            react_1["default"].createElement("form", null,
                react_1["default"].createElement(core_1.Typography, null, "\u0410\u0434\u0440\u0435\u0441 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0438"),
                react_1["default"].createElement(core_1.Box, { className: classes.inputRow }, onlyNames.map(function (item, index) { return (react_1["default"].createElement(react_hook_form_1.Controller, { key: "input-" + index, name: item.name, control: control, rules: { required: item.required }, defaultValue: storeData.step3[item.name], render: function (props) {
                        var _a;
                        return (react_1["default"].createElement(InputItem_1["default"], __assign({ label: item.label, inputType: item.type, error: (_a = errors[item.error]) === null || _a === void 0 ? void 0 : _a.message, placeholder: item.placeholder }, props)));
                    } })); })),
                react_1["default"].createElement(core_1.Box, { className: classes.inputRow }, adressInput.map(function (item, index) { return (react_1["default"].createElement(react_hook_form_1.Controller, { key: "input-adress-" + index, name: item.name, control: control, rules: { required: item.required }, defaultValue: storeData.step3[item.name], render: function (props) {
                        var _a;
                        return (react_1["default"].createElement(InputItem_1["default"], __assign({ label: item.label, inputType: item.type, error: (_a = errors[item.error]) === null || _a === void 0 ? void 0 : _a.message, placeholder: item.placeholder }, props)));
                    } })); })),
                react_1["default"].createElement(react_hook_form_1.Controller, { name: "is_default", control: control, defaultValue: true, render: function (_a) {
                        var value = _a.value, onChange = _a.onChange;
                        return (react_1["default"].createElement(CheckBox_1["default"], { label: 'Сделать адресом по умолчанию', onChange: function (event) { return onChange(event.target.checked); }, checked: value }));
                    } }),
                react_1["default"].createElement(FormButtons_1["default"], { step: step, handleBackButtonClick: handleBackButtonClick, handleNextButtonClick: handleNextButtonClick })))));
};
exports["default"] = Step3;
