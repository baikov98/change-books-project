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
exports.activeExchange = void 0;
var core_1 = require("@rematch/core");
var api_1 = require("../../services/api");
var list1 = [
    {
        offerMyId: '1',
        wishMyId: '1',
        offerTheirId: '1',
        wishTheirId: '1',
        authorName: 'name',
        authorSurname: 'surname',
        book: 'book',
        status: 'Свободен',
        trackMy: 'string',
        trackTheir: 'string',
        bookCategories: [
            { category: 'Жанр', value: 'string' },
            { category: 'Состояние', value: 'string' },
            { category: 'Дополнительно', value: 'string' },
        ],
        user: [
            { category: 'Пользователь', value: 'string' },
            { category: 'Город', value: 'string' },
            { category: 'Рейтинг', value: 'string' },
        ],
        categories: [
            { category: 'Жанр', value: 'string' },
            { category: 'Состояние', value: 'string' },
            { category: 'Дополнительно', value: 'string' },
        ]
    }
];
exports.activeExchange = core_1.createModel()({
    state: {
        error: null,
        list: []
    },
    reducers: {
        setError: function (state, error) {
            return __assign(__assign({}, state), { error: error });
        },
        SET_LIST: function (state, list) {
            return __assign(__assign({}, state), { list: list });
        }
    },
    effects: function (dispatch) { return ({
        getActiveList: function (_, rootState) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var username_1, response, data, error_1;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _c.trys.push([0, 2, , 3]);
                            username_1 = (_b = (_a = rootState === null || rootState === void 0 ? void 0 : rootState.user) === null || _a === void 0 ? void 0 : _a.personalData) === null || _b === void 0 ? void 0 : _b.nickname;
                            return [4 /*yield*/, api_1["default"].get("/api/v1/exchange/")];
                        case 1:
                            response = _c.sent();
                            data = response.data.map(function (item) {
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3;
                                if (item.user_my === username_1) {
                                    return {
                                        //КОГДА я нажал кнопку МЕНЯЮСЬ
                                        offerMyId: item === null || item === void 0 ? void 0 : item.offer_my.id,
                                        wishMyId: item === null || item === void 0 ? void 0 : item.wish_my.id,
                                        offerTheirId: item === null || item === void 0 ? void 0 : item.offer_their.id,
                                        wishTheirId: item === null || item === void 0 ? void 0 : item.wish_their.id,
                                        authorName: (_c = (_b = (_a = item === null || item === void 0 ? void 0 : item.offer_my) === null || _a === void 0 ? void 0 : _a.book) === null || _b === void 0 ? void 0 : _b.author) === null || _c === void 0 ? void 0 : _c.name,
                                        authorSurname: (_f = (_e = (_d = item === null || item === void 0 ? void 0 : item.offer_my) === null || _d === void 0 ? void 0 : _d.book) === null || _e === void 0 ? void 0 : _e.author) === null || _f === void 0 ? void 0 : _f.last_name,
                                        book: (_h = (_g = item === null || item === void 0 ? void 0 : item.offer_my) === null || _g === void 0 ? void 0 : _g.book) === null || _h === void 0 ? void 0 : _h.name,
                                        status_my: (_j = item === null || item === void 0 ? void 0 : item.offer_my) === null || _j === void 0 ? void 0 : _j.status,
                                        status_their: (_k = item === null || item === void 0 ? void 0 : item.offer_their) === null || _k === void 0 ? void 0 : _k.status,
                                        trackMy: item === null || item === void 0 ? void 0 : item.track_number_my,
                                        trackTheir: item === null || item === void 0 ? void 0 : item.track_number_their,
                                        bookCategories: (_m = (_l = item === null || item === void 0 ? void 0 : item.offer_my) === null || _l === void 0 ? void 0 : _l.category) === null || _m === void 0 ? void 0 : _m.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); }),
                                        user: [
                                            { category: 'Пользователь', value: item === null || item === void 0 ? void 0 : item.user_their },
                                            { category: 'Город', value: item === null || item === void 0 ? void 0 : item.wish_their.address.city },
                                            { category: 'Рейтинг', value: item === null || item === void 0 ? void 0 : item.offer_their.rating },
                                        ],
                                        categories: (_p = (_o = item === null || item === void 0 ? void 0 : item.offer_their) === null || _o === void 0 ? void 0 : _o.category) === null || _p === void 0 ? void 0 : _p.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); })
                                    };
                                }
                                else {
                                    //КОГДА КТО-ТО нажал кнопку МЕНЯЮСЬ
                                    return {
                                        offerMyId: item === null || item === void 0 ? void 0 : item.offer_my.id,
                                        wishMyId: item === null || item === void 0 ? void 0 : item.wish_my.id,
                                        offerTheirId: item === null || item === void 0 ? void 0 : item.offer_their.id,
                                        wishTheirId: item === null || item === void 0 ? void 0 : item.wish_their.id,
                                        authorName: (_s = (_r = (_q = item === null || item === void 0 ? void 0 : item.offer_their) === null || _q === void 0 ? void 0 : _q.book) === null || _r === void 0 ? void 0 : _r.author) === null || _s === void 0 ? void 0 : _s.name,
                                        authorSurname: (_v = (_u = (_t = item === null || item === void 0 ? void 0 : item.offer_their) === null || _t === void 0 ? void 0 : _t.book) === null || _u === void 0 ? void 0 : _u.author) === null || _v === void 0 ? void 0 : _v.last_name,
                                        book: (_x = (_w = item === null || item === void 0 ? void 0 : item.offer_their) === null || _w === void 0 ? void 0 : _w.book) === null || _x === void 0 ? void 0 : _x.name,
                                        status_my: (_y = item === null || item === void 0 ? void 0 : item.offer_my) === null || _y === void 0 ? void 0 : _y.status,
                                        status_their: (_z = item === null || item === void 0 ? void 0 : item.offer_their) === null || _z === void 0 ? void 0 : _z.status,
                                        trackMy: item === null || item === void 0 ? void 0 : item.track_number_their,
                                        trackTheir: item === null || item === void 0 ? void 0 : item.track_number_my,
                                        bookCategories: (_1 = (_0 = item === null || item === void 0 ? void 0 : item.offer_their) === null || _0 === void 0 ? void 0 : _0.category) === null || _1 === void 0 ? void 0 : _1.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); }),
                                        user: [
                                            { category: 'Пользователь', value: item === null || item === void 0 ? void 0 : item.user_my },
                                            { category: 'Город', value: item === null || item === void 0 ? void 0 : item.wish_my.address.city },
                                            { category: 'Рейтинг', value: item === null || item === void 0 ? void 0 : item.offer_my.rating },
                                        ],
                                        categories: (_3 = (_2 = item === null || item === void 0 ? void 0 : item.offer_my) === null || _2 === void 0 ? void 0 : _2.category) === null || _3 === void 0 ? void 0 : _3.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); })
                                    };
                                }
                            });
                            dispatch.activeExchange.SET_LIST(data);
                            dispatch.activeExchange.setError(null);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _c.sent();
                            console.error('Failed to GET ACTIVE EXCHANGE- ', error_1);
                            dispatch.activeExchange.setError("Ошибка получения активных обменов");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        agreeExchange: function (id, rootState) {
            return __awaiter(this, void 0, void 0, function () {
                var data, response, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            data = rootState.activeExchange.list.find(function (el) { return +el.offerMyId === +id; });
                            return [4 /*yield*/, api_1["default"].post("/api/v1/exchange", { offer_my: data === null || data === void 0 ? void 0 : data.offerTheirId,
                                    wish_my: data === null || data === void 0 ? void 0 : data.wishTheirId,
                                    offer_their: data === null || data === void 0 ? void 0 : data.offerMyId,
                                    wish_their: data === null || data === void 0 ? void 0 : data.wishMyId
                                })];
                        case 1:
                            response = _a.sent();
                            console.log(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error('Failed to agreeExchange - ', error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        trackNumber: function (id, trackNum, rootState) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    try {
                        console.log(id, trackNum, rootState);
                        /*const response = await api.patch(`/api/v1/exchange/tracknumber/`,
                                                        {
                                                          offer: id,
                                                          track_number: "123123212"
                                                        });
                        console.log(response.data) */
                    }
                    catch (error) {
                        console.error('Failed to trackNumber - ', error);
                    }
                    return [2 /*return*/];
                });
            });
        },
        confirmRecieve: function (id, rootState) {
            return __awaiter(this, void 0, void 0, function () {
                var response, error_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1["default"].patch("/api/v1/exchange/confirm_recieve/", {
                                    offer: id,
                                    is_received: true
                                })];
                        case 1:
                            response = _a.sent();
                            console.log(response.data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _a.sent();
                            console.error('Failed to confirmRecieve - ', error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    }); }
});
