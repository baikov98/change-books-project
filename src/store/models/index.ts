import { Models } from '@rematch/core'
import { menu } from './menu'
import { authState } from './authState'
import { regFields } from './regFields'


export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    authState: typeof authState;
    regFields: typeof regFields;
}

export const models: RootModel = { 
    menu,
    authState,
    regFields
 }