"use strict";
exports.__esModule = true;
exports.api = void 0;
var axios_1 = require("axios");
var CookieService_1 = require("./CookieService");
var defaultOptions = {
    baseURL: window.location.protocol + "//" + window.location.hostname + ":8000",
    //baseURL: `http://books-exchange-dev.spring-intensive-2021.simbirsoft1.com:8000/`, //FOR DEV
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};
exports.api = axios_1["default"].create(defaultOptions);
exports.api.interceptors.request.use(function (config) {
    var token = CookieService_1["default"].get('token');
    config.headers.Authorization = token ? "Bearer " + (token === null || token === void 0 ? void 0 : token.access) : '';
    return config;
});
exports["default"] = exports.api;
