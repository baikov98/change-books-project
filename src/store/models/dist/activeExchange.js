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
var list = [
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
var listResponse = [
    {
        offer_my: {
            id: 4,
            book: {
                author: {
                    id: 1,
                    name: "Джоан",
                    last_name: "Роулинг"
                },
                name: "Гарри Поттер",
                note: "Колдунство"
            },
            isbn: "",
            year_publishing: 2010
        },
        wish_my: {
            id: 1,
            address: {
                index: "432056",
                city: "ывап",
                street: "ывап",
                house: "56",
                structure: "1",
                apart: "56",
                is_default: true
            }
        },
        offer_their: {
            id: 5,
            book: {
                author: {
                    id: 5,
                    name: "Артур",
                    last_name: "Конан Дойл"
                },
                name: "Шерлок Холмс",
                note: "Убийца - дворецкий."
            },
            isbn: "",
            year_publishing: 2020
        },
        wish_their: {
            id: 2,
            address: {
                index: "432045",
                city: "Ulyanovsk",
                street: "Goncharova",
                house: "34",
                structure: "1",
                apart: "23",
                is_default: true
            }
        },
        is_both: false,
        track_number_my: null,
        track_number_their: null,
        user_my: "test_user",
        user_their: "titaniumslava"
    }
];
exports.activeExchange = core_1.createModel()({
    state: {
        error: null,
        list: list
    },
    reducers: {
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
                                var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1;
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
                                        status: (_j = item === null || item === void 0 ? void 0 : item.offer_their) === null || _j === void 0 ? void 0 : _j.status,
                                        trackMy: item === null || item === void 0 ? void 0 : item.track_number_my,
                                        trackTheir: item === null || item === void 0 ? void 0 : item.track_number_their,
                                        bookCategories: (_l = (_k = item === null || item === void 0 ? void 0 : item.offer_my) === null || _k === void 0 ? void 0 : _k.category) === null || _l === void 0 ? void 0 : _l.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); }),
                                        user: [
                                            { category: 'Пользователь', value: item === null || item === void 0 ? void 0 : item.offer_user.username },
                                            { category: 'Город', value: item === null || item === void 0 ? void 0 : item.wish_their.address.city },
                                            { category: 'Рейтинг', value: item === null || item === void 0 ? void 0 : item.offer_user.rating },
                                        ],
                                        categories: (_o = (_m = item === null || item === void 0 ? void 0 : item.offer_their) === null || _m === void 0 ? void 0 : _m.category) === null || _o === void 0 ? void 0 : _o.map(function (i) { return ({
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
                                        authorName: (_r = (_q = (_p = item === null || item === void 0 ? void 0 : item.offer_their) === null || _p === void 0 ? void 0 : _p.book) === null || _q === void 0 ? void 0 : _q.author) === null || _r === void 0 ? void 0 : _r.name,
                                        authorSurname: (_u = (_t = (_s = item === null || item === void 0 ? void 0 : item.offer_their) === null || _s === void 0 ? void 0 : _s.book) === null || _t === void 0 ? void 0 : _t.author) === null || _u === void 0 ? void 0 : _u.last_name,
                                        book: (_w = (_v = item === null || item === void 0 ? void 0 : item.offer_their) === null || _v === void 0 ? void 0 : _v.book) === null || _w === void 0 ? void 0 : _w.name,
                                        status: (_x = item === null || item === void 0 ? void 0 : item.offer_my) === null || _x === void 0 ? void 0 : _x.status,
                                        trackMy: item === null || item === void 0 ? void 0 : item.track_number_my,
                                        trackTheir: item === null || item === void 0 ? void 0 : item.track_number_their,
                                        bookCategories: (_z = (_y = item === null || item === void 0 ? void 0 : item.offer_their) === null || _y === void 0 ? void 0 : _y.category) === null || _z === void 0 ? void 0 : _z.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); }),
                                        user: [
                                            { category: 'Пользователь', value: item === null || item === void 0 ? void 0 : item.user_their },
                                            { category: 'Город', value: item === null || item === void 0 ? void 0 : item.wish_my.address.city },
                                            { category: 'Рейтинг', value: item === null || item === void 0 ? void 0 : item.offer_user.rating },
                                        ],
                                        categories: (_1 = (_0 = item === null || item === void 0 ? void 0 : item.offer_my) === null || _0 === void 0 ? void 0 : _0.category) === null || _1 === void 0 ? void 0 : _1.map(function (i) { return ({
                                            category: i.parent,
                                            value: i.name
                                        }); })
                                    };
                                }
                            });
                            dispatch.activeExchange.SET_LIST(data);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _c.sent();
                            console.error('Failed to GET ACTIVE EXCHANGE- ', error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
    }); }
});
