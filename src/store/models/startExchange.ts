import { createModel } from "@rematch/core";
import { RootModel } from ".";

export interface IStartExchange {
    step: number,
    data: object
}

export const startExchange = createModel<RootModel>()({
    state: {
      step: 0,
      data: {}
    } as IStartExchange,

    reducers: {
      SET_EXCHANGE_STEP: (state: IStartExchange, payload: number) => {
          return {
            ...state,
            step: payload
          }
      },
      SET_EXCHANGE_DATA: (state: IStartExchange, payload: object) => {
        return {
          ...state,
          data: {...state.data, ...payload }
        }
    },
  },
});
