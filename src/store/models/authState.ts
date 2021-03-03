import { createModel} from "@rematch/core"
import { RootModel } from "."


export const authState = createModel<RootModel>()({
    state: {
        auth: false
    },
    reducers: {
        SET_AUTH_STATE: (state: any, auth: boolean) => {
            return {
                auth: auth
            }
        }
    },
    effects: (dispatch) => ({

    })
})