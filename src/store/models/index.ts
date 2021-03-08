import { Models } from '@rematch/core'
import { menu } from './menu'
import { authState } from './authState'
import { regFields } from './regFields'
import { user } from './user'


export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    authState: typeof authState;
    regFields: typeof regFields;
    user: typeof user;
}

export const models: RootModel = { 
    menu,
    authState,
    regFields,
    user
 }