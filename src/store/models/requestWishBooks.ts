import { createModel } from "@rematch/core";
import { RootModel } from ".";

const exchange1 = {
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['приключения', 'adventures'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Лауреат', 
     value: [
      ['пулитцеровская', 'pylit'],
    ]},
    {category: 'Область наук', 
     value: [
      ['химия', 'chemistry'],
      ['физика', 'physics']
    ]},
  ]
}

const exchange2 = {
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['детские книги', 'childbooks'],
      ['фантастика', 'fantasy']
    ]},
    {category: 'Область наук', 
     value: [
      ['эзотерика', 'esoterics']
    ]},
    {category: 'Состояние', 
     value: [
      ['в хорошем состоянии', 'goodshape'],
    ]},
  ]
}

const exchange3 = {
  categoryList: [
    {category: 'Жанр', 
     value: [
      ['психология', 'psychology'],
    ]},
    {category: 'Лауреат', 
     value: [
      ['гонкуровская', 'gonkyr'],
    ]},
    {category: 'Экранизация', 
     value: [
      ['экранизирована', 'filmed'],
    ]},
  ]
}

interface ICategoryListItem {
  [key: string]: string | Array<any>
}

interface IBookListItem {
  [key: string]: any
}

export const requestWishBooks = createModel<RootModel>()({
    state: {
      data: {
          book1: exchange1,
          book2: exchange2,
          book3: exchange3,
      }
    } as IBookListItem,

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
    },
  },
});