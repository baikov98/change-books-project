"use strict";
exports.__esModule = true;
var react_1 = require("react");
var styles_1 = require("./styles");
var react_redux_1 = require("react-redux");
var selectors_1 = require("../../../store/selectors");
var react_hook_form_1 = require("react-hook-form");
var core_1 = require("@material-ui/core");
var filterFormData_1 = require("../../../utils/filterFormData");
var genresChecker_1 = require("../../../utils/genresChecker");
var CatAndValue_1 = require("../../atoms/CatAndValue");
var EditButton_1 = require("../../atoms/EditButton");
var Categories_1 = require("../Categories");
var ButtonItem_1 = require("../../atoms/ButtonItem");
var BookForWish = function (_a) {
    var data = _a.data, bookNum = _a.bookNum, objectKey = _a.objectKey, editable = _a.editable, handleEditable = _a.handleEditable;
    var _b = react_1.useState(false), editState = _b[0], setEditState = _b[1];
    var genresCheck = react_1.useRef(true);
    var dispatch = react_redux_1.useDispatch();
    var listOfCategories = react_redux_1.useSelector(selectors_1.getBookCategories);
    var handleSwitchEditState = function () {
        setEditState(!editState);
    };
    var handleEditButtonClick = function () {
        if (editable) {
            setEditState(!editState);
            handleEditable(false);
        }
    };
    var classes = styles_1.useStyles();
    var _c = react_hook_form_1.useForm({}), setValue = _c.setValue, handleSubmit = _c.handleSubmit, control = _c.control, errors = _c.errors;
    var bookDetailsArray = data === null || data === void 0 ? void 0 : data.categories.map(function (item) {
        var value = item.value.map(function (i) { return i[0]; });
        return react_1["default"].createElement(CatAndValue_1["default"], { key: item.category, category: item.category, value: value.join(', ') });
    });
    var submit = function (formData) {
        genresCheck.current = genresChecker_1["default"](formData);
        var filteredData = filterFormData_1["default"](formData, listOfCategories);
        if (genresCheck.current) {
            handleEditable(true);
            handleSwitchEditState();
        }
    };
    var handleEditFormSubmit = handleSubmit(submit);
    var bookFormItem = react_1["default"].createElement("form", null,
        react_1["default"].createElement(core_1.Box, null,
            react_1["default"].createElement(Categories_1["default"], { step: 3, control: control, data: data.categories, setValue: setValue, genresCheck: genresCheck })),
        react_1["default"].createElement(ButtonItem_1["default"], { size: 'large', type: 'solid', onClick: handleEditFormSubmit, className: classes.btnSave }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"));
    var bookInfoItem = react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(core_1.Box, { className: classes.header },
            react_1["default"].createElement(core_1.Box, { className: classes.title }, "\u041A\u043D\u0438\u0433\u0430 " + (bookNum + 1)),
            react_1["default"].createElement(EditButton_1["default"], { onClick: handleEditButtonClick })),
        react_1["default"].createElement(core_1.Box, { className: classes.content }, bookDetailsArray));
    return (react_1["default"].createElement(core_1.Box, null,
        editState ? bookFormItem : bookInfoItem,
        react_1["default"].createElement(core_1.Box, { className: classes.bottomLine })));
};
exports["default"] = BookForWish;
