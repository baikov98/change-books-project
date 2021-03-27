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
var core_1 = require("@material-ui/core");
var styles_1 = require("./styles");
var react_hook_form_1 = require("react-hook-form");
var ButtonItem_1 = require("../../atoms/ButtonItem");
var InputItem_1 = require("../../atoms/InputItem");
var yup_1 = require("@hookform/resolvers/yup");
var constants_1 = require("../../../constants");
var react_redux_1 = require("react-redux");
var ExchangeStatus = function (_a) {
    var text = _a.text, textTheir = _a.textTheir, id = _a.id, track_my = _a.track_my, track_their = _a.track_their;
    var classes = styles_1.useStyles();
    var dispatch = react_redux_1.useDispatch();
    react_1.useEffect(function () { }, [text, textTheir, track_my, track_their]);
    var _b = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(constants_1.VALIDATION.TRACKING)
    }), handleSubmit = _b.handleSubmit, control = _b.control, errors = _b.errors, reset = _b.reset, setError = _b.setError, clearErrors = _b.clearErrors;
    // FREE = "Свободен"
    // WAIT_CONFIRM = "Ожидается подтверждение"
    // CONFIRMED = "Подтвержден"
    // WAIT_TRACK_NUMBER = "Ожидается трэк-номер"
    // DELIVERING = "Доставляется"
    // COMPLETED = "Завершен"
    var handleAgreeExchangeClick = function () {
        dispatch.activeExchange.agreeExchange(id);
    };
    var submit = function (data) {
        dispatch.activeExchange.trackNumber(id, data.track);
    };
    var handleConfirmRecieveClick = function () {
        dispatch.activeExchange.confirmRecieve(id);
    };
    var test = function () {
        console.log(11);
    };
    switch (text) {
        case 'asd':
            return (react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u041E\u0431\u043C\u0435\u043D \u0441\u043E \u0441\u0442\u043E\u0440\u043E\u043D\u044B \u0434\u0430\u043D\u043D\u043E\u0433\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0435\u0449\u0451 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D!")));
        case "Ожидается подтверждение":
            return (react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u0414\u0430\u043D\u043D\u044B\u0439 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043F\u0440\u0435\u0434\u043B\u0430\u0433\u0430\u0435\u0442 \u0432\u0430\u043C \u043E\u0431\u043C\u0435\u043D!"),
                react_1["default"].createElement(core_1.Typography, { className: classes.explanation }, "\u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u043C\u0435\u043D\u044F\u0442\u044C\u0441\u044F? \u0414\u043B\u044F \u044D\u0442\u043E\u0433\u043E \u0432\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u043C\u0443 \u0437\u0430\u043F\u0440\u043E\u0441, \u043D\u0430\u0436\u0430\u0432 \u043D\u0430 \u043A\u043D\u043E\u043F\u043A\u0443 \u201C\u041C\u0415\u041D\u042F\u042E\u0421\u042C\u201D"),
                react_1["default"].createElement(ButtonItem_1["default"], { className: classes.btn, type: "border", size: "large", onClick: handleAgreeExchangeClick }, "\u041C\u0415\u041D\u042F\u042E\u0421\u042C")));
        case "Подтвержден":
            return (react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u0412\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u043F\u0440\u043E\u0441 \u043D\u0430 \u043E\u0431\u043C\u0435\u043D!"),
                react_1["default"].createElement(core_1.Typography, { className: classes.explanation }, "\u041A\u043E\u0433\u0434\u0430 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0442\u0441\u044F \u043D\u0430 \u043E\u0431\u043C\u0435\u043D, \u0437\u0434\u0435\u0441\u044C \u043F\u043E\u044F\u0432\u0438\u0442\u0441\u044F \u0442\u0440\u0435\u043A \u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u0432\u0432\u043E\u0434\u0430 \u0438 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F")));
        case "Ожидается трэк-номер":
            return (react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u041E\u0431\u043C\u0435\u043D \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043D!"),
                react_1["default"].createElement(core_1.Typography, { className: classes.explanation }, "\u0412\u0430\u043C \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u043A\u043D\u0438\u0433\u0443 \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443, \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043D\u043E\u043C\u0443 \u0432\u0430\u043C \u0432 e-mail, \u043F\u043E\u0441\u043B\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0438 \u043A\u043D\u0438\u0433\u0438 \u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440 \u0434\u043B\u044F \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043F\u043E\u0441\u044B\u043B\u043A\u0438 (\u0443\u043A\u0430\u0437\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0432 \u0447\u0435\u043A\u0435 \u043D\u0430 \u043F\u043E\u0447\u0442\u0435)"),
                react_1["default"].createElement("form", { onSubmit: handleSubmit(submit) },
                    react_1["default"].createElement(react_hook_form_1.Controller, { name: 'track', control: control, rules: { required: true }, defaultValue: "", render: function (props) { return (react_1["default"].createElement(InputItem_1["default"], __assign({ placeholder: "00000000", label: "Трек для отслеживания" }, props))); } }),
                    react_1["default"].createElement(ButtonItem_1["default"], { className: classes.btn, btnType: "submit", type: "solid", size: "large" }, "\u0421\u041E\u0425\u0420\u0410\u041D\u0418\u0422\u042C"))));
        case "Доставляется":
            return (react_1["default"].createElement(react_1["default"].Fragment, null, track_their ?
                react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                    react_1["default"].createElement(core_1.Typography, { className: classes.explanation },
                        "\u0422\u0440\u0435\u043A \u0434\u043B\u044F \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u044F \u043A\u043D\u0438\u0433\u0438: ",
                        track_their,
                        ". \u041D\u0435 \u0437\u0430\u0431\u0443\u0434\u044C\u0442\u0435 \u0443\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u044C \u043D\u0430\u0441, \u043A\u043E\u0433\u0434\u0430 \u043A\u043D\u0438\u0433\u0430 \u0431\u0443\u0434\u0435\u0442 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0430!"),
                    react_1["default"].createElement(ButtonItem_1["default"], { className: classes.btn, btnType: "submit", type: "solid", size: "large", onClick: handleConfirmRecieveClick }, "\u041A\u041D\u0418\u0413\u0410 \u041F\u041E\u041B\u0423\u0427\u0415\u041D\u0410")) :
                react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                    react_1["default"].createElement(core_1.Typography, { className: classes.explanation },
                        "\u041A\u0430\u043A \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0432\u0432\u0435\u0434\u0435\u0442 \u0442\u0440\u0435\u043A-\u043D\u043E\u043C\u0435\u0440 \u043E\u043D \u043E\u0442\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0441\u044F \u0437\u0434\u0435\u0441\u044C. \u0412\u044B \u0432\u0432\u0435\u043B\u0438 \u0442\u0440\u0435\u043A\u043D\u043E\u043C\u0435\u0440: ",
                        track_my))));
        case "Завершен":
            return (react_1["default"].createElement(react_1["default"].Fragment, null, textTheir !== 'Завершен' ? react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u041E\u0431\u043C\u0435\u043D \u0437\u0430\u0432\u0435\u0440\u0448\u0451\u043D")) :
                react_1["default"].createElement(core_1.Box, { className: classes.underBox },
                    react_1["default"].createElement(core_1.Typography, { className: classes.warning }, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0435\u0449\u0435 \u043D\u0435 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u043B \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0435 \u043A\u043D\u0438\u0433\u0438"))));
        default:
            return null;
    }
};
exports["default"] = ExchangeStatus;
