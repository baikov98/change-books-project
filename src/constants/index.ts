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
    
    author: 'Введите фамилию и имя автора',
    book: 'Введите название книги',
    year: 'Введите год издания',
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
        password: yup.string().trim().max(64).required(texts.pass),
        confirmPassword: yup.string().trim().max(64).required('Нужно повторить пароль'),
        name: yup.string().trim().max(64).required(texts.name),
        secondName: yup.string().trim().max(64).required(texts.secondName),
        thirdName: yup.string().trim().max(64),
        indexLocation: yup.string().trim().max(64).required(texts.index),
        city: yup.string().trim().max(64).required(texts.city),
        nickname: yup.string().trim().max(64).required(texts.nickname),
        street: yup.string().trim().max(64).required(texts.street),
        homeNumber: yup.string().trim().max(64).required(texts.home),
        buildNumber: yup.string().trim().max(64),
        flatNumber: yup.string().trim().max(64),
    }),
    RESET_PASS: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required("Email обязательное поле"),
    }),
    BOOK_INFO: yup.object().shape({
        author: yup.string().trim().max(50).required(texts.author),
        book: yup.string().trim().max(50).required(texts.book),
        isbn: yup.string().trim().max(13),
        year: yup.string().trim().max(4).required(texts.year),
    }),
    DELIVERY_INFO: yup.object().shape({
        name: yup.string().trim().max(64).required(texts.name),
        secondName: yup.string().trim().max(64).required(texts.secondName),
        thirdName: yup.string().trim().max(64),
        indexLocation: yup.string().trim().max(64).required(texts.index),
        city: yup.string().trim().max(64).required(texts.city),
        street: yup.string().trim().max(64).required(texts.street),
        homeNumber: yup.string().trim().max(64).required(texts.home),
        buildNumber: yup.string().trim().max(64),
        flatNumber: yup.string().trim().max(64),
    }),

}   