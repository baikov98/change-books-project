import { createModel } from "@rematch/core";
import { RootModel } from ".";

const initialState = {
   list: [
     {
      title: "Главная",
      link: "/"
     },
     {
      title: "Начать обмены",
      link: "/start"
     },
     {
      title: "Мои обмены",
      link: "/userChange"
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
