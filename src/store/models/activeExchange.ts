import { createModel } from "@rematch/core";
import { RootModel } from "."; 
import api from "../../services/api";


const list1 = [
  {
    offerMyId: '1',
    wishMyId: '1',
    offerTheirId: '1',
    wishTheirId: '1',
    authorName: 'name',
    authorSurname: 'surname',
    book: 'book',
    status: 'Свободен',
    trackMy: 'string',
    trackTheir: 'string',
    bookCategories: [
      {category: 'Жанр', value: 'string'},
      {category: 'Состояние', value: 'string'},
      {category: 'Дополнительно', value: 'string'},
    ],
    user: [
      {category: 'Пользователь', value: 'string'},
      {category: 'Город', value: 'string'},
      {category: 'Рейтинг', value: 'string'},
    ],
    categories: [
      {category: 'Жанр', value: 'string'},
      {category: 'Состояние', value: 'string'},
      {category: 'Дополнительно', value: 'string'},
    ],
  }
]

interface ILines {
  category: string;
  value: string;
}

export interface IActiveExchangeData {
  offerMyId: string;
  wishMyId: string;
  offerTheirId: string;
  wishTheirId: string;
  authorName: string;
  authorSurname: string;
  book: string;
  status_my: string;
  status_their: string;
  trackMy: string;
  trackTheir: string;
  bookCategories: ILines[], // для вывода категорий книги(что я отдаю) в карточке справа
  user: ILines[],
  categories: ILines[] 
}

interface IProps {
  error: string | null,
  list: IActiveExchangeData[] | [],
}


export const activeExchange = createModel<RootModel>()({
  state: {
    error: null,
    list: [],
  } as IProps,
  reducers: {
    setError: (state: IProps, error: string | null) => {
      return {
        ...state,
        error,
      }
    },
    SET_LIST: (state: IProps, list: IActiveExchangeData[] | []) => {
      return {
        ...state,
        list,
      }
    },
  },
  effects: (dispatch) =>  ({
    async getActiveList(_, rootState){
      try {
        const username = rootState?.user?.personalData?.nickname 
        const response = await api.get(`/api/v1/exchange/`);
        const data: IActiveExchangeData[] = response.data.map((item: any) => {
          if(item.user_my === username){
            return {
              //КОГДА я нажал кнопку МЕНЯЮСЬ
              offerMyId: item?.offer_my.id,
              wishMyId: item?.wish_my.id,
              offerTheirId: item?.offer_their.id,
              wishTheirId: item?.wish_their.id,
              authorName: item?.offer_my?.book?.author?.name,
              authorSurname: item?.offer_my?.book?.author?.last_name,
              book: item?.offer_my?.book?.name,
              status_my: item?.offer_my?.status,
              status_their: item?.offer_their?.status,
              trackMy: item?.track_number_my,
              trackTheir: item?.track_number_their,
              bookCategories: item?.offer_my?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              user: [
                {category: 'Пользователь', value: item?.user_their},
                {category: 'Город', value: item?.wish_their.address.city},
                {category: 'Рейтинг', value: item?.offer_their.rating},
              ],
              categories: item?.offer_their?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              
            }
          }else {
            //КОГДА КТО-ТО нажал кнопку МЕНЯЮСЬ
            return {
              offerMyId: item?.offer_their.id,
              wishMyId: item?.wish_their.id,
              offerTheirId: item?.offer_my.id,
              wishTheirId: item?.wish_my.id,
              authorName: item?.offer_their?.book?.author?.name,
              authorSurname: item?.offer_their?.book?.author?.last_name,
              book: item?.offer_their?.book?.name,
              status_my: item?.offer_their?.status,
              status_their: item?.offer_my?.status,
              trackMy: item?.track_number_their,
              trackTheir: item?.track_number_my,
              bookCategories: item?.offer_their?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              user: [
                {category: 'Пользователь', value: item?.user_my},
                {category: 'Город', value: item?.wish_my.address.city},
                {category: 'Рейтинг', value: item?.offer_my.rating},
              ],
              categories: item?.offer_my?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
            }
          }
        })
        dispatch.activeExchange.SET_LIST(data)
        dispatch.activeExchange.setError(null)
    } catch (error) {
        console.error('Failed to GET ACTIVE EXCHANGE- ', error); 
        dispatch.activeExchange.setError("Ошибка получения активных обменов")
      }
    },
    async agreeExchange (id, rootState) {
      try {
        const data = rootState.activeExchange.list.find((el: IActiveExchangeData) => +el.offerMyId === +id)
        const response = await api.post(`/api/v1/exchange`, 
                                        { offer_my: data?.offerTheirId,
                                          wish_my: data?.wishTheirId,
                                          offer_their: data?.offerMyId,
                                          wish_their: data?.wishMyId
                                        }); 
        console.log(response.data)
      } catch (error) {
          console.error('Failed to agreeExchange - ', error);
      }
    },
    async trackNumber (id, rootState, trackNum ) {
      try {
        const response = await api.patch(`/api/v1/exchange/tracknumber/`, 
                                        {
                                          offer: id,
                                          track_number: "123123212"
                                        }); 
        console.log(response.data)
      } catch (error) {
          console.error('Failed to trackNumber - ', error);
      }
    },
    async confirmRecieve (id, rootState) {
      try {
        const response = await api.patch(`/api/v1/exchange/confirm_recieve/`, 
                                          {
                                            offer: id,
                                            is_received: true
                                          }); 
        console.log(response.data)
      } catch (error) {
          console.error('Failed to confirmRecieve - ', error);
      }
    },
  })
});
