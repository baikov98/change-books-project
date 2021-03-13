import { RootState } from './../index';

export const getList = (state: RootState) => state.menu.list;
export const getUser = (state: RootState) => state.user.currentUser;
export const getNavList = (state: RootState) => state.navbar.list;

//REGISTRATION 
export const getMainInput = (state: RootState) => state.regFields.main;
export const getAdressInput = (state: RootState) => state.regFields.adress;

// OFFERS LIST
export const getBookInfo = (state: RootState) => state.offersExchange.bookInfo;

// ACTIVE EXCHANGE
export const getActiveExchange = (state: RootState) => state.activeExchange.list;
