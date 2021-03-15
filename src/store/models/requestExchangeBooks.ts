import { createModel } from "@rematch/core";
import { RootModel } from ".";

const exchange1 = {
  authorName: "Михаил",
  authorSurname: "Булгаков",
  book: "Название книги",
  year: "1898",
  isbn: '1234567890123',
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['детектив', 'detective'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Обложка', 
     value: [
      ['жесткая', 'tough'],
    ]},
    {category: 'Область наук', 
     value: [
      ['биология', 'biology'],
      ['медицина', 'medicine']
    ]},
  ]
}


interface ICategoryListItem {
  [key: string]: string | Array<any>
}

interface IBookListItem {
  [key: string]: any
}

export const requestExchangeBooks = createModel<RootModel>()({
    state: {
      data: {
          book1: exchange1,
          book2: exchange1,
          book3: exchange1,
      }
    } as IBookListItem,

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
      },
      ADD_REQUEST_DATA: (state: IBookListItem, payload: object) => {
        return {
          ...state,
          data: {...state.data, [`book${Object.keys(state.data).length+1}`]: payload }
        }
      },
  },
});