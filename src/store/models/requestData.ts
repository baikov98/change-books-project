import { createModel } from "@rematch/core";
import { RootModel } from ".";


const initialState = {
    author: "Михаил Булгаков",
    book: "Название книги",
    year: "1898",
    isbn: '1238291',
    nobel: true,
    detective: true,
    childbooksGet: true,
    historyGet: true,
    secondName: "11111",
    name: "11111",
    thirdName: "11111",
    indexLocation: "11111",
    city: "11111",
    street: "11111",
    homeNumber: "11111",
    buildNumber: "11",
    flatNumber: "11",
}

export interface IStartExchange {
    data: {
      [key: string]: {
        [key: string]: string | boolean
      }
    }
}

export const requestData = createModel<RootModel>()({
    state: {
      data: {
        book1: initialState, 
        book2: initialState, 
        book3: initialState
      }
    } as IStartExchange,

    reducers: {
      SET_REQUEST_DATA: (state: IStartExchange, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
    },
  },

  });