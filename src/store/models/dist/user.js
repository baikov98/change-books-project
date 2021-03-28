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
exports.user = void 0;
var core_1 = require("@rematch/core");
var api_1 = require("../../services/api");
var CookieService_1 = require("../../services/CookieService");
var isObjectEmpty_1 = require("../../utils/isObjectEmpty");
exports.user = core_1.createModel()({
    state: {
        error: null,
        isAuth: false,
        personalData: {}
    },
    reducers: {
        setError: function (state, error) {
            return __assign(__assign({}, state), { error: error });
        },
        resetError: function (state) { return (__assign(__assign({}, state), { error: null })); },
        SET_USER: function (state, personalData) {
            return __assign(__assign({}, state), { personalData: personalData, isAuth: true });
        },
        LOGOUT_USER: function (state) {
            return __assign(__assign({}, state), { personalData: {}, isAuth: false });
        }
    },
    effects: function (dispatch) { return ({
        checkAuth: function (_, rootState) {
            return __awaiter(this, void 0, void 0, function () {
                var user, token;
                return __generator(this, function (_a) {
                    user = (rootState === null || rootState === void 0 ? void 0 : rootState.user).personalData;
                    token = CookieService_1["default"].get('token');
                    if (isObjectEmpty_1.isEmpty(user) && !isObjectEmpty_1.isEmpty(token)) {
                        dispatch.user.getUser();
                    }
                    return [2 /*return*/];
                });
            });
        },
        getUser: function () {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
            return __awaiter(this, void 0, void 0, function () {
                var response, newUser, error_1;
                return __generator(this, function (_u) {
                    switch (_u.label) {
                        case 0:
                            _u.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1["default"].get("/api/v1/profile/")];
                        case 1:
                            response = _u.sent();
                            newUser = {
                                name: (_a = response.data) === null || _a === void 0 ? void 0 : _a.first_name,
                                secondName: (_b = response.data) === null || _b === void 0 ? void 0 : _b.last_name,
                                thirdName: (_c = response.data) === null || _c === void 0 ? void 0 : _c.second_name,
                                nickname: (_d = response.data) === null || _d === void 0 ? void 0 : _d.username,
                                email: (_e = response.data) === null || _e === void 0 ? void 0 : _e.email,
                                rating: (_f = response.data) === null || _f === void 0 ? void 0 : _f.rating,
                                indexLocation: ((_h = (_g = response.data) === null || _g === void 0 ? void 0 : _g.address[0]) === null || _h === void 0 ? void 0 : _h.index) || '',
                                city: ((_k = (_j = response.data) === null || _j === void 0 ? void 0 : _j.address[0]) === null || _k === void 0 ? void 0 : _k.city) || '',
                                street: ((_m = (_l = response.data) === null || _l === void 0 ? void 0 : _l.address[0]) === null || _m === void 0 ? void 0 : _m.street) || '',
                                homeNumber: ((_p = (_o = response.data) === null || _o === void 0 ? void 0 : _o.address[0]) === null || _p === void 0 ? void 0 : _p.house) || '',
                                buildNumber: ((_r = (_q = response.data) === null || _q === void 0 ? void 0 : _q.address[0]) === null || _r === void 0 ? void 0 : _r.structure) || '',
                                flatNumber: ((_t = (_s = response.data) === null || _s === void 0 ? void 0 : _s.address[0]) === null || _t === void 0 ? void 0 : _t.apart) || ''
                            };
                            dispatch.user.SET_USER(newUser);
                            dispatch.user.resetError();
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _u.sent();
                            console.error('Failed to GET USER - ', error_1);
                            dispatch.user.setError("*Данные этого пользователя не найдены");
                            dispatch.user.logout();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        patchUser: function (_a) {
            var secondName = _a.secondName, name = _a.name, thirdName = _a.thirdName, nickname = _a.nickname, email = _a.email, indexLocation = _a.indexLocation, city = _a.city, street = _a.street, homeNumber = _a.homeNumber, buildNumber = _a.buildNumber, flatNumber = _a.flatNumber;
            return __awaiter(this, void 0, void 0, function () {
                var data, newUser, response, error_2;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            data = {
                                first_name: name,
                                last_name: secondName,
                                second_name: thirdName,
                                username: nickname,
                                email: email,
                                address: [{
                                        index: indexLocation,
                                        city: city,
                                        street: street,
                                        house: homeNumber,
                                        structure: buildNumber,
                                        apart: flatNumber
                                    }]
                            };
                            newUser = {
                                secondName: secondName, name: name, thirdName: thirdName, nickname: nickname, email: email, indexLocation: indexLocation, city: city, street: street, homeNumber: homeNumber, buildNumber: buildNumber, flatNumber: flatNumber
                            };
                            return [4 /*yield*/, api_1["default"].patch("/api/v1/profile/", data)];
                        case 1:
                            response = _b.sent();
                            dispatch.user.SET_USER(newUser);
                            dispatch.user.resetError();
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _b.sent();
                            console.error('Failed to GET USER - ', error_2);
                            dispatch.user.setError("*Данные этого пользователя не найдены");
                            dispatch.user.logout();
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        activationAccount: function (_a) {
            var uid = _a.uid, token = _a.token;
            return __awaiter(this, void 0, void 0, function () {
                var response, error_3;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1["default"].post("/api/v1/auth/users/activation/", {
                                    uid: uid,
                                    token: token
                                })];
                        case 1:
                            response = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            error_3 = _b.sent();
                            console.error('Failed to activation account - ', error_3);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        resetPassword: function (_a) {
            var email = _a.email;
            return __awaiter(this, void 0, void 0, function () {
                var response, error_4;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, api_1["default"].post("/api/v1/auth/users/reset_password/", {
                                    email: email
                                })];
                        case 1:
                            response = _b.sent();
                            dispatch.user.resetError();
                            return [3 /*break*/, 3];
                        case 2:
                            error_4 = _b.sent();
                            console.error('Failed to reset password - ', error_4);
                            dispatch.user.setError('*На сервере произошла ошибка или введён не верный Email');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        registration: function (_a) {
            var secondName = _a.secondName, name = _a.name, thirdName = _a.thirdName, nickname = _a.nickname, email = _a.email, password = _a.password, confirmPassword = _a.confirmPassword, indexLocation = _a.indexLocation, city = _a.city, street = _a.street, homeNumber = _a.homeNumber, buildNumber = _a.buildNumber, flatNumber = _a.flatNumber;
            return __awaiter(this, void 0, void 0, function () {
                var data, response, error_5;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            data = {
                                first_name: name,
                                last_name: secondName,
                                second_name: thirdName,
                                username: nickname,
                                email: email,
                                password: password,
                                re_password: confirmPassword,
                                address: {
                                    index: indexLocation,
                                    city: city,
                                    street: street,
                                    house: homeNumber,
                                    structure: buildNumber,
                                    apart: flatNumber
                                }
                            };
                            return [4 /*yield*/, api_1["default"].post("/api/v1/auth/users/", data)];
                        case 1:
                            response = _b.sent();
                            dispatch.user.resetError();
                            return [3 /*break*/, 3];
                        case 2:
                            error_5 = _b.sent();
                            console.error('Failed to registration - ', error_5);
                            dispatch.user.setError('Ошибка в регистрации пользователя');
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        login: function (_a) {
            var _b, _c;
            var email = _a.email, password = _a.password;
            return __awaiter(this, void 0, void 0, function () {
                var data, response, token, error_6;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 2, , 3]);
                            data = {
                                email: email,
                                password: password
                            };
                            return [4 /*yield*/, api_1["default"].post("/api/v1/auth/jwt/create/", data)];
                        case 1:
                            response = _d.sent();
                            console.log("response = ", response);
                            token = {
                                access: (_b = response.data) === null || _b === void 0 ? void 0 : _b.access,
                                refresh: (_c = response.data) === null || _c === void 0 ? void 0 : _c.refresh
                            };
                            CookieService_1["default"].set('token', token, { path: '/' });
                            dispatch.user.getUser();
                            dispatch.user.resetError();
                            return [3 /*break*/, 3];
                        case 2:
                            error_6 = _d.sent();
                            console.error('Failed to auth token - ', error_6);
                            dispatch.user.setError("* Пользователь не найден");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        changeUserData: function (_a) {
            var secondName = _a.secondName, name = _a.name, thirdName = _a.thirdName, nickname = _a.nickname, email = _a.email, indexLocation = _a.indexLocation, city = _a.city, street = _a.street, homeNumber = _a.homeNumber, buildNumber = _a.buildNumber, flatNumber = _a.flatNumber;
            return __awaiter(this, void 0, void 0, function () {
                var data, response, error_7;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            data = {
                                email: email,
                                name: name,
                                secondName: secondName,
                                thirdName: thirdName,
                                username: nickname,
                                postcode: indexLocation,
                                city: city,
                                street: street,
                                homeNumber: homeNumber,
                                buildNumber: buildNumber,
                                flatNumber: flatNumber
                            };
                            return [4 /*yield*/, api_1["default"].post("/auth/token", data)];
                        case 1:
                            response = _b.sent();
                            console.log(response);
                            return [3 /*break*/, 3];
                        case 2:
                            error_7 = _b.sent();
                            console.error('Failed to change person data - ', error_7);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        },
        logout: function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    CookieService_1["default"].remove('token', { path: '/' });
                    dispatch.user.LOGOUT_USER();
                    return [2 /*return*/];
                });
            });
        }
    }); }
});
