import { Models } from '@rematch/core'
import { menu } from './menu'
import { regFields } from './regFields'
import { startExchange } from './startExchange'
import { bookInfoFields } from './bookInfoFields'
import { bookCategories } from './bookCategories'
import { user } from './user'
import { navbar } from './navbar'
import { requestData } from './requestData'
import { requestExchangeBooks } from './requestExchangeBooks'
import { requestWishBooks } from './requestWishBooks'

export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    regFields: typeof regFields;
    startExchange: typeof startExchange;
    bookInfoFields: typeof bookInfoFields;
    user: typeof user;
    navbar: typeof navbar;
    bookCategories: typeof bookCategories;
    requestData: typeof requestData;
    requestExchangeBooks: typeof requestExchangeBooks;
    requestWishBooks: typeof requestWishBooks;
}

export const models: RootModel = { 
    menu,
    regFields,
    startExchange,
    bookInfoFields,
    user,
    navbar,
    bookCategories,
    requestData,
    requestExchangeBooks,
    requestWishBooks
 }