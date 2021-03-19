import { createModel } from "@rematch/core";
import { RootModel } from ".";

import api from '../../services/api'
import cookie from '../../services/CookieService'

interface IGenreItem {
  category: string;
  value: string[][]
}

interface IOfferData {
  authorName: string;
  authorSurname: string;
  book: string;
  isbn?: string;
  year: string;
  categoryList: IGenreItem[];
}

interface IWishData {
  categoryList: IGenreItem[];
}

export interface IStartExchange {
    step: number,
    data: {
      step1: {
        authorName: string;
        authorSurname: string;
        book: string;
        isbn?: string;
        year: string;
        categoryList: IGenreItem[];
      },
      step2: {},
      step3: {}
    }
}

export const startExchange = createModel<RootModel>()({
    state: {
      step: 0,
      data: {
        step1: {},
        step2: {},
        step3: {}
      }
    } as IStartExchange,

    reducers: {
      SET_EXCHANGE_STEP: (state: IStartExchange, payload: number) => {
          return {
            ...state,
            step: payload
          }
      },
      SET_EXCHANGE_DATA: (state: IStartExchange, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
    },
  },
  effects: (dispatch) => {
    return {
    async requestOfferList(offerData: IOfferData) {
      try {
        const genreArray = offerData.categoryList.map((i) => {
          const catString = i.value.map(val => val[0])
          return {[i.category]: catString.join(', ')}
        })
        const data = {
          book: {
            author: {
              name: offerData.authorName,
              last_name: offerData.authorSurname
            },
            name: offerData.book,
            },
          isbn: offerData.isbn || '',
          year_publishing: +offerData.year,
          categories: genreArray
        }
        const response = await api.post(`/api/v1/request/offer_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send offer data - ', error);
        }
    },
    async requestWishList(deliveryData, rootState) {
      try {
        const catList = rootState.startExchange.data.step2 as IWishData
        const genreArray = catList.categoryList.map((i) => {
          const catString = i.value.map(val => val[0])
          return {[i.category]: catString.join(', ')}
        })
        const data = {
          address: {
            index: deliveryData.indexLocation,
            city: deliveryData.city,
            street: deliveryData.street,
            house: deliveryData.homeNumber,
            structure: deliveryData.buildNumber,
            apart: deliveryData.flatNumber,
            is_default: !!deliveryData.is_default
          },
          categories: genreArray
        }
        const response = await api.post(`/api/v1/request/wish_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send wish data - ', error);
        }
    } 
  }}
});
