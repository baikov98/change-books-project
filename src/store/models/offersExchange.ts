import { createModel } from "@rematch/core";
import { RootModel } from "."; 
import api from '../../services/api'
import filterServerData from '../../utils/filterServerData'

interface ILines {
  category: string;
  value: string;
}

export interface IOfferExchangeData {
  offerMyId: string;
  wishMyId: string;
  offerTheirId: string;
  wishTheirId: string;
  authorName: string;
  authorSurname: string;
  book: string;
  user: ILines[],
  categories: ILines[] 
}

interface IProps {
  error: string | null,
  bookInfo: IOfferExchangeData[], 
}

function sortByOfferId(arr: IOfferExchangeData[]) {
  arr.sort((a, b) => a.offerMyId > b.offerMyId ? 1 : -1);
}

export const offersExchange = createModel<RootModel>()({
  state: {
    error: null,
    bookInfo: []
  } as IProps,
  reducers: {
    SET_OFFERS: (state: IProps, bookInfo: IOfferExchangeData[]) => {
      return {
          ...state,
          bookInfo,
      }
    }, 
  },
  effects: (dispatch) => {
    return {
      async getOffers (payload, rootState) {
        try {
            const response = await api.get(`/api/v1/request/bookselect`);
            const data: IOfferExchangeData[] = response.data.map((item: any) => {
              return {
                offerMyId: item?.offer_my.id,
                wishMyId: item?.wish_my.id,
                offerTheirId: item?.offer_their.id,
                wishTheirId: item?.wish_their.id,
                authorName: item?.offer_my.book.author.name,
                authorSurname: item?.offer_my.book.author.last_name,
                book: item?.offer_my.book.name,
                user: [
                  {category: 'Пользователь', value: item?.offer_user.username},
                  {category: 'Город', value: item?.wish_their.address.city},
                  {category: 'Рейтинг', value: item?.offer_user.rating},
                ],
                categories: filterServerData(item.offer_their.category, rootState.bookCategories.main)
              }
            }) 
            sortByOfferId(data)
            dispatch.offersExchange.SET_OFFERS(data) 
            
        } catch (error) {
            console.error('Failed to GET OFFER DATA - ', error);
            dispatch.offersExchange.SET_OFFERS([])
        }
    },
    async makeOffer ({offerMyId, wishMyId, offerTheirId, wishTheirId}) {
      try {
          const data = {
            offer_my: +offerMyId,
            wish_my: +wishMyId,
            offer_their: +offerTheirId,
            wish_their: +wishTheirId
          }
          const response = await api.post(`/api/v1/exchange/`, data);
          
      } catch (error) {
          console.error('Failed to GET OFFER DATA - ', error); 
      }
    }, 

  }
}
});

const testt = [
  {
    offer_my: {
      "id": 4,
      "book": {
        "author": {
          "name": "Джоан",
          "last_name": "Роулинг"
        },
        "name": "Гарри Поттер"
      },
      "isbn": "",
      "year_publishing": 2010,
      "category": [
        {
          "parent": "Жанр",
          "name": "Фэнтэзи"
        },
        {
          "parent": "Жанр",
          "name": "Юмор"
        },
        {
          "parent": "Состояние книги",
          "name": "Потрепана"
        }
      ],
      "status": "Свободен"
    },
    wish_my: {
      "id": 1,
      "status": "Свободен",
      "address": {
        "index": "432056",
        "city": "Moscow",
        "street": "Pushkina",
        "house": "56",
        "structure": "1",
        "apart": "56",
        "is_default": true
      },
      "category": [
        {
          "parent": "Жанр",
          "name": "Детектив"
        },
        {
          "parent": "Состояние книги",
          "name": "Новая"
        }
      ]
    },
    offer_their: {
      "id": 5,
      "book": {
        "author": {
          "name": "Артур",
          "last_name": "Конан Дойл"
        },
        "name": "Шерлок Холмс"
      },
      "isbn": "",
      "year_publishing": 2020,
      "category": [
        {
          "parent": "Жанр",
          "name": "Детектив"
        },
        {
          "parent": "Состояние книги",
          "name": "Новая"
        }
      ],
      "status": "Свободен"
    },
    wish_their: {
      "id": 2,
      "status": "Свободен",
      "address": {
        "index": "432045",
        "city": "Ulyanovsk",
        "street": "Goncharova",
        "house": "34",
        "structure": "1",
        "apart": "23",
        "is_default": true
      },
      "category": [
        {
          "parent": "Жанр",
          "name": "Фэнтэзи"
        },
        {
          "parent": "Состояние книги",
          "name": "Потрепана"
        }
      ]
    }
  }
]

