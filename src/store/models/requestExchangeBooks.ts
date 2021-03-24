import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'


interface IRequestOfferItem {
  name: string;
  children: []
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
  category: IRequestOfferItem[] 
}

export interface ICategoryListItem {
  category: string;
  value: string[][];
}

export interface IBookData {
  id?: string;
  authorName?: string;
  authorSurname?: string;
  book?: string;
  year?: string;
  isbn?: string
  categories: ICategoryListItem[]
}

interface IBookListItem {
  data: IBookData[]
}

const exchange1 = {
  id: '123',
  authorName: "ТестИмя",
  authorSurname: "ТестФамилия",
  book: "Тест Название книги",
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

const exTest: IResponceData = {
  id: '123',
  book: {
    author: {
      name: "1Джоан1",
      last_name: "1Роулинг1"
    },
    name: "Гарри Поттер"
  },
  isbn: "2-266-11156-1",
  year_publishing: "1210",
  category: [
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

export const requestExchangeBooks = createModel<RootModel>()({
    state: {
      data: [
          
      ]
    } as IBookListItem, 

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: IBookData[]) => {
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
        const response = await api.get(`/api/v1/request/offerlist/`);
        const stateArray: IBookData[] = response.data.map((item: IResponceData) => { 
          return {
            id: item.id,
            authorName: item.book.author.name,
            authorSurname: item.book.author.last_name,
            book: item.book.name,
            year: item.year_publishing,
            isbn: item.isbn,
            categories: filterServerData(item.category, rootState.bookCategories.main)
          }
        })
        requestExchangeBooks.SET_REQUEST_DATA(stateArray)
      } catch (error) {
        console.error('Failed to requestOfferList - ', error);
        }
    },
    async putEditedOffer(payload: IBookData, rootState, id) {
      try {
        const genreArray = payload.categories.map(item => (
          item.value.map(val => (
            {
              name: val[0],
              children: []
            }
          ))
        ))
        const data = {
          book: {
            author: {
              name: payload.authorName,
              last_name: payload.authorSurname
            },
              name: payload.book
          },
          isbn: payload.isbn,
          year_publishing: payload.year,
          categories: genreArray.flat()
        }
        const response = await api.put(`/api/v1/request/offerlist/${id}/`, data);
      } catch (error) {
          console.error('Failed to requestOfferList - ', error);
        }
    },
  }}
});