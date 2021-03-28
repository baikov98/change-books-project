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
exports.offersExchange = void 0;
var core_1 = require("@rematch/core");
var api_1 = require("../../services/api");
var filterServerData_1 = require("../../utils/filterServerData");
function sortByOfferId(arr) {
    arr.sort(function (a, b) { return a.offerMyId > b.offerMyId ? 1 : -1; });
}
exports.offersExchange = core_1.createModel()({
    state: {
        error: null,
        bookInfo: []
    },
    reducers: {
        SET_OFFERS: function (state, bookInfo) {
            return __assign(__assign({}, state), { bookInfo: bookInfo });
        }
    },
    effects: function (dispatch) {
        return {
            getOffers: function (payload, rootState) {
                return __awaiter(this, void 0, void 0, function () {
                    var response, data, error_1;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                _a.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, api_1["default"].get("/api/v1/request/bookselect")];
                            case 1:
                                response = _a.sent();
                                data = response.data.map(function (item) {
                                    return {
                                        offerMyId: item === null || item === void 0 ? void 0 : item.offer_my.id,
                                        wishMyId: item === null || item === void 0 ? void 0 : item.wish_my.id,
                                        offerTheirId: item === null || item === void 0 ? void 0 : item.offer_their.id,
                                        wishTheirId: item === null || item === void 0 ? void 0 : item.wish_their.id,
                                        authorName: item === null || item === void 0 ? void 0 : item.offer_my.book.author.name,
                                        authorSurname: item === null || item === void 0 ? void 0 : item.offer_my.book.author.last_name,
                                        book: item === null || item === void 0 ? void 0 : item.offer_my.book.name,
                                        user: [
                                            { category: 'Пользователь', value: item === null || item === void 0 ? void 0 : item.offer_user.username },
                                            { category: 'Город', value: item === null || item === void 0 ? void 0 : item.wish_their.address.city },
                                            { category: 'Рейтинг', value: item === null || item === void 0 ? void 0 : item.offer_user.rating },
                                        ],
                                        categories: filterServerData_1["default"](item.offer_their.category, rootState.bookCategories.main)
                                    };
                                });
                                sortByOfferId(data);
                                dispatch.offersExchange.SET_OFFERS(data);
                                return [3 /*break*/, 3];
                            case 2:
                                error_1 = _a.sent();
                                console.error('Failed to GET OFFER DATA - ', error_1);
                                dispatch.offersExchange.SET_OFFERS([]);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            },
            makeOffer: function (_a) {
                var offerMyId = _a.offerMyId, wishMyId = _a.wishMyId, offerTheirId = _a.offerTheirId, wishTheirId = _a.wishTheirId;
                return __awaiter(this, void 0, void 0, function () {
                    var data, response, error_2;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                data = {
                                    offer_my: +offerMyId,
                                    wish_my: +wishMyId,
                                    offer_their: +offerTheirId,
                                    wish_their: +wishTheirId
                                };
                                return [4 /*yield*/, api_1["default"].post("/api/v1/exchange/", data)];
                            case 1:
                                response = _b.sent();
                                return [3 /*break*/, 3];
                            case 2:
                                error_2 = _b.sent();
                                console.error('Failed to GET OFFER DATA - ', error_2);
                                return [3 /*break*/, 3];
                            case 3: return [2 /*return*/];
                        }
                    });
                });
            }
        };
    }
});
var testt = [
    {
        offer_my: {
            "id": 4,
            "book": {
                "author": {
                    "name": "Джоан",
                    "last_name": "Роулинг"
                },
                "name": "Гарри Поттер"
            },
            "isbn": "",
            "year_publishing": 2010,
            "category": [
                {
                    "parent": "Жанр",
                    "name": "Фэнтэзи"
                },
                {
                    "parent": "Жанр",
                    "name": "Юмор"
                },
                {
                    "parent": "Состояние книги",
                    "name": "Потрепана"
                }
            ],
            "status": "Свободен"
        },
        wish_my: {
            "id": 1,
            "status": "Свободен",
            "address": {
                "index": "432056",
                "city": "Moscow",
                "street": "Pushkina",
                "house": "56",
                "structure": "1",
                "apart": "56",
                "is_default": true
            },
            "category": [
                {
                    "parent": "Жанр",
                    "name": "Детектив"
                },
                {
                    "parent": "Состояние книги",
                    "name": "Новая"
                }
            ]
        },
        offer_their: {
            "id": 5,
            "book": {
                "author": {
                    "name": "Артур",
                    "last_name": "Конан Дойл"
                },
                "name": "Шерлок Холмс"
            },
            "isbn": "",
            "year_publishing": 2020,
            "category": [
                {
                    "parent": "Жанр",
                    "name": "Детектив"
                },
                {
                    "parent": "Состояние книги",
                    "name": "Новая"
                }
            ],
            "status": "Свободен"
        },
        wish_their: {
            "id": 2,
            "status": "Свободен",
            "address": {
                "index": "432045",
                "city": "Ulyanovsk",
                "street": "Goncharova",
                "house": "34",
                "structure": "1",
                "apart": "23",
                "is_default": true
            },
            "category": [
                {
                    "parent": "Жанр",
                    "name": "Фэнтэзи"
                },
                {
                    "parent": "Состояние книги",
                    "name": "Потрепана"
                }
            ]
        }
    }
];
