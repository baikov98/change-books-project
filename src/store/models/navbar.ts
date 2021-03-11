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
      title: "Хочу отдать",
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
        title: "Отзыв на книгу",
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
        title: "Задать вопрос",
        link: routes.ask
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
