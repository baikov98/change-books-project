import * as yup from "yup";
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
    authorName: 'Введите имя автора',
    authorSurname: 'Введите фамилию автора',
    book: 'Введите название книги',
    year: 'Введите год издания',
}

export const baseURL = ''


const emailMatches = /^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/

export const VALIDATION = {
    SIGN_IN: yup.object().shape({
        email: yup
        .string()
        .matches(emailMatches, "Email не корректен ")
        .required(texts.email),
        password: yup.string().trim().max(64).required(texts.pass),
    }),
    SIGN_UP: yup.object().shape({
        email: yup
        .string()
        .matches(emailMatches, "Email не корректен ")
        .required("Email обязательное поле"),
        password: yup.string().trim().required(texts.pass).min(8, 'Минимальная длина 8 символов').max(64).matches(/^((?=.*?[A-Z])(?=.*?[a-z]))|((?=.*?[А-Я])(?=.*?[а-я]))(?=.*?[0-9])[a-zA-ZА-Яа-я\d]$/, 'Пароль должен содержать заглавную букву и число'),
        confirmPassword: yup.string().trim().oneOf([yup.ref('password'), null], 'Пароли должны совпадать').required('Нужно повторить пароль'),
        name: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.name).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        secondName: yup.string().trim().max(50, 'Максимальная длина 50 символов').required(texts.secondName).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        thirdName: yup.string().trim().max(25, 'Максимальная длина 25 символов').matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        indexLocation: yup.string().trim().required(texts.index).matches(/^\d+$/, 'Разрешены только цифры').max(6, 'Максимальная длина 6 символов'),
        city: yup.string().trim().max(20, 'Максимальная длина 20 символов').required(texts.city).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        nickname: yup.string().required(texts.nickname).matches(/^([a-zA-Z][a-zA-Z0-9-_\.]+)|([А-Яа-я][А-Яа-я0-9-_\.]+){1,50}$/, 'Вы используете запрещенные символы').trim().max(50, 'Максимальная длина 50 символов'),
        street: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.street).matches(/^[а-яА-Я\d- ]+$/, 'Разрешена только кириллица и цифры'),
        homeNumber: yup.string().trim().max(5, 'Максимальная длина 5 символов').required(texts.home).matches(/\d+[а-я]{0,1}/i, 'Разрешены только цифры и одна буква'),
        buildNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d]{0,2}[а-я]{0,1}$/, 'Разрешены только цифры и одна буква'),
        flatNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d ]{0,3}$/, 'Разрешены только цифры'),
        terms: yup.boolean().oneOf([true], 'Данное поле должно быть выбранно').required('Это обязательное поле')
    }),
    PERSONAL_DATA: yup.object().shape({
        email: yup
        .string()
        .matches(emailMatches, "Email не корректен ")
        .required("Email обязательное поле"),
        name: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.name).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        secondName: yup.string().trim().max(50, 'Максимальная длина 50 символов').required(texts.secondName).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        thirdName: yup.string().trim().max(25, 'Максимальная длина 25 символов').matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        indexLocation: yup.string().trim().required(texts.index).matches(/^\d+$/, 'Разрешены только цифры').max(6, 'Максимальная длина 6 символов'),
        city: yup.string().trim().max(20, 'Максимальная длина 20 символов').required(texts.city).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        nickname: yup.string().required(texts.nickname).matches(/^([a-zA-Z][a-zA-Z0-9-_\.]+)|([А-Яа-я][А-Яа-я0-9-_\.]+){1,50}$/, 'Вы используете запрещенные символы').trim().max(50, 'Максимальная длина 50 символов'),
        street: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.street).matches(/^[а-яА-Я\d- ]+$/, 'Разрешена только кириллица и цифры'),
        homeNumber: yup.string().trim().max(5, 'Максимальная длина 5 символов').required(texts.home).matches(/\d+[а-я]{0,1}/i, 'Разрешены только цифры и одна буква'),
        buildNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d]{0,2}[а-я]{0,1}$/, 'Разрешены только цифры и одна буква'),
        flatNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d ]{0,3}$/, 'Разрешены только цифры'),
    }),
    RESET_PASS: yup.object().shape({
        email: yup
        .string()
        .matches(emailMatches, "Email не корректен ")
        .required("Email обязательное поле"),
    }),
    BOOK_INFO: yup.object().shape({
        authorName: yup.string().required(texts.authorName).matches(/^([a-zA-Z][a-zA-Z\.]+)|([А-Яа-я][А-Яа-я\.]+){1,20}$/, 'Вы используете запрещенные символы').trim().max(20, 'Максимальная длина 20 символов'),
        authorSurname: yup.string().required(texts.authorSurname).matches(/^([a-zA-Z][a-zA-Z\.]+)|([А-Яа-я][А-Яа-я\.]+){1,50}$/, 'Вы используете запрещенные символы').trim().max(50, 'Максимальная длина 50 символов'),
        book: yup.string().required(texts.book).matches(/^([a-zA-Z][a-zA-Z0-9-_\.]+)|([А-Яа-я][А-Яа-я0-9-_\.]+){1,50}$/, 'Вы используете запрещенные символы').trim().max(50, 'Максимальная длина 50 символов'),
        isbn: yup.string().trim().matches(/^$|^(97[89]-\d{1,5}|\d{1,5})-\d{1,7}-\d{1,6}-\d$/, 'Некорректное значение').max(17, 'Максимальная длина 17 символов'),
        year: yup.string().trim().required(texts.year).matches(/(^1\d{3}|^20[01]\d|^202[01])/, 'Некорректное значение').max(4, 'Максимальная длина 4 символа'),
    }),
    DELIVERY_INFO: yup.object().shape({
        name: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.name).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        secondName: yup.string().trim().max(50, 'Максимальная длина 50 символов').required(texts.secondName).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        thirdName: yup.string().trim().max(25, 'Максимальная длина 25 символов').matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        indexLocation: yup.string().trim().required(texts.index).matches(/^\d+$/, 'Разрешены только цифры').max(6, 'Максимальная длина 6 символов'),
        city: yup.string().trim().max(20, 'Максимальная длина 20 символов').required(texts.city).matches(/^[-а-яА-ЯёЁ]+$/, 'Разрешена только кириллица'),
        street: yup.string().trim().max(25, 'Максимальная длина 25 символов').required(texts.street).matches(/^[а-яА-Я\d- ]+$/, 'Разрешена только кириллица и цифры'),
        homeNumber: yup.string().trim().max(5, 'Максимальная длина 5 символов').required(texts.home).matches(/\d+[а-я]{0,1}/i, 'Разрешены только цифры и одна буква'),
        buildNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d]{0,2}[а-я]{0,1}$/, 'Разрешены только цифры и одна буква'),
        flatNumber: yup.string().trim().max(3, 'Максимальная длина 3 символа').matches(/[\d ]{0,3}$/, 'Разрешены только цифры'),
    }),
    TRACKING: yup.object().shape({
        track: yup.string().trim().max(15).required('Введите трек номер'),
    }),
    FEEDBACK: {
        AUTH: yup.object().shape({
            topic: yup.string().trim().max(100).required('Укажите пожалуйста тему обращения'),
            text: yup.string().trim().max(1024).required('Это поле не может быть пустым'),
        }),
        NOT_AUTH: yup.object().shape({
            topic: yup.string().trim().max(100).required('Укажите пожалуйста тему обращения'),
            text: yup.string().trim().max(1024).required('Это поле не может быть пустым'),
            name: yup.string().trim().max(64).required(texts.name),
            secondName: yup.string().trim().max(64).required(texts.secondName),
            email: yup
            .string()
            .matches(emailMatches, "Email не корректен ")
            .required("Email обязательное поле"),
            terms: yup.boolean().oneOf([true], 'Данное поле должно быть выбранно').required('Это обязательное поле')
        }),
        
    },
}   