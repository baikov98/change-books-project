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
exports.navbar = void 0;
var core_1 = require("@rematch/core");
var routes_1 = require("../../routes");
var initialState = {
    list: [
        {
            title: "Предложения для обмена",
            link: routes_1.routes.offer
        },
        {
            title: "Хочу обменять",
            link: routes_1.routes.giveaway
        },
        {
            title: "Хочу получить",
            link: routes_1.routes.recieve
        },
        {
            title: "Активные обмены",
            link: routes_1.routes.active
        },
        {
            title: "Отзывы на книгу",
            link: routes_1.routes.review
        },
        {
            title: "Личные данные",
            link: routes_1.routes.personal
        },
        {
            title: "Сообщения",
            link: routes_1.routes.messages
        },
        {
            title: "Архив",
            link: routes_1.routes.archive
        },
        {
            title: "Выйти",
            link: routes_1.routes.exit
        },
    ]
};
exports.navbar = core_1.createModel()({
    state: __assign({ error: null }, initialState),
    reducers: {}
});
