
import { RootState } from "../../../../../store";

export const getMainInput = (state: RootState) => {
    return state.regFields.main
  }
export const getAdressInput = (state: RootState) => {
    return state.regFields.adress
  }


