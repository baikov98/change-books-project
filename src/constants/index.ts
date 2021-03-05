import * as yup from "yup";

export const VALIDATION = {
    SIGN_IN: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required("Email обязательное поле"),
        password: yup.string().trim().max(64).required('Вы не указали пароль'),
    }),
    SIGN_UP: yup.object().shape({
        email: yup
        .string()
        .matches(/^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}){0,1}$/, "Email не корректен ")
        .required("Email обязательное поле"),
        password: yup.string().trim().max(64).required('Вы не указали пароль'),
        confirmPassword: yup.string().trim().max(64).required('Нужно повторить пароль'),
    }),
}   