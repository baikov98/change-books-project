import { Models } from '@rematch/core'
import { menu } from './menu'
import { regFields } from './regFields'
import { startExchange } from './startExchange'
import { bookInfoFields } from './bookInfoFields'
import { user } from './user'
import { navbar } from './navbar'


export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    regFields: typeof regFields;
    startExchange: typeof startExchange;
    bookInfoFields: typeof bookInfoFields;
    user: typeof user;
    navbar: typeof navbar;
}

export const models: RootModel = { 
    menu,
    regFields,
    startExchange,
    bookInfoFields,
    user,
    navbar
 }