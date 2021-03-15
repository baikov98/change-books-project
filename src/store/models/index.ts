import { Models } from '@rematch/core'
import { menu } from './menu'
import { regFields } from './regFields'
import { startExchange } from './startExchange'
import { bookInfoFields } from './bookInfoFields'
import { bookCategories } from './bookCategories'
import { user } from './user'
import { navbar } from './navbar'
import { offersExchange } from './offersExchange'
import { activeExchange } from './activeExchange'
import { askQuestion } from './askQuestion'

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
    offersExchange: typeof offersExchange;
    activeExchange: typeof activeExchange;
    bookCategories: typeof bookCategories;
    requestData: typeof requestData;
    requestExchangeBooks: typeof requestExchangeBooks;
    requestWishBooks: typeof requestWishBooks;
    askQuestion: typeof askQuestion;
}

export const models: RootModel = { 
    menu,
    regFields,
    startExchange,
    bookInfoFields,
    user,
    navbar,
    offersExchange,
    activeExchange,
    bookCategories,
    requestData,
    requestExchangeBooks,
    requestWishBooks,
    askQuestion,
 }