import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'
import { ICategoryListItem, IRequestCategoriesItem } from './bookCategories'

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
  category: IRequestCategoriesItem[] 
}

export interface IOfferBookData {
  id?: string;
  authorName: string;
  authorSurname: string;
  book: string;
  year: string;
  isbn?: string
  categories: ICategoryListItem[]
} 

interface IBookListItem {
  data: IOfferBookData[]
}

export const requestExchangeBooks = createModel<RootModel>()({
    state: {
      data: []
    } as IBookListItem, 

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: IOfferBookData[]) => {
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
        const stateArray: IOfferBookData[] = response.data.map((item: IResponceData) => { 
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
        requestExchangeBooks.SET_REQUEST_DATA([])
        console.error('Failed to requestOfferList - ', error);
        }
    },
    async putEditedOffer(payload: IOfferBookData, rootState, id) {
      try {
        const genreArray = payload.categories.map(item => (
          item.value.map(val => (
            {
              name: val,
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