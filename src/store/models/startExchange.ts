import { createModel } from "@rematch/core";
import { RootModel } from ".";

import api from '../../services/api'
import cookie from '../../services/CookieService'

export interface IStartExchange {
    step: number,
    data: {
      step1: {
        authorName: string;
        authorSurname: string;
        book: string;
        isbn?: string;
        year: string;
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
    async requestOfferList(offerData) {
      try {
        const data = {
          book: {
            author: {
              name: offerData.authorName,
              last_name: offerData.authorSurname
            },
            name: offerData.book,
            note: ''
            },
          isbn: offerData.isbn || '',
          year_publishing: +offerData.year
        }
        const response = await api.post(`/api/v1/request/offer_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send offer data - ', error);
        }
    },
    async requestWishList(wishData) {
      try {
        const data = {
          address: {
            index: wishData.indexLocation,
            city: wishData.city,
            street: wishData.street,
            house: wishData.homeNumber,
            structure: wishData.buildNumber,
            apart: wishData.flatNumber,
            is_default: !!wishData.is_default
          }
        }
        const response = await api.post(`/api/v1/request/wish_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send wish data - ', error);
        }
    } 
  }}
});
