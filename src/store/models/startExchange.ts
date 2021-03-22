import { createModel } from "@rematch/core";
import { start } from "node:repl";
import { RootModel } from ".";

import api from '../../services/api'
import cookie from '../../services/CookieService'

interface IGenreItem {
  category: string;
  value: string[][]
}
interface IRequestOfferList {
  name?: string;
  children: []
}

interface IOfferData {
  authorName: string;
  authorSurname: string;
  book: string;
  isbn?: string;
  year: string;
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
      step2: {
        categoryList: IGenreItem[]
      },
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
    const { startExchange } = dispatch
    return {
    async requestOfferList(offerData: IOfferData) {
      try {
        const genreArray = [] as IRequestOfferList[]
        offerData.categoryList.forEach((i) => {
          i.value.forEach((val) => {
            genreArray.push({
              name: val[0],
              children: []
            }) 
          })
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
        console.log(data)
        const response = await api.post(`/api/v1/request/offer_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send offer data - ', error);
        }
    },
    async requestWishList(deliveryData, rootState) {
      try {
        const offerData = rootState.startExchange.data.step2
        const genreArray = [] as IRequestOfferList[]
        offerData.categoryList.forEach((i) => {
          i.value.forEach((val) => {
            genreArray.push({
              name: val[0],
              children: []
            }) 
          })
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
        console.log(data)
        const response = await api.post(`/api/v1/request/wish_list/create/`, data);
        console.log(response);
        
      } catch (error) {
        console.error('Failed to send wish data - ', error);
        }
    },
    async getPersonalData() {
      try {
        const response = await api.get(`/api/v1/profile/`);
        let data = await response.data
        startExchange.SET_EXCHANGE_DATA({
          step3: {
            name: data?.user?.first_name,
            secondName: data?.user?.second_name,
            thirdName: data?.user?.last_name,
            indexLocation: data?.index,
            city: data?.city,
            street: data?.street,
            homeNumber: data?.house,
            buildNumber: data?.structure,
            flatNumber: data?.apart,
          }
        })
        console.log(response);
        
      } catch (error) {
        console.error('Failed to get presonal data - ', error);
        }
    },
    
  }}
});
