import { Models } from '@rematch/core'
import { menu } from './menu'
import { regFields } from './regFields'
import { user } from './user'


export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    regFields: typeof regFields;
    user: typeof user;
}

export const models: RootModel = { 
    menu,
    regFields,
    user
 }