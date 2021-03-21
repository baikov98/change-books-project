import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'

const exchange1 = {
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

const exchange2 = {
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

const exchange3 = {
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

interface ICategoryListItem {
  category: string;
  value: string[][];
}

interface IBookListItem {
    data: {
      [key: string]: {
        categoryList: ICategoryListItem[]
      }
    }
}

interface IPayload {
  categoryList: ICategoryListItem[]
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
    effects: (dispatch) => {
      const { requestWishBooks } = dispatch
      return {
      async requestWishList() {
        try {
          const response = await api.get(`/api/v1/request/wishlist/`);
          console.log(response);
        } catch (error) {
          console.error('Failed to requestWishList - ', error);
          }
      },
    }}
});