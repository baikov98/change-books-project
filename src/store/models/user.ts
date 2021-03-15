import { createModel} from "@rematch/core"
import { RootModel } from "."
import { baseURL } from "../../constants"

import axios from 'axios'
import cookie from '../../services/CookieService'

const personalData = {
    name: "Александр",
    secondName: 'Волков',
    thirdName: 'Игоревич',
    nickname: 'BookReader',
    email: 'volkov@gmail.com',
    indexLocation: '124223',
    city: 'Москва',
    street: 'Братиславская',
    homeNumber: '31',
    buildNumber: '1',
    flatNumber: '45',
}
export interface IPerosnalData {
    name: string,
    secondName: string,
    thirdName: string,
    nickname: string,
    email: string,
    indexLocation: string,
    city: string,
    street: string,
    homeNumber: string,
    buildNumber: string,
    flatNumber: string,
    password: string,
    confirmPassword: string,
}

interface IUser {
    name?: string,
    secondName?: string, //фамилия
    thirdName?: string,
    email?: string,
    userName?: string,
    token?: null,
}

interface IProps {
    currentUser: IUser,
    personalData: IPerosnalData,
}

export const user = createModel<RootModel>()({
    state: {
        currentUser: {},
        personalData,
    }as IProps,
    reducers: {
        SET_USER: (state: IProps, currentUser:IUser) => {
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
        },
        SET_PERSONAL_DATA: (state: IProps, personalData: IPerosnalData) => {
            return {
                ...state,
                personalData,
            }
        }
    },
    effects: (dispatch) =>  ({
        async activationAccount ({uid, token}){
            try {
                const response = await axios.post(`${baseURL}/auth/users/activation`, {
                    uid,
                    token
                });
                // console.log(response);
            } catch (error) {
            console.error('Failed to activation account - ', error);
            }
        },
        async resetPassword({email}) {
            try {
                const response = await axios.post(`${baseURL}/auth/users/reset_password`, {
                    email
                });
                console.log(response);
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        async registration({secondName, name, thirdName, nickname, email, password, confirmPassword, indexLocation, city, street, homeNumber, buildNumber, flatNumber}) {
            try {
                   const data = {
                       first_name: name,
                       last_name: secondName,
                       second_name: thirdName,
                       username: nickname,
                       email,
                       password,
                       re_password: confirmPassword,
                       address: {
                            index:indexLocation,
                            city,
                            street,
                            house: homeNumber,
                            structure: buildNumber,
                            apart: flatNumber,
                       }
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
        async login({email, password}) {
            try {
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
                const token = {
                    access: response.data?.access,
                    refresh: response.data?.refresh,
                }
                cookie.set('token',token, {path : '/'})
            } catch (error) {
                console.error('Failed to auth token - ', error);
            }
        },
        async changeUserData({secondName, name, thirdName, nickname, email, indexLocation, city, street, homeNumber, buildNumber, flatNumber}) {
            try {
                   const data = {
                       email,
                       name,
                       secondName,
                       thirdName, //утчнить название у бэка
                       username: nickname,
                       postcode: indexLocation,
                       city,
                       street,
                       homeNumber,
                       buildNumber,
                       flatNumber,  
                   }
                const headers = {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }
                // TODO - после оформления бэка
                // const response = await axios.post(`${baseURL}/auth/token`, data, {headers}); АПИ не готово 
                // console.log(response);
            } catch (error) {
                console.error('Failed to change person data - ', error);
            }
        },

        logout(){
            cookie.remove('token')
            dispatch.LOGOUT_USER()
        }
    })
})