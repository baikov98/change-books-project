
import { RootState } from "../../../../../store";

export const getBookInput = (state: RootState) => {
    return state.bookInfoFields.main
}


