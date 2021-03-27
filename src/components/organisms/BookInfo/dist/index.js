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
var react_hook_form_1 = require("react-hook-form");
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var react_redux_1 = require("react-redux");
var InputItem_1 = require("../../atoms/InputItem");
var selectors_1 = require("../../../store/selectors");
var BookInfo = function (_a) {
    var data = _a.data, control = _a.control, errors = _a.errors;
    var classes = styles_1.useStyles();
    var bookInput = react_redux_1.useSelector(selectors_1.getBookInput);
    return (react_1["default"].createElement(core_1.Box, null,
        react_1["default"].createElement(core_1.Typography, { className: classes.textGray }, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043D\u0438\u0433\u0438"),
        bookInput.map(function (_a, index) {
            var name = _a.name, required = _a.required, placeholder = _a.placeholder, label = _a.label, type = _a.type, error = _a.error;
            return react_1["default"].createElement(react_hook_form_1.Controller, { key: "input-" + index, name: name, control: control, rules: { required: required }, defaultValue: data[name] || '', render: function (props) {
                    var _a;
                    return (react_1["default"].createElement(InputItem_1["default"], __assign({ label: label, inputType: type, error: (_a = errors[error]) === null || _a === void 0 ? void 0 : _a.message, placeholder: placeholder }, props)));
                } });
        })));
};
exports["default"] = BookInfo;
