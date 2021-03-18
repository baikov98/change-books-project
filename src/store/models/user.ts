import { createModel} from "@rematch/core"
import { RootModel } from "."

import api from '../../services/api'
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
    name?: string,
    secondName?: string,
    thirdName?: string,
    nickname?: string,
    email?: string,
    indexLocation?: string,
    city?: string,
    street?: string,
    homeNumber?: string,
    buildNumber?: string,
    flatNumber?: string,
    password?: string,
    confirmPassword?: string,
}

export interface IUser {
    id?: number,
    name?: string,
    secondName?: string,
    thirdName?: string,
    nickname?: string,
    email?: string,
    address?: {
        indexLocation?: string,
        city?: string,
        street?: string,
        homeNumber?: string,
        buildNumber?: string,
        flatNumber?: string,
        is_default?: boolean
    },
    confirmPassword?: string,
}

interface IProps {
    personalData: IPerosnalData,
}

export const user = createModel<RootModel>()({
    state: {
        personalData,
    }as IProps,
    reducers: {
        SET_USER: (state: IProps, personalData: IPerosnalData) => {
            return {
                ...state,
                personalData,
            }
        },
        LOGOUT_USER: (state: IProps) => {
            return {
                ...state,
                personalData: {},
            }
        },
       
    },
    effects: (dispatch) =>  ({
        async activationAccount ({uid, token}){
            try {
                const response = await api.post(`/auth/users/activation`, {
                    uid,
                    token
                });
                console.log(response);
                const auth_token = {
                    access: response.data?.access,
                    refresh: response.data?.refresh,
                }
                cookie.set('token',auth_token, {path : '/'})
            } catch (error) {
            console.error('Failed to activation account - ', error);
            }
        },
        async resetPassword({email}) {
            try {
                const response = await api.post(`/auth/users/reset_password`, {
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
                
                const response = await api.post(`/api/v1/auth/users/`, data);
                console.log(response);
                const newUser = {
                    name: response.data?.first_name,
                    secondName: response.data?.last_name,
                    thirdName: response.data?.second_name,
                    nickname: response.data?.username,
                    email: response.data?.email,
                    indexLocation: response.data?.address?.index,
                    city: response.data?.address?.city,
                    street: response.data?.address?.street,
                    homeNumber: response.data?.address?.house,
                    buildNumber: response.data?.address?.structure,
                    flatNumber: response.data?.address?.apart,
                }
                dispatch.SET_USER(newUser)
            } catch (error) {
            console.error('Failed to reset password - ', error);
            }
        },
        async login({email, password}) {
            try {
                const data = {
                    username: "test_user",
                    password: "test_user", 
                }
                const response = await api.post(`/api/v1/auth/jwt/create/`, data);
                console.log("response = ", response);
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
              
                const response = await api.post(`/auth/token`, data);
                console.log(response);
            } catch (error) {
                console.error('Failed to change person data - ', error);
            }
        },

        logout(){
            cookie.remove('token')
            dispatch.user.LOGOUT_USER()
        }
    })
})