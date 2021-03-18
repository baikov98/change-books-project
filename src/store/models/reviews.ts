import { baseURL } from '../../constants/index';
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import axios from 'axios'

export interface IRequest {
  author: string;
  book: string;
  text: string;
}

const authors = [
  {id:1 , name: 'Булгаков'},
  {id:2 , name: 'Пушкин'},
  {id:3 , name: 'Тургенев'},
]

const books = [
  {id:1 , idAuthor: 1, name: 'Булгаков книга 1'},
  {id:2 , idAuthor: 1, name: 'Булгаков книга 2'},
  {id:3 , idAuthor: 1, name: 'Булгаков книга 3'},
  {id:4 , idAuthor: 2, name: 'Пушкин книга 1'},
  {id:5 , idAuthor: 2, name: 'Пушкин книга 2'},
  {id:6 , idAuthor: 2, name: 'Пушкин книга 3'},
  {id:7 , idAuthor: 2, name: 'Пушкин книга 4'},
  {id:8 , idAuthor: 3, name: 'Тургенев книга 1'},
  {id:9 , idAuthor: 3, name: 'Тургенев книга 2'},
]

const reviewList = [
  {id: 1, idBook: 1, text: "Хорошая книга Хорошая книга Хорошая книга Хорошая книга Хорошая книга Хорошая книга Хорошая книга Хорошая книга", username: "Серый лис", date: "12.03.2021"},
  {id: 2, idBook: 1, text: "Хорошая книга Хорошая книга Хорошая книга Хорошая книга Хорошая книга", username: "Серый лис", date: "12.03.2021"},
  {id: 3, idBook: 1, text: "Хорошая книга", username: "Серый лис", date: "12.03.2021"},
  {id: 4, idBook: 1, text: "Хорошая книга", username: "Серый лис", date: "12.03.2021"},
] 

interface IBook {
  id: number;
  idAuthor: number;
  name: string;
}

interface IReview {
  id: number;
  idBook: number;
  text: string;
  username: string;
  date: string;
}

export const reviews = createModel<RootModel>()({
  state: {
    error: null,
    authors,
    books: [],
    reviewList: [],
  },
  reducers: {
    SET_BOOKS: (state:any, payload:IBook[])=> {
      return {
        ...state,
        books: payload
      }
    },
    SET_REVIEWS: (state:any, payload:IReview[])=> {
      return {
        ...state,
        reviewList: payload
      }
    }
  },
  effects: (dispatch) => ({
    getBooksName(payload:string){
      // TODO после оформления endpoint'a бэкендом
        const searchAuthor = authors.filter(el => el.name.indexOf(payload) !== -1 )
        if (!!searchAuthor.length){
          const newBooks = books.filter((el:any) => el.idAuthor === searchAuthor[0]?.id)
          dispatch.reviews.SET_BOOKS(newBooks)
        }else{
          dispatch.reviews.SET_BOOKS([])
        }
        
        
    },
    getReviewsList(payload:string){
       // TODO после оформления endpoint'a бэкендом
      const searchBookName = books.filter(el => el.name.indexOf(payload) !== -1 )
      if (!!searchBookName.length){
        const newReviews = reviewList.filter((el:any) => el.idBook === searchBookName[0]?.id)
        dispatch.reviews.SET_REVIEWS(newReviews)
      }else{
        dispatch.reviews.SET_REVIEWS([])
      }
      
     
  },
    async sendReview ({author, book, text}){
      try {
            const data = {
              author,
              book,
              text,
            }
            const response = await axios.post(`${baseURL}/`, data );
            // TODO : Get response from back
        } catch (error) {
        console.error('Failed to send review - ', error);
        }
    }
    
  }),
});
