import { RootState } from './../index';
import { createModel} from "@rematch/core"
import { RootModel } from "."

import api from '../../services/api'
import cookie from '../../services/CookieService'
import { isEmpty } from '../../utils/isObjectEmpty';

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
    error: string | null,
    isAuth: boolean,
    personalData: IPerosnalData,
}

export const user = createModel<RootModel>()({
    state: {
        error: null,
        isAuth: false,
        personalData: {},
    }as IProps,
    reducers: {
        setError: (state: IProps,error:string) => {
            return {
                ...state,
                error,
            }
        },
        SET_USER: (state: IProps, personalData: IPerosnalData) => {
            return {
                ...state,
                personalData,
                isAuth: true,
            }
        },
        LOGOUT_USER: (state: IProps) => {
            return {
                ...state,
                personalData: {},
                isAuth: false,
            }
        },
       
    },
    effects: (dispatch) =>  ({
        async checkAuth (_, rootState) {
            console.log("CHECK AUTH METHODS")
            const {personalData: user} = rootState?.user
            const token = cookie.get('token');
            if (isEmpty(user) && !isEmpty(token)) {
                console.log("APP HAS TOKEN , NO USER!")
                dispatch.user.getUser();
            }
        },
        async getUser (){
            try {
                const response = await api.get(`/api/v1/profile/`);
                console.log("GET USER = ", response);
                const newUser = {
                    name: response.data?.user?.first_name,
                    secondName: response.data?.user?.second_name,
                    thirdName: response.data?.user?.last_name,
                    nickname: response.data?.user?.username,
                    email: response.data?.user?.email,
                    indexLocation: response.data?.index,
                    city: response.data?.city,
                    street: response.data?.street,
                    homeNumber: response.data?.house,
                    buildNumber: response.data?.structure,
                    flatNumber: response.data?.apart,
                }
                dispatch.user.SET_USER(newUser)
            } catch (error) {
                console.error('Failed to GET USER - ', error);
                dispatch.user.setError(error)
                // dispatch.user.logout()
                //Если есть токен, но ошибка получения пользователя. Причины : недоступен сервер, 
            }
        },
        async activationAccount ({uid, token}){
            try {
                const response = await api.post(`/auth/users/activation`, {
                    uid,
                    token
                });
                console.log(response); 
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
                //Под вопросом стоил ли записывать юзера
                const newUser = {
                    name: response.data?.first_name,
                    secondName: response.data?.second_name,
                    thirdName: response.data?.last_name,
                    nickname: response.data?.username,
                    email: response.data?.email,
                    indexLocation: response.data?.address?.index,
                    city: response.data?.address?.city,
                    street: response.data?.address?.street,
                    homeNumber: response.data?.address?.house,
                    buildNumber: response.data?.address?.structure,
                    flatNumber: response.data?.address?.apart,
                }
                dispatch.user.SET_USER(newUser)
            } catch (error) {
                console.error('Failed to registration - ', error);
            }
        },
        async login({username, password}) {
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
                
                dispatch.user.getUser()
                dispatch.menu.SET_MODAL(false);
            } catch (error) {
                console.error('Failed to auth token - ', error);
                //Тут ошибка получения токена → недоступен сервер, неудалост создать токен, нет такого пользователя
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

        async logout(){
            cookie.remove('token', { path: '/' })
            dispatch.user.LOGOUT_USER()
        }
    })
})