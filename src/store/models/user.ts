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
    rating?: string, 
    indexLocation?: string,
    city?: string,
    street?: string,
    homeNumber?: string,
    buildNumber?: string,
    flatNumber?: string,
    password?: string,
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
        resetError: (state: IProps) => ({
            ...state,
            error: null,
          }),
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
            //Метод проверки авторизации пользователя
            const {personalData: user} = rootState?.user
            const token = cookie.get('token');
            if (isEmpty(user) && !isEmpty(token)) {
                dispatch.user.getUser();
            }
        },
        async getUser (){
            try {
                const response = await api.get(`/api/v1/profile/`);
                const newUser = {
                    name: response.data?.first_name,
                    secondName: response.data?.last_name,
                    thirdName: response.data?.second_name,
                    nickname: response.data?.username,
                    email: response.data?.email,
                    rating: response.data?.rating,
                    indexLocation: response.data?.address[0]?.index || '',
                    city: response.data?.address[0]?.city || '',
                    street: response.data?.address[0]?.street || '',
                    homeNumber: response.data?.address[0]?.house || '',
                    buildNumber: response.data?.address[0]?.structure || '',
                    flatNumber: response.data?.address[0]?.apart || '',
                }
                dispatch.user.SET_USER(newUser)
                dispatch.user.resetError()
            } catch (error) {
                console.error('Failed to GET USER - ', error);
                dispatch.user.setError("*Данные этого пользователя не найдены")
                dispatch.user.logout()
                //Если есть токен, но ошибка получения пользователя. Причины : недоступен сервер, 
            }
        },
        async patchUser ({secondName, name, thirdName, nickname, email, indexLocation, city, street, homeNumber, buildNumber, flatNumber}){
            try {
                const data = {
                    first_name: name,
                    last_name: secondName,
                    second_name: thirdName,
                    username: nickname,
                    email,
                    address: [{
                         index:indexLocation,
                         city,
                         street,
                         house: homeNumber,
                         structure: buildNumber,
                         apart: flatNumber,
                    }]
                }
                const response = await api.patch(`/api/v1/profile/`, data);
                const rating = response.data.rating
                const newUser = {
                    secondName, name, thirdName, nickname, email, rating, indexLocation, city, street, homeNumber, buildNumber, flatNumber
                }
                dispatch.user.SET_USER(newUser)
                dispatch.user.resetError()
            } catch (error) {
                console.error('Failed to GET USER - ', error);
                dispatch.user.setError("*Данные этого пользователя не найдены")
                dispatch.user.logout()
                //Если есть токен, но ошибка получения пользователя. Причины : недоступен сервер, 
            }
        },
        async activationAccount ({uid, token}){
            try {
                const response = await api.post(`/api/v1/auth/users/activation/`, {
                    uid,
                    token
                });
            } catch (error) {
                console.error('Failed to activation account - ', error);
            }
        },
        async resetPassword({email}) {
            try {
                const response = await api.post(`/api/v1/auth/users/reset_password/`, {
                    email
                });
                dispatch.user.resetError()
                
            } catch (error) {
                console.error('Failed to reset password - ', error);
                dispatch.user.setError('*На сервере произошла ошибка или введён не верный Email')
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
                            house: homeNumber || '',
                            structure: buildNumber || '',
                            apart: flatNumber || '',
                       }
                   }
                
                const response = await api.post(`/api/v1/auth/users/`, data);
                dispatch.user.resetError()
            } catch (error) {
                console.error('Failed to registration - ', error);
                dispatch.user.setError('Ошибка в регистрации пользователя')
            }
        },
        async login({email, password}) {
            try {
                const data = {
                    email,
                    password, 
                }
                const response = await api.post(`/api/v1/auth/jwt/create/`, data);
                console.log("response = ", response);
                const token = {
                    access: response.data?.access,
                    refresh: response.data?.refresh,
                }
                cookie.set('token',token, {path : '/'})
                dispatch.user.getUser()
                dispatch.user.resetError()
               
            } catch (error) {
                console.error('Failed to auth token - ', error);
                dispatch.user.setError("* Пользователь не найден")
                //Тут ошибка получения токена → недоступен сервер, неудалось создать токен, нет такого пользователя
            }
        },
        async changeUserData({secondName, name, thirdName, nickname, email, indexLocation, city, street, homeNumber, buildNumber, flatNumber}) {
            try {
                   const data = {
                       email,
                       name,
                       secondName,
                       thirdName,
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