import { Models } from '@rematch/core'
import { menu } from './menu'
import { authState } from './authState'


export interface RootModel extends Models<RootModel> {
    menu: typeof menu;
    authState: typeof authState;
}

export const models: RootModel = { 
    menu,
    authState
 }