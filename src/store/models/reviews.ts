import { createModel } from "@rematch/core";
import { RootModel } from ".";
import api from '../../services/api';

interface IAuthors {
  id: number;
  name: string;
  last_name: string;
}

interface IUser {
  first_name: string,
  last_name: string,
  second_name: string,
  email: string,
  username: string,
}

interface IBook {
  id: number;
  name: string;
}

interface IReview {
  id: number;
  user: IUser;
  created_at: Date;
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
    setError: (state:IProps, error:string | null)=> {
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
            dispatch.reviews.setError(null)
        } catch (error) {
          console.error('Failed to send review - ', error);
          dispatch.reviews.setError('Ошибка при отправки отзыва')
        }
    }
    
  }),
});
