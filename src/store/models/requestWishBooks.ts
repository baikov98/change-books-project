import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'

const exchange1 = {
  id: '123',
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
  id: '124',
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
  id: '125',
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
  categoryList: ICategoryListItem[];
}

interface IBookListItem {
    data: IBookData[]
}

export const requestWishBooks = createModel<RootModel>()({
    state: {
      data: [
        exchange1, exchange2, exchange3
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
      const { requestWishBooks } = dispatch
      return {
      async requestWishList() {
        try {
          const response = await api.get(`/api/v1/request/wishlist/`);
          requestWishBooks.SET_REQUEST_DATA(response.data)
        } catch (error) {
            console.error('Failed to requestWishList - ', error);
          }
      },
      async putWishList(id: string) {
        try {
          const response = await api.put(`/api/v1/request/wishlist/${id}/`);
        } catch (error) {
            console.error('Failed to requestWishList - ', error);
          }
      },
    }}
});