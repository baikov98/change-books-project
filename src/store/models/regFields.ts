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
      label: '',
      type: '',
      placeholder: 'Введите фамилию',
     },
     {
      name: "name",
      required: true,
      label: '',
      type: '',
      placeholder: 'Введите имя',
     },
     {
      name: "thirdName",
      required: false,
      label: '',
      type: '',
      placeholder: 'Введите отчество',
     },
     {
      name: "nickname",
      required: true,
      label: '',
      type: '',
      placeholder: 'Придумайте никнейм',
     },
     {
      name: "email",
      required: true,
      label: '',
      type: '',
      placeholder: 'Введите Email',
     },
     {
      name: "password",
      required: true,
      label: '',
      type: '',
      placeholder: 'Введите пароль',
     },
     {
      name: "confirmPassword",
      required: true,
      label: '',
      type: '',
      placeholder: 'Подтвердите пароль',
     },
     
   ],
   adress: [
        {
        name: "indexLocation",
        required: true,
        label: '',
        type: '',
        placeholder: 'Введите индекс',
       },
        {
        name: "city",
        required: true,
        label: '',
        type: '',
        placeholder: 'Введите город',
       },
        {
        name: "street",
        required: true,
        label: '',
        type: '',
        placeholder: 'Введите улицу',
       },
        {
        name: "homeNumber",
        required: true,
        label: '',
        type: '',
        placeholder: 'Номер дома',
       },
        {
        name: "buildNumber",
        required: true,
        label: '',
        type: '',
        placeholder: 'Номер корпуса / строения',
       },
        {
        name: "flatNumber",
        required: true,
        label: '',
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
