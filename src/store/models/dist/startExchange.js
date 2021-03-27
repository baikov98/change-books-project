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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.startExchange = void 0;
var core_1 = require("@rematch/core");
var api_1 = require("../../services/api");
exports.startExchange = core_1.createModel()({
    state: {
        step: 0,
        data: {
            step1: {},
            step2: {},
            step3: {}
        }
    },
    reducers: {
        SET_EXCHANGE_STEP: function (state, payload) {
            return __assign(__assign({}, state), { step: payload });
        },
        SET_EXCHANGE_DATA: function (state, payload) {
            return __assign(__assign({}, state), { data: __assign(__assign({}, state.data), payload) });
        },
        CLEAR_DATA: function (state) {
            return __assign(__assign({}, state), { step: 0, data: {
                    step1: {},
                    step2: {},
                    step3: {}
                } });
        }
    },
    effects: function (dispatch) {
        var startExchange = dispatch.startExchange;
        return {
            requestOfferList: function (offerData, rootState) {
                return __awaiter(this, void 0, void 0, function () {
                    var genreArray, data, response, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                genreArray = offerData.categories.map(function (item) { return (item.value.map(function (val) { return ({
                                    name: val[0],
                                    children: []
                                }); })); });
                                data = {
                                    book: {
                                        author: {
                                            name: offerData.authorName,
                                            last_name: offerData.authorSurname
                                        },
                                        name: offerData.book
                                    },
                                    isbn: offerData.isbn || '',
                                    year_publishing: +offerData.year,
                                    categories: genreArray.flat()
                                };
                                return [4 /*yield*/, api_1["default"].post("/api/v1/request/offerlist", data)];
                            case 1:
                                response = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                console.error('Failed to send offer data - ', error_1);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
            requestWishList: function (deliveryData, rootState) {
                return __awaiter(this, void 0, void 0, function () {
                    var offerData, genreArray, data, response, error_2;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                offerData = rootState.startExchange.data.step2;
                                genreArray = offerData.categories.map(function (item) { return (item.value.map(function (val) { return ({
                                    name: val[0],
                                    children: []
                                }); })); });
                                data = {
                                    address: {
                                        index: deliveryData.indexLocation,
                                        city: deliveryData.city,
                                        street: deliveryData.street,
                                        house: deliveryData.homeNumber,
                                        structure: deliveryData.buildNumber,
                                        apart: deliveryData.flatNumber,
                                        is_default: !!deliveryData.is_default
                                    },
                                    categories: genreArray.flat()
                                };
                                return [4 /*yield*/, api_1["default"].post("/api/v1/request/wishlist", data)];
                            case 1:
                                response = _a.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _a.sent();
                                console.error('Failed to send wish data - ', error_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
            getPersonalData: function (payload, rootState) {
                return __awaiter(this, void 0, void 0, function () {
                    var data;
                    return __generator(this, function (_a) {
                        try {
                            data = rootState.user.personalData;
                            startExchange.SET_EXCHANGE_DATA({
                                step3: {
                                    name: data === null || data === void 0 ? void 0 : data.name,
                                    secondName: data === null || data === void 0 ? void 0 : data.secondName,
                                    thirdName: data === null || data === void 0 ? void 0 : data.thirdName,
                                    indexLocation: data === null || data === void 0 ? void 0 : data.indexLocation,
                                    city: data === null || data === void 0 ? void 0 : data.city,
                                    street: data === null || data === void 0 ? void 0 : data.street,
                                    homeNumber: data === null || data === void 0 ? void 0 : data.homeNumber,
                                    buildNumber: data === null || data === void 0 ? void 0 : data.buildNumber,
                                    flatNumber: data === null || data === void 0 ? void 0 : data.flatNumber
                                }
                            });
                        }
                        catch (error) {
                            console.error('Failed to get personal data - ', error);
                        }
                        return [2 /*return*/];
                    });
                });
            }
        };
    }
});
