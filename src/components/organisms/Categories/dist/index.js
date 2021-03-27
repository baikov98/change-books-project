"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var styles_1 = require("./styles");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/selectors");
var core_1 = require("@material-ui/core");
var KeyboardArrowRight_1 = require("@material-ui/icons/KeyboardArrowRight");
var FormControlLabel_1 = require("@material-ui/core/FormControlLabel");
var core_2 = require("@material-ui/core");
var bookCategories_1 = require("../../../store/models/bookCategories");
var CheckBox_1 = require("../../atoms/CheckBox");
var Categories = function (_a) {
    var step = _a.step, control = _a.control, data = _a.data, setValue = _a.setValue, checkLimit = _a.checkLimit, getValues = _a.getValues, genresCheck = _a.genresCheck;
    var classes = styles_1.useStyles();
    var listOfCategories = react_redux_1.useSelector(selectors_1.getBookCategories);
    var hangleRemoveAllChecked = function () {
        listOfCategories.forEach(function (val) {
            val.opts.forEach(function (val) {
                setValue(val[1], false);
            });
        });
    };
    var handleRemovedCheckedInCategory = function (category) {
        if (bookCategories_1.onlyOneCheckBoxCategoryArray.includes(category.title[0])) {
            category.opts.forEach(function (val) {
                setValue(val[1], false);
            });
        }
    };
    var handleCheckBoxOnChange = function (props, item) {
        return function (event) {
            if (checkLimit)
                handleRemovedCheckedInCategory(item);
            props.onChange(event.target.checked);
        };
    };
    return (react_1["default"].createElement(core_2.FormControl, { error: !(genresCheck === null || genresCheck === void 0 ? void 0 : genresCheck.current), className: classes.formControl },
        react_1["default"].createElement(core_2.Box, { className: classes.textBox },
            react_1["default"].createElement(core_2.Typography, { className: classes.textGray }, "\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438"),
            react_1["default"].createElement(core_2.Typography, { className: classes.checkBoxRemover, onClick: hangleRemoveAllChecked }, "\u0421\u043D\u044F\u0442\u044C \u0432\u0441\u0435 \u0432\u044B\u0434\u0435\u043B\u0435\u043D\u0438\u044F")),
        react_1["default"].createElement(core_2.Box, null, listOfCategories.map(function (item, index) { return (react_1["default"].createElement(core_1.Accordion, { key: item.title[0] + index, className: classes.accordion },
            react_1["default"].createElement(core_1.AccordionSummary, { expandIcon: react_1["default"].createElement(KeyboardArrowRight_1["default"], null), className: classes.accordionSummary, classes: {
                    expandIcon: classes.expandIcon
                } },
                react_1["default"].createElement(core_2.Typography, { className: classes.accordionTitle }, item.title[0])),
            react_1["default"].createElement(core_1.AccordionDetails, { className: classes.accordionDetails }, item.opts.map(function (val, index) {
                var name = val[1];
                var valuesArray = [];
                data === null || data === void 0 ? void 0 : data.forEach(function (val) {
                    return val.value.forEach(function (i) { return valuesArray.push(i[1]); });
                });
                var defaultValue = valuesArray.some(function (i) { return name === i; });
                return react_1["default"].createElement(core_2.Box, { key: name, className: classes.accordionCheckbox },
                    react_1["default"].createElement(react_hook_form_1.Controller, { name: name, control: control, rules: { required: false }, defaultValue: defaultValue, render: function (props) { return (react_1["default"].createElement(FormControlLabel_1["default"], { control: react_1["default"].createElement(CheckBox_1["default"], { onChange: handleCheckBoxOnChange(props, item), checked: props.value }), label: val[0] })); } }));
            })))); })),
        !(genresCheck === null || genresCheck === void 0 ? void 0 : genresCheck.current) ? (react_1["default"].createElement(core_2.FormHelperText, null, "* \u041D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 1 \u0436\u0430\u043D\u0440")) : null));
};
exports["default"] = Categories;
