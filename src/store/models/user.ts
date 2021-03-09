import { createModel} from "@rematch/core"
import { RootModel } from "."
import { baseURL } from "../../constants"

import axios from 'axios'
import cookie from '../../services/CookieService'

interface IUser {
    name?: string
    email?: string,
    password?: null,
    passwordToken?: null,
    token?: null,
}

interface IProps {
    currentUser: IUser
}

export const user = createModel<RootModel>()({
    state: {
        currentUser: {}
    }as IProps,
    reducers: {
        SET_USER: (state: IProps, currentUser:{}) => {
            return {
                ...state,
                currentUser,
            }
        },
        LOGOUT_USER: (state: IProps) => {
            return {
                ...state,
                currentUser: {},
            }
        }
    },
    effects: (dispatch) =>  ({
        async resetPassword({email}) {
            console.log('Reset password = ', email)
            try {
                const response = await axios.post(`${baseURL}/auth/users/reset_password`, {
                    email
                });
                console.log(response);
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        async registration(payload) {
            console.log('Registration = ', payload)
            try {
                const {email, password} = payload
                   const data = {
                       email,
                       password, 
                   }
                const headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
                const response = await axios.post(`${baseURL}/auth/users`, data, {headers});
                console.log(response);
                cookie.set('token', response.data?.token, {path : '/'})
                dispatch.SET_USER(response)
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        async login(payload) {
            console.log('Auth = ', payload)
            try {
                   const {email, password} = payload
                   const data = {
                       email,
                       password, 
                   }
                const headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
                const response = await axios.post(`${baseURL}/auth/token`, data, {headers});
                console.log(response);
                cookie.set('token', response.data?.token, {path : '/'})
                dispatch.SET_USER(response)
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        logout(){
            cookie.remove('token')
            dispatch.LOGOUT_USER()
        }
    })
})