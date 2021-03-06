import { Models } from '@rematch/core'
import { menu } from './menu'
import { authState } from './authState'
import { regFields } from './regFields'
import { startExchange } from './startExchange'

export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    authState: typeof authState;
    regFields: typeof regFields;
    startExchange: typeof startExchange;
}

export const models: RootModel = { 
    menu,
    authState,
    regFields,
    startExchange
 }