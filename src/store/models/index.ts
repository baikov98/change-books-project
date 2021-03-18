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
import { feedBack } from './feedBack'
import { requestExchangeBooks } from './requestExchangeBooks'
import { requestWishBooks } from './requestWishBooks'
import { archiveExchange } from './archiveExchange' 
import { reviews } from './reviews' 
import { messages } from './messages' 

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
    requestExchangeBooks: typeof requestExchangeBooks;
    requestWishBooks: typeof requestWishBooks;
    feedBack: typeof feedBack;
    archiveExchange: typeof archiveExchange;
    reviews: typeof reviews;
    messages: typeof messages;
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
    requestExchangeBooks,
    requestWishBooks,
    feedBack,
    archiveExchange,
    reviews,
    messages
 }