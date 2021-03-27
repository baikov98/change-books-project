import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import { IWishBookData } from './requestWishBooks'
import { IOfferBookData } from './requestExchangeBooks'

interface IStartExchange {
    step: number,
    data: {
      step1: IOfferBookData
      step2: IWishBookData
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
      CLEAR_DATA: (state: IStartExchange) => {
        return {
          ...state,
          step: 0,
          data: {
            step1: {},
            step2: {},
            step3: {}
          }
        } as IStartExchange
      }, 
  },
  effects: (dispatch) => {
    const { startExchange } = dispatch
    return {
      async requestOfferList(offerData: IOfferBookData, rootState) {
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
      async getPersonalData(payload, rootState) {
        try {
          let data = rootState.user.personalData
          startExchange.SET_EXCHANGE_DATA({
            step3: {
              name: data?.name,
              secondName: data?.secondName,
              thirdName: data?.thirdName,
              indexLocation: data?.indexLocation,
              city: data?.city,
              street: data?.street,
              homeNumber: data?.homeNumber,
              buildNumber: data?.buildNumber,
              flatNumber: data?.flatNumber,
            }
          })
          
        } catch (error) {
          console.error('Failed to get personal data - ', error);
          }
      },
  }}
});
