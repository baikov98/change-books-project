import { createModel} from "@rematch/core"
import { RootModel } from "."
import { baseURL } from "../../constants"
import axios from 'axios'

interface IUser {
    email: string,
    password: null,
    passwordToken: null,
    token: null,
}

interface IProps {
    isAuth: boolean;
    currentUser: {}
}

export const user = createModel<RootModel>()({
    state: {
        isAuth: false,
        currentUser: {}
    }as IProps,
    reducers: {
        SET_AUTH_STATE: (state: IProps, isAuth: boolean) => {
            return {
                ...state,
                isAuth
            }
        },
        SET_USER: (state: IProps, isAuth: boolean, currentUser:{}) => {
            return {
                ...state,
                isAuth,
                currentUser,
            }
        }
    },
    effects: (dispatch) =>  ({
        async resetPassword({email}, rootState) {
            console.log('Reset password = ', email)
            console.log('rootState password = ', rootState)
            try {
                const response = await axios.post(`${baseURL}/auth/users/reset_password`, {
                    email
                });
                console.log(response);
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        async registration(payload, rootState) {
            console.log('Registration = ', payload)
            // try {
                // const {email, password} = payload
                //    const data = {
                //        email,
                //        password, 
                //    }
                // const headers = {
                //     'Content-Type': 'application/json',
                //     Accept: 'application/json',
                // }
            //     const response = await axios.post(`${baseURL}/auth/users`, {
            //         email:payload
            //     });
            //     console.log(response);
            // } catch (error) {
            // console.error('Failed to reset password - ', error);
            // }
        },
        async login(payload, rootState) {
            console.log('Auth = ', payload)
            // try {
                //    const {email, password} = payload
                //    const data = {
                //        email,
                //        password, 
                //    }
                // const headers = {
                //     'Content-Type': 'application/json',
                //     Accept: 'application/json',
                // }
            //     const response = await axios.post(`${baseURL}/auth/token`, data, {headers});
            //     console.log(response);
                // localStorage.setItem('token', token: response.token)
                // dispatch.SET_USER(response)
            // } catch (error) {
            // console.error('Failed to reset password - ', error);
            // }
        }
    })
})