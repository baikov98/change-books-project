import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'

interface IGenreItem {
  category: string;
  value: string[][]
}

export interface IWishData {
  categories: IGenreItem[];
}

export interface IOfferData {
  authorName: string;
  authorSurname: string;
  book: string;
  isbn?: string;
  year: string;
  categories: IGenreItem[];
}

interface IStartExchange {
    step: number,
    data: {
      step1: IOfferData
      step2: IWishData
      step3: {
        [key: string]: string
      }
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
    async requestOfferList(offerData: IOfferData, rootState) {
      try {
        const genreArray = offerData.categories.map(item => (
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
              name: offerData.authorName,
              last_name: offerData.authorSurname
            },
            name: offerData.book,
            },
          isbn: offerData.isbn || '',
          year_publishing: +offerData.year,
          categories: genreArray.flat()
        }
        const response = await api.post(`/api/v1/request/offerlist`, data);
      } catch (error) {
        console.error('Failed to send offer data - ', error);
        }
    },
    async requestWishList(deliveryData, rootState) {
      try {
        const offerData = rootState.startExchange.data.step2
        const genreArray = offerData.categories.map(item => (
          item.value.map(val => (
            {
              name: val[0],
              children: []
            }
          ))
        ))
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
          categories: genreArray.flat()
        }
        const response = await api.post(`/api/v1/request/wishlist`, data);
        
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
            name: data?.first_name,
            secondName: data?.second_name,
            thirdName: data?.last_name,
            indexLocation: data?.address[0].index,
            city: data?.address[0].city,
            street: data?.address[0].street,
            homeNumber: data?.address[0].house,
            buildNumber: data?.address[0].structure,
            flatNumber: data?.address[0].apart,
          }
        })
        
      } catch (error) {
        console.error('Failed to get personal data - ', error);
        }
    },
    
  }}
});
