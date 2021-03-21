import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'

const exchange1 = {
  id: '123',
  authorName: "Михаил",
  authorSurname: "Булгаков",
  book: "Название книги",
  year: "1898",
  isbn: '2-266-11156-6',
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['приключения', 'adventures'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Состояние', 
     value: [
      ['Новая', 'fresh'], 
    ]},
    {category: 'Дополнительно', 
     value: [
      ['Иностранный язык', 'foreignlanguage'], 
    ]},
  ]
}

export interface ICategoryListItem {
  category: string;
  value: string[][];
}

export interface IBookData {
  id: string;
  authorName: string,
  authorSurname: string,
  book: string,
  year?: string,
  isbn?: string,
  categoryList: ICategoryListItem[]
}
interface IBookListItem {
  data: IBookData[]
}

interface IPayload {
  authorName: string,
  authorSurname: string,
  book: string,
  year?: string,
  isbn?: string,
  categoryList: ICategoryListItem[]
}

export const requestExchangeBooks = createModel<RootModel>()({
    state: {
      data: [
          exchange1,
          exchange1,
          exchange1,
      ]
    } as IBookListItem,

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: []) => {
        return {
          ...state,
          data: payload
        }
      },
  },
  effects: (dispatch) => {
    const { requestExchangeBooks } = dispatch
    return {
    async requestOfferList() {
      try {
        const response = await api.get(`/api/v1/request/offerlist/`);
        //requestExchangeBooks.SET_REQUEST_DATA(response)
        console.log(response);
      } catch (error) {
        console.error('Failed to requestOfferList - ', error);
        }
    },
  }}
});