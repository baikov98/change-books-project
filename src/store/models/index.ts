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

import { requestData } from './requestData'

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
    requestData
 }