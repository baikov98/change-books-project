import { createModel} from "@rematch/core"
import { RootModel } from "."


interface IProps {
    auth: boolean;
}

export const authState = createModel<RootModel>()({
    state: {
        auth: false
    } as IProps,
    reducers: {
        SET_AUTH_STATE: (state: IProps, auth: boolean) => {
            return {
                auth: auth
            }
        }
    },
    effects: (dispatch) => ({
    // TODO
    })
})