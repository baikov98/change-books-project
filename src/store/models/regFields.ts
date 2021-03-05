import { createModel } from "@rematch/core";
import { RootModel } from ".";


export interface IRegFields {
  name: string;
  required: boolean;
  label: string;
  type: string;
  placeholder: string;
}

const initialState = {
   main: [
     {
      name: "secondName",
      required: true,
      label: 'Фамилия *',
      type: '',
      placeholder: 'Введите фамилию',
     },
     {
      name: "name",
      required: true,
      label: 'Имя *',
      type: '',
      placeholder: 'Введите имя',
     },
     {
      name: "thirdName",
      required: false,
      label: 'Отчество',
      type: '',
      placeholder: 'Введите отчество',
     },
     {
      name: "nickname",
      required: true,
      label: 'Ник *',
      type: '',
      placeholder: 'Придумайте никнейм',
     },
     {
      name: "email",
      required: true,
      label: 'Email*:',
      type: '',
      placeholder: 'Введите Email',
     },
     {
      name: "password",
      required: true,
      label: 'Пароль*:',
      type: 'password',
      placeholder: 'Введите пароль',
     },
     {
      name: "confirmPassword",
      required: true,
      label: 'Повторный ввод пароля:',
      type: 'password',
      placeholder: 'Подтвердите пароль',
     },
     
   ],
   adress: [
        {
        name: "indexLocation",
        required: true,
        label: 'Индекс*:',
        type: '',
        placeholder: 'Введите индекс',
       },
        {
        name: "city",
        required: true,
        label: 'Город*:',
        type: '',
        placeholder: 'Введите город',
       },
        {
        name: "street",
        required: true,
        label: 'Улица*:',
        type: '',
        placeholder: 'Введите улицу',
       },
        {
        name: "homeNumber",
        required: true,
        label: 'Номер дома*:',
        type: '',
        placeholder: 'Номер дома',
       },
        {
        name: "buildNumber",
        required: true,
        label: 'Номер корпуса/строения',
        type: '',
        placeholder: 'Номер корпуса/строения',
       },
        {
        name: "flatNumber",
        required: true,
        label: 'Номер квартиры',
        type: '',
        placeholder: 'Номер квартиры',
       },
   ],
}

export const regFields = createModel<RootModel>()({
  state: {
    error: null,
    ...initialState,
  },
});
