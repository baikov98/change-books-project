import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'

const exTest = {
  id: '123',
  book: {
    author: {
      name: "Джоан",
      last_name: "Роулинг"
    },
    name: "Гарри Поттер"
  },
  isbn: "2-266-11156-6",
  year_publishing: 1210,
  categories: [
    {
      name: "Фантастика",
      children: []
    },
    {
      name: "Юмор",
      children: []
    },
    {
      name: "Хорошее",
      children: []
    }
  ]
}
const testResponse = [exTest, exTest, exTest]

const exchange1 = {
  id: '123',
  authorName: "Михаил",
  authorSurname: "Булгаков",
  book: "Название книги",
  year: "1898",
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

interface IResponceData {
  id: string;
  book: {
    author: {
      name: string;
      last_name: string;
    },
    name: string;
  },
  isbn: string;
  year_publishing: string;
  categories: []
}

export interface ICategoryListItem {
  category: string;
  value: string[][];
}

export interface IBookData {
  id: string;
  authorName: string;
  authorSurname: string;
  book: string;
  year: string;
  isbn: string
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
      SET_REQUEST_DATA: (state: IBookListItem, payload: any[]) => {
        return {
          ...state,
          data: payload
        }
      },
  },
  effects: (dispatch) => {
    const { requestExchangeBooks } = dispatch
    return {
    async requestOfferList(payload, rootState) {
      try {
        const filteredResponce = filterServerData(exTest.categories, rootState.bookCategories.main)
        console.log(filteredResponce)
        const response = await api.get(`/api/v1/request/offerlist/`);
        const stateArray = response.data.map((item: IResponceData) => {
          return {
            id: item.id,
            authorName: item.book.author.name,
            authorSurname: item.book.author.last_name,
            book: item.book.name,
            year: item.year_publishing,
            isbn: item.isbn,
            categories: filterServerData(item.categories, rootState.bookCategories.main)
          }
        })
        requestExchangeBooks.SET_REQUEST_DATA(stateArray)
        console.log(response);
      } catch (error) {
        console.error('Failed to requestOfferList - ', error);
        }
    },
  }}
});