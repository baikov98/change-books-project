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
    data: Array<{}>
}

export const requestData = createModel<RootModel>()({
    state: {
      data: [initialState, initialState, initialState]
    } as IStartExchange,

    reducers: {
      SET_REQUEST_DATA: (state: IStartExchange, payload: object) => {
        return {
          ...state,
          data: [...state.data, payload ]
        }
    },
  },

  });