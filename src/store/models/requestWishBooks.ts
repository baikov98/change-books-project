import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'
import { ICategoryListItem, IRequestCategoriesItem } from './bookCategories'

interface IResponceData {
  category: IRequestCategoriesItem[] 
}

export interface IWishBookData {
  id?: string;
  categories: ICategoryListItem[];
}

interface IBookListItem {
    data: IWishBookData[]
}

export const requestWishBooks = createModel<RootModel>()({
    state: {
      data: [
      ]
    } as IBookListItem,

    reducers: {
      SET_REQUEST_DATA: (state: IBookListItem, payload: IWishBookData[]) => { 
        return {
          ...state,
          data: payload
        }
      },
    },
    effects: (dispatch) => {
      const { requestWishBooks } = dispatch
      return {
      async requestWishList(payload, rootState) {
        try {
          const response = await api.get(`/api/v1/request/wishlist/`);
          const stateArray: IWishBookData[] = response.data.map((item: IResponceData) => { 
            return {
              categories: filterServerData(item.category, rootState.bookCategories.main)
            }
          })
          requestWishBooks.SET_REQUEST_DATA(stateArray)
        } catch (error) {
            requestWishBooks.SET_REQUEST_DATA([])
            console.error('Failed to requestWishList - ', error);
          }
      },
      async putWishList(id: string) {
        try {
          const response = await api.put(`/api/v1/request/wishlist/${id}/`);
        } catch (error) {
            console.error('Failed to WishList - ', error);
          }
      },
    }}
});