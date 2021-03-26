import { createModel } from "@rematch/core";
import { number } from "yup/lib/locale";
import { RootModel } from "."; 
import api from "../../services/api";

const list = [
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

const listResponse = [
  {
    offer_my: {
      id: 4,
      book: {
        author: {
          id: 1,
          name: "Джоан",
          last_name: "Роулинг"
        },
        name: "Гарри Поттер",
        note: "Колдунство"
      },
      isbn: "",
      year_publishing: 2010
    },
    wish_my: {
      id: 1,
      address: {
        index: "432056",
        city: "ывап",
        street: "ывап",
        house: "56",
        structure: "1",
        apart: "56",
        is_default: true
      }
    },
    offer_their: {
      id: 5,
      book: {
        author: {
          id: 5,
          name: "Артур",
          last_name: "Конан Дойл"
        },
        name: "Шерлок Холмс",
        note: "Убийца - дворецкий."
      },
      isbn: "",
      year_publishing: 2020
    },
    wish_their: {
      id: 2,
      address: {
        index: "432045",
        city: "Ulyanovsk",
        street: "Goncharova",
        house: "34",
        structure: "1",
        apart: "23",
        is_default: true
      }
    },
    is_both: false,
    track_number_my: null,
    track_number_their: null,
    user_my: "test_user",
    user_their: "titaniumslava"
  }
]

interface ILines {
  category: string;
  value: string;
}

interface IData {
  offerMyId: string;
  wishMyId: string;
  offerTheirId: string;
  wishTheirId: string;
  authorName: string;
  authorSurname: string;
  book: string;
  status: string;
  trackMy: string;
  trackTheir: string;
  bookCategories: ILines[], // для вывода категорий книги(что я отдаю) в карточке справа
  user: ILines[],
  categories: ILines[] 
}

interface IProps {
  error: string | null,
  list: IData[],
}

export const activeExchange = createModel<RootModel>()({
  state: {
    error: null,
    list,
  } as IProps,
  reducers: {
    SET_LIST: (state: IProps, list: IData[]) => {
      return {
        ...state,
        list,
      }
    }
  },
  effects: (dispatch) =>  ({
    async getActiveList(_, rootState){
      try {
        const username = rootState?.user?.personalData?.nickname 
        const response = await api.get(`/api/v1/exchange/`);
        const data: IData[] = response.data.map((item: any) => {
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
              status: item?.offer_their?.status,
              trackMy: item?.track_number_my,
              trackTheir: item?.track_number_their,
              bookCategories: item?.offer_my?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              user: [
                {category: 'Пользователь', value: item?.offer_user.username},
                {category: 'Город', value: item?.wish_their.address.city},
                {category: 'Рейтинг', value: item?.offer_user.rating},
              ],
              categories: item?.offer_their?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              
            }
          }else {
            //КОГДА КТО-ТО нажал кнопку МЕНЯЮСЬ
            return {
              offerMyId: item?.offer_my.id,
              wishMyId: item?.wish_my.id,
              offerTheirId: item?.offer_their.id,
              wishTheirId: item?.wish_their.id,
              authorName: item?.offer_their?.book?.author?.name,
              authorSurname: item?.offer_their?.book?.author?.last_name,
              book: item?.offer_their?.book?.name,
              status: item?.offer_my?.status,
              trackMy: item?.track_number_my,
              trackTheir: item?.track_number_their,
              bookCategories: item?.offer_their?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
              user: [
                {category: 'Пользователь', value: item?.user_their},
                {category: 'Город', value: item?.wish_my.address.city},
                {category: 'Рейтинг', value: item?.offer_user.rating},
              ],
              categories: item?.offer_my?.category?.map((i: any) => ({
                category: i.parent,
                value: i.name
              })),
            }
          }
        })
        dispatch.activeExchange.SET_LIST(data)
        
    } catch (error) {
        console.error('Failed to GET ACTIVE EXCHANGE- ', error); 
    }
    }
  })
});
