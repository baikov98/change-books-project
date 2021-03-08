import * as yup from "yup";


export const baseURL = ''

const texts = {
    pass: 'Вы не указали пароль',
    email: 'Email обязательное поле',
    name: 'Имя обязательное поле',
    secondName: 'Фимилия обязательное поле',
    city: 'Город обязательное поле',
    index: 'Индекс обязательное поле',
    nickname: 'Никнейм обязательное поле',
    street: 'Улица обязательное поле',
    home: 'Номер дома обязательное поле',
}

export const VALIDATION = {
    SIGN_IN: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required(texts.email),
        password: yup.string().trim().max(64).required(texts.pass),
    }),
    SIGN_UP: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required("Email обязательное поле"),
        password: yup.string().trim().min(8, 'Минимальная длина 8 символов').max(64).matches(/^((?=.*?[A-Z])(?=.*?[a-z]))|((?=.*?[А-Я])(?=.*?[а-я]))(?=.*?[0-9])[a-zA-ZА-Яа-я\d]$/, 'Пароль должен содержать заглавную букву и число').required(texts.pass),
        confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required('Нужно повторить пароль'),
        name: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.name),
        secondName: yup.string().trim().max(50, 'Максимальная длина 50 символов').required(texts.secondName),
        thirdName: yup.string().trim().max(25, 'Максимальная длина 25 символов'),
        indexLocation: yup.string().trim().required(texts.index).matches(/^\d+$/, 'Разрешены только цифры').max(6, 'Максимальная длина 6 символов'),
        city: yup.string().trim().max(20, 'Максимальная длина 20 символов').required(texts.city).matches(/^[а-яА-Я- ]+$/, 'Разрешена только кириллица'),
        nickname: yup.string().matches(/^([a-zA-Z][a-zA-Z0-9-_\.]+)|([А-Яа-я][А-Яа-я0-9-_\.]+){1,50}$/, 'Вы используете запрещенные символы').trim().max(50, 'Максимальная длина 50 символов').required(texts.nickname),
        street: yup.string().trim().max(64).required(texts.street),
        homeNumber: yup.string().trim().max(64).required(texts.home),
        buildNumber: yup.string().trim().max(64),
        flatNumber: yup.string().trim().max(64),
        terms: yup.boolean().oneOf([true], 'Данное поле должно быть выбранно').required('Это обязательное поле')
    }),
    RESET_PASS: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required("Email обязательное поле"),
    }),
}   