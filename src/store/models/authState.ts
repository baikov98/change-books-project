import { createModel} from "@rematch/core"
import { RootModel } from "."

interface IProps {
    auth: boolean;
}
export const authState = createModel<RootModel>()({
    state: {
        auth: false
    }as IProps,
    reducers: {
        SET_AUTH_STATE: (state: IProps, auth: boolean) => {
            return {
                auth: auth
            }
        }
    },
    effects: (dispatch) =>  ({
        async loadData(payload, rootState) {
           
            // const response = await fetch('http://example.com/data')
            // const data = await response.json()
           
            // dispatch.SET_AUTH_STATE(data)
          }
    })
})