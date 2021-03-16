import { baseURL } from '../../constants/index';
import { createModel } from "@rematch/core";
import { RootModel } from ".";
import axios from 'axios'

export interface IRequest {
  topic: string;
  text: string;
}

export const feedBack = createModel<RootModel>()({
  state: {
    error: null,
  },
  reducers: {
  },
  effects: (dispatch) => ({
    async sendRequest({topic, text}){
        try {
            // TODO после оформления endpoint'a бэкендом
            const response = await axios.post(`${baseURL}/`, {
                topic,
                text
            });
            console.log(response);
        } catch (error) {
        console.error('Failed to send request to administrator - ', error);
        }
    }
  }),
});
