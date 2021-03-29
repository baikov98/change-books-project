import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
   main: [
     {
      name: "secondName",
      required: true,
      label: 'Фамилия*:',
      type: '',
      placeholder: 'Введите фамилию',
      error: 'secondName',
     },
     {
      name: "name",
      required: true,
      label: 'Имя*:',
      type: '',
      placeholder: 'Введите имя',
      error: 'name',
     },
     {
      name: "thirdName",
      required: true,
      label: 'Отчество*:',
      type: '',
      placeholder: 'Введите отчество',
      error: 'thirdName',
     },
     {
      name: "nickname",
      required: true,
      label: 'Ник*:',
      type: '',
      placeholder: 'Придумайте никнейм',
      error: 'nickname',
     },
     {
      name: "email",
      required: true,
      label: 'Email*:',
      type: '',
      placeholder: 'Введите Email',
      error: 'email',
     },
     {
      name: "password",
      required: true,
      label: 'Пароль*:',
      type: 'password',
      placeholder: 'Введите пароль',
      error: 'password',
     },
     {
      name: "confirmPassword",
      required: true,
      label: 'Повторный ввод пароля:',
      type: 'password',
      placeholder: 'Подтвердите пароль',
      error: 'confirmPassword',
     },
     
   ],
   adress: [
        {
        name: "indexLocation",
        required: true,
        label: 'Индекс*:',
        type: '',
        placeholder: 'Введите индекс',
        error: 'indexLocation',
       },
        {
        name: "city",
        required: true,
        label: 'Город*:',
        type: '',
        placeholder: 'Введите город',
        error: 'city',
       },
        {
        name: "street",
        required: true,
        label: 'Улица*:',
        type: '',
        placeholder: 'Введите улицу',
        error: 'street',
       },
        {
        name: "homeNumber",
        required: true,
        label: 'Номер дома*:',
        type: '',
        placeholder: 'Номер дома',
        error: 'homeNumber',
       },
        {
        name: "buildNumber",
        required: true,
        label: 'Номер корпуса/строения:',
        type: '',
        placeholder: 'Номер корпуса/строения',
        error: 'buildNumber',
       },
        {
        name: "flatNumber",
        required: true,
        label: 'Номер квартиры:',
        type: '',
        placeholder: 'Номер квартиры',
        error: 'flatNumber',
       },
   ],
}

type fieldsType = 
    "email"
  | "password"
  | "confirmPassword"
  | "name"
  | "secondName"
  | "thirdName"
  | "nickname"
  | "indexLocation"
  | "city"
  | "street"
  | "buildNumber"
  | "flatNumber"
  | "homeNumber"


export interface IRegFields {
  name: fieldsType;
  required: boolean;
  label: string;
  type: string;
  placeholder: string;
  error:fieldsType;
}

interface IInputs {
  main: IRegFields[],
  adress: IRegFields[],
}

export const regFields = createModel<RootModel>()({
  state: {
    error: null,
    main: initialState.main,
    adress: initialState.adress,
  } as IInputs,
});
