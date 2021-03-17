import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface IMenuItem {
  title: string;
  link: string;
}

const list = [
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

const loginModal = false

export const menu = createModel<RootModel>()({
  state: {
    error: null,
    list,
    loginModal,
  },
  reducers: {
    SET_MODAL: (state, payload: boolean) => {
      return {
        ...state,
        loginModal: payload
      }
    },
  },
  effects: (dispatch) => ({
  
  }),
});
