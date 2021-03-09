import { Models } from '@rematch/core'
import { menu } from './menu'
import { authState } from './authState'
import { regFields } from './regFields'
import { startExchange } from './startExchange'
import { bookInfoFields } from './bookInfoFields'

export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    authState: typeof authState;
    regFields: typeof regFields;
    startExchange: typeof startExchange;
    bookInfoFields: typeof bookInfoFields;
}

export const models: RootModel = { 
    menu,
    authState,
    regFields,
    startExchange,
    bookInfoFields
 }