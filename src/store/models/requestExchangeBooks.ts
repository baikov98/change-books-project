import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'

const exTest = {
  book: {
    author: {
      "name": "string",
      "last_name": "string"
    },
    name: "string"
  },
  isbn: "string",
  year_publishing: 1210,
  categories: [
    {
      name: "Фантастика",
      children: []
    },
    {
      name: "Хорошее",
      children: []
    }
  ]
}

const exchange1 = {
  id: '123',
  book: {
    author: {
      name: "Михаил",
      last_name: "Булгаков"
    },
    name: "Название книги"
  },
  year_publishing: "1898",
  isbn: '2-266-11156-6',
  categories: [
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
  book: {
    author: {
      name: string,
      last_name: string
    },
    name: string
  };
  year_publishing?: string,
  isbn?: string,
  categories: ICategoryListItem[]
}
interface IBookListItem {
  data: IBookData[]
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
        const filteredResponce = filterServerData(exTest.categories)
        console.log(filteredResponce) 
        const response = await api.get(`/api/v1/request/offerlist/`);
        
        requestExchangeBooks.SET_REQUEST_DATA(response.data)
        console.log(response);
      } catch (error) {
        console.error('Failed to requestOfferList - ', error);
        }
    },
  }}
});