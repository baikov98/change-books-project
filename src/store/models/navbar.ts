import { createModel } from "@rematch/core";
import { RootModel } from ".";
import {routes} from '../../routes' 

export interface IMenuItem {
  title: string;
  link: string;
}
const initialState = {
   list: [
     {
      title: "Предложения для обмена",
      link: routes.offer
     },
     {
      title: "Хочу обменять",
      link: routes.giveaway
     },
     {
      title: "Хочу получить",
      link: routes.recieve
     },
     {
        title: "Активные обмены",
        link: routes.active
     },
     {
        title: "Отзывы на книгу",
        link: routes.review
     },
     {
        title: "Личные данные",
        link: routes.personal
     },
     {
        title: "Сообщения",
        link: routes.messages
     },
     {
        title: "Архив",
        link: routes.archive
     },
     {
        title: "Выйти",
        link: routes.exit
     },
   ]
}

export const navbar = createModel<RootModel>()({
  state: {
    error: null,
    ...initialState,
  },
  reducers: {
  },
});
