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
  {id:1 , idAuthor: 1,  name: 'Булгаков книга 1'},
  {id:2 , idAuthor: 1, name: 'Булгаков книга 2'},
  {id:3 , idAuthor: 1, name: 'Булгаков книга 3'},
  {id:4 , idAuthor: 2, name: 'Пушкин книга 1'},
  {id:5 , idAuthor: 2, name: 'Пушкин книга 2'},
  {id:6 , idAuthor: 2, name: 'Пушкин книга 3'},
  {id:7 , idAuthor: 2, name: 'Пушкин книга 4'},
  {id:8 , idAuthor: 3, name: 'Тургенев книга 1'},
  {id:9 , idAuthor: 3, name: 'Тургенев книга 2'},
]

interface IBook {
  id: number;
  idAuthor: number;
  name: string;
}

export const reviews = createModel<RootModel>()({
  state: {
    error: null,
    authors,
    books,
  },
  reducers: {
    SET_BOOKS: (state:any, payload:IBook[])=> {
      return {
        ...state,
        books: payload
      }
    }
  },
  effects: (dispatch) => ({
    getBooksName(payload:string){
        const searchAuthor = authors.filter(el => el.name.indexOf(payload) !== -1 )
        if (!!searchAuthor.length){
          const newBooks = books.filter((el:any) => el.idAuthor === searchAuthor[0]?.id)
          dispatch.reviews.SET_BOOKS(newBooks)
        }else{
          dispatch.reviews.SET_BOOKS([])
        }
        
        // TODO после оформления endpoint'a бэкендом
        // try {
        //     
        //     const response = await axios.post(`${baseURL}/`, );
        //     console.log(response);
        // } catch (error) {
        // console.error('Failed to send request to administrator - ', error);
        // }
    }
    
  }),
});
