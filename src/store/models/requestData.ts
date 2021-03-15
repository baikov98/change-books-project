import { createModel } from "@rematch/core";
import { RootModel } from ".";

const exchange1 = {
  authorName: "Михаил",
  authorSurname: "Булгаков",
  book: "Название книги",
  year: "1898",
  isbn: '1238291',
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

const wish1 = {
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['детектив', 'detective'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Область наук', 
     value: [
      ['биология', 'biology'],
      ['медицина', 'medicine']
    ]},
  ]
}


interface ICategoryListItem {
  [key: string]: any
}
interface IWishBookItem {
  [key: string]: ICategoryListItem
}

export const requestData = createModel<RootModel>()({
    state: {
      data: {
        exchangeBooks: {
          book1: exchange1
        },
      }
    } as IWishBookItem,

    reducers: {
      SET_REQUEST_DATA: (state: IWishBookItem, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
    },
  },

  });