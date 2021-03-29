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
var core_1 = require("@material-ui/core");
var react_1 = require("react");
var styles_1 = require("./styles");
var react_hook_form_1 = require("react-hook-form");
var ButtonItem_1 = require("../../atoms/ButtonItem");
var react_redux_1 = require("react-redux");
var InputItem_1 = require("../../atoms/InputItem");
var yup_1 = require("@hookform/resolvers/yup");
var constants_1 = require("../../../constants");
var CheckBox_1 = require("../../atoms/CheckBox");
var selectors_1 = require("../../../store/selectors");
var DialogItem_1 = require("../../molecules/DialogItem");
var react_router_dom_1 = require("react-router-dom");
var SignUp = function () {
    var classes = styles_1.useStyles();
    var mainInput = react_redux_1.useSelector(selectors_1.getMainInput);
    var adressInput = react_redux_1.useSelector(selectors_1.getAdressInput);
    var regError = react_redux_1.useSelector(selectors_1.getUserError);
    var dispatch = react_redux_1.useDispatch();
    var history = react_router_dom_1.useHistory();
    var _a = react_hook_form_1.useForm({
        mode: "onChange",
        resolver: yup_1.yupResolver(constants_1.VALIDATION.SIGN_UP)
    }), handleSubmit = _a.handleSubmit, control = _a.control, errors = _a.errors, reset = _a.reset, formState = _a.formState;
    var submit = function (data) {
        reset();
        dispatch.user.registration(data);
    };
    var handleDialogClick = function () {
        history.push("/");
    };
    if (formState.isSubmitSuccessful) {
        return (react_1["default"].createElement(DialogItem_1["default"], { title: regError ? "Ошибка" : "Спасибо за регистрацию!", value: regError
                ? regError
                : "Вам на почту должна придти ссылка на подтверждение регистрации. Проверьте также папку 'Спам'", open: formState.isSubmitSuccessful, onClose: handleDialogClick, onClick: handleDialogClick }));
    }
    return (react_1["default"].createElement(core_1.Box, { className: classes.root },
        react_1["default"].createElement(core_1.Typography, { className: classes.title }, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F:"),
        react_1["default"].createElement(core_1.Typography, { className: classes.subtitle }, "\u041E\u0441\u043D\u043E\u0432\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F"),
        react_1["default"].createElement("form", { className: classes.form, onSubmit: handleSubmit(submit) },
            react_1["default"].createElement(core_1.Box, { className: classes.inputRow }, mainInput.map(function (_a, index) {
                var name = _a.name, required = _a.required, placeholder = _a.placeholder, label = _a.label, type = _a.type, error = _a.error;
                return (react_1["default"].createElement(react_hook_form_1.Controller, { key: "input-" + index, name: name, control: control, rules: { required: required }, defaultValue: "", render: function (props) {
                        var _a;
                        return (react_1["default"].createElement(InputItem_1["default"], __assign({ label: label, inputType: type, error: (_a = errors[error]) === null || _a === void 0 ? void 0 : _a.message, placeholder: placeholder }, props)));
                    } }));
            })),
            react_1["default"].createElement(core_1.Typography, { className: classes.subtitle }, "\u0410\u0434\u0440\u0435\u0441"),
            react_1["default"].createElement(core_1.Box, { className: classes.inputRow }, adressInput.map(function (_a, index) {
                var name = _a.name, required = _a.required, placeholder = _a.placeholder, label = _a.label, type = _a.type, error = _a.error;
                return (react_1["default"].createElement(react_hook_form_1.Controller, { key: "input-adress-" + index, name: name, control: control, rules: { required: required }, defaultValue: "", render: function (props) {
                        var _a;
                        return (react_1["default"].createElement(InputItem_1["default"], __assign({ label: label, inputType: type, error: (_a = errors[error]) === null || _a === void 0 ? void 0 : _a.message, placeholder: placeholder }, props)));
                    } }));
            })),
            react_1["default"].createElement(core_1.Box, { className: classes.textRow }),
            react_1["default"].createElement(core_1.Box, { className: classes.textRow },
                react_1["default"].createElement(core_1.Typography, null, "\u0417\u043D\u0430\u043A\u043E\u043C * \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u0432\u0441\u0435 \u043F\u043E\u043B\u044F, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u0435 \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F")),
            react_1["default"].createElement(core_1.Box, { className: classes.textRow },
                react_1["default"].createElement(core_1.Typography, null, "\u041D\u0430 \u0443\u043A\u0430\u0437\u0430\u043D\u043D\u044B\u0439 \u0432\u0430\u043C\u0438 e-mail \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E \u043F\u0438\u0441\u044C\u043C\u043E \u0434\u043B\u044F \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u044F \u0443\u0447\u0451\u0442\u043D\u043E\u0439 \u0437\u0430\u043F\u0438\u0441\u0438")),
            react_1["default"].createElement(core_1.Box, { className: classes.textRow },
                react_1["default"].createElement(react_hook_form_1.Controller, { name: "terms", control: control, rules: { required: true }, defaultValue: false, render: function (_a) {
                        var _b;
                        var value = _a.value, onChange = _a.onChange;
                        return (react_1["default"].createElement(CheckBox_1["default"], { error: (_b = errors.terms) === null || _b === void 0 ? void 0 : _b.message, label: "\u041D\u0430\u0436\u0438\u043C\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0443 \"\u0421\u041E\u0417\u0414\u0410\u0422\u042C \u0410\u041A\u041A\u0410\u0423\u041D\u0422\" \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 \u043F\u043E\u043B\u0438\u0442\u0438\u0442\u043A\u043E\u0439 \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0438 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 \n                  \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0438 \u0441 ", labelLink: "политикой конфиденциальности", onChange: function (e) { return onChange(e.target.checked); }, checked: value }));
                    } })),
            react_1["default"].createElement(ButtonItem_1["default"], { btnType: "submit", size: "large", type: "solid", className: classes.btn }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442"))));
};
exports["default"] = SignUp;
