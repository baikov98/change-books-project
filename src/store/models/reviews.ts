import { baseURL } from '../../constants/index';
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import axios from 'axios'
import api from '../../services/api';

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

interface IAuthors {
  id: number;
  name: string;
  last_name: string;
}

interface IBook {
  id: number;
  name: string;
}

interface IReview {
  id: number;
  user: string;
  created_at: string;
  response: string;
}

interface IProps {
  error: string | null,
  authors: IAuthors[] | [],
  books: IBook[] | [],
  reviewList: IReview[] | [],
}

export const reviews = createModel<RootModel>()({
  state: {
    error: null,
    authors: [],
    books: [],
    reviewList: [],
  } as IProps,
  reducers: {
    setError: (state:IProps, error:string)=> {
      return {
        ...state,
        error,
      }
    },
    SET_AUTHORS: (state:IProps, authors:IAuthors[])=> {
      return {
        ...state,
        authors,
      }
    },
    SET_BOOKS: (state:IProps, books:IBook[])=> {
      return {
        ...state,
        books,
      }
    },
    SET_REVIEWS: (state:IProps, reviewList:IReview[])=> {
      return {
        ...state,
        reviewList,
      }
    }
  },
  effects: (dispatch) => ({
    async getAuthors (){
      try {
        const response = await api.get(`/api/v1/authors/`);
        const data = response?.data
        dispatch.reviews.SET_AUTHORS(data)
    } catch (error) {
        console.error('Failed to GET AUTHORS LIST - ', error);
    }
    },
    async getBooksName(authorId:string){
       try{
          const response = await api.get(`/api/v1/authors/${authorId}/books`)
          const data = response?.data || []
          dispatch.reviews.SET_BOOKS(data)
        }catch(error){
          console.error('Failed to GET BOOKS LIST - ', error);
          dispatch.reviews.SET_BOOKS([])
        }
    },
    async getReviewsList(bookId:string){
      try{
        const response = await api.get(`/api/v1/books/${bookId}/responses/`)
        const data = response?.data || []
        dispatch.reviews.SET_REVIEWS(data)
      }catch(error){
        console.error('Failed to GET REVIEWS LIST - ', error);
        dispatch.reviews.SET_REVIEWS([])
      }
  },
    async sendReview ({book, text}){
      try {
            const data = {
              response: text,
            }
            const response = await api.post(`/api/v1/books/${book}/responses`, data)
            
        } catch (error) {
          console.error('Failed to send review - ', error);
          dispatch.reviews.setError('Ошибка при отправки отзыва')
        }
    }
    
  }),
});
