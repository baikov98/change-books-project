import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface IMenuItem {
  title: string;
  link: string;
}
const initialState = {
   list: [
     {
      title: "Главная",
      link: "/"
     },
     {
      title: "Начать обмен",
      link: "/start"
     },
     {
      title: "Мои обмены",
      link: "/userChange/offer"
     },
     {
        title: "Обратная связь",
        link: "/feedback"
     },
   ]
}

export const menu = createModel<RootModel>()({
  state: {
    error: null,
    ...initialState,
  },
  reducers: {
  },
  effects: (dispatch) => ({
  
  }),
});
